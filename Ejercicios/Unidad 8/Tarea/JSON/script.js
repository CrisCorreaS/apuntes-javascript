let enlace = document.querySelector("a");
let imagen = document.querySelector("img");
let parrafo = document.querySelector("p");
let adelante = document.querySelector(".fa-arrow-right");
let atras = document.querySelector(".fa-arrow-left");

let gatitos = [];
let numero = 1;

async function showGatito(num) {
  /*
  Si lo pongo de esta forma:
      enlace.href = await gatitos[num - 1].img;
      imagen.src = await gatitos[num - 1].img;
      parrafo.innerHTML = "Este es el gatito número " + num;

  La imagen sigue cargándose bastante después que el texto del párrafo

  Por eso tenemos que hacer lo siguiente:
  */
  const imgElement = new Image(); // creamos una nueva instancia de un objeto "Image". Este objeto representa un elemento <img> en el DOM pero puede ser manipulado sin tener que agregarlo al DOM directamente
  imgElement.src = gatitos[num - 1].img; // asignamos la URL de la imagen que deseamos cargar a la propiedad "src" del objeto "Image". Cuando se asigna una URL a "src", el navegador comienza a cargar la imagen desde esa URL

  // Esperamos a que la imagen se cargue y decodifique
  await imgElement.decode(); // utilizamos el método decode() del objeto "Image". Este método devuelve una promesa que se resuelve cuando la imagen ha terminado de cargarse y decodificarse

  // Ahora que la imagen está lista, actualizamos el enlace y la fuente de la imagen
  enlace.href = gatitos[num - 1].img;
  imagen.src = gatitos[num - 1].img;

  // Y finalmente actualizamos el contenido del párrafo
  parrafo.innerHTML = "Este es el gatito número " + num;
}

function paginar(numero) {
  if (numero < 1) {
    numero = 1;
  }
  
  if (numero > gatitos.length + 1) {
    numero = gatitos.length + 1;
  }

  if (numero == 1) {
    atras.classList.add("desaparecer");
    atras.classList.remove("aparecer");
  } else {
    atras.classList.remove("desaparecer");
    atras.classList.add("aparecer");
  }

  if (numero == gatitos.length + 1) {
    adelante.classList.add("desaparecer");
    adelante.classList.remove("aparecer");
  } else {
    adelante.classList.remove("desaparecer");
    adelante.classList.add("aparecer");
  }

  showGatito(numero);
}

function moverAdelante() {
  numero++;
  addGatito();
}

function moverAtras() {
  numero--;
  paginar(numero);
}

function addGatito() {
  $.ajax({
    url: "https://api.thecatapi.com/v1/images/search",
    dataType: "json",
    success: function (data) {
      gatito = {
        img: data[0].url, // Cuidado porque si en vez de (data) usas $(this) no funciona
      };

      gatitos.push(gatito);

      paginar(numero);
    },
  });
}

document.addEventListener("DOMContentLoaded", addGatito, false);

adelante.addEventListener("click", moverAdelante, false);
atras.addEventListener("click", moverAtras, false);
