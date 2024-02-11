let imagen = document.querySelector("img");
let consejo = document.querySelector("#consejo");
let userName = document.querySelector("#userName");
let datos = document.querySelector("#datos");
let localizacion = document.querySelector("#localizacion");
let adelante = document.querySelector(".fa-arrow-right");
let atras = document.querySelector(".fa-arrow-left");
let pagina = document.querySelector("#pagina");

numero = 1;
let consejos = [];
let personas = [];

async function cargarConsejo() {
  const respuesta = await fetch("https://api.adviceslip.com/advice");
  const datosAPI = await respuesta.json();

  consejos.push(datosAPI.slip.advice);
}

async function cargarDatos() {
  let contador = 0;
  await $.ajax({
    url: "https://randomuser.me/api/?results=6&format=XML",
    dataType: "xml",
    success: function (data) {
      $(data)
        .find("results")
        .each(function () {
          contador++;

          if (contador < 7) {
            persona = {
              usuario: $(this).find("login").find("username").text(),
              titulo: $(this).find("name").find("title").text(), // Cuidado con las comillas
              nombre: $(this).find("name").find("first").text(),
              apellido: $(this).find("name").find("last").text(),
              ciudad: $(this).find("location").find("city").text(),
              pais: $(this).find("location").find("country").text(),
              image: $(this).find("picture").find("large").text(),
              mail: $(this).find("email").text(),
            };

            personas.push(persona);
          }
        });
    },
  });
}

function showPersonas(numero) {
  numeroPersona = numero - 1;

  userName.innerHTML = "@" + personas[numeroPersona].usuario;

  imagen.src = personas[numeroPersona].image;
  imagen.title = personas[numeroPersona].mail;
  imagen.alt = "Persona número " + numero;

  consejo.innerHTML = consejos[numeroPersona];

  datos.innerHTML =
    personas[numeroPersona].titulo +
    " " +
    personas[numeroPersona].nombre +
    " " +
    personas[numeroPersona].apellido;

  localizacion.innerHTML =
    personas[numeroPersona].ciudad + ", " + personas[numeroPersona].pais;

  pagina.innerHTML = "Página número " + numero;
}

function paginar(numero) {
  if (numero < 1) {
    numero = 1;
  }

  if (numero > personas.length + 1) {
    numero = personas.length + 1;
  }

  if (numero == 1) {
    atras.classList.add("desaparecer");
    atras.classList.remove("aparecer");
  } else {
    atras.classList.remove("desaparecer");
    atras.classList.add("aparecer");
  }

  if (numero == personas.length) {
    adelante.classList.add("desaparecer");
    adelante.classList.remove("aparecer");
  } else {
    adelante.classList.remove("desaparecer");
    adelante.classList.add("aparecer");
  }

  showPersonas(numero);
}

async function moverAdelante() {
  numero++;

  if (consejos.length <= personas.length) {
    await cargarConsejo();
    paginar(numero);
  } else{
    paginar(numero);
  }
}

function moverAtras() {
  numero--;
  paginar(numero);
}

async function inicio() {
  await cargarConsejo();
  await cargarDatos();

  paginar(numero);
}

document.addEventListener("DOMContentLoaded", inicio, false);
adelante.addEventListener("click", moverAdelante, false);
atras.addEventListener("click", moverAtras, false);
