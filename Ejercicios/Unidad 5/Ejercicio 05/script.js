import Disco from "./disco.js";

window.onload = iniciar;

let discos = [];

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  document
    .getElementById("formDisco")
    .addEventListener("submit", crearDisco, false);
  document
    .getElementById("mostrarTabla")
    .addEventListener("click", mostrarDiscos, false);
}

// Validaciones de los campos
function validarNombreGrupo() {
  let elementoNombre = document.getElementById("name");
  let elementoGrupo = document.getElementById("group");

  if (!elementoNombre.checkValidity() || !elementoGrupo.checkValidity()) {
    if (elementoNombre.validity.valueMissing) {
      error(elementoNombre, "Tienes que introducir un nombre");
    } else {
      error(elementoGrupo, "Tienes que introducir un grupo");
    }

    if (elementoNombre.validity.patternMismatch) {
      error(elementoNombre, "El nombre debe tener 20 o menos caracteres");
    } else if (elementoGrupo.validity.patternMismatch) {
      error(elementoGrupo, "El grupo debe tener 20 o menos caracteres");
    }

    return false;
  }

  return true;
}

function validarPublicacion() {
  let elemento = document.getElementById("ano");

  if (!elemento.checkValidity()) {
    if (elemento.validity.rangeOverflow) {
      error(
        elemento,
        "El año de publicación debe de ser menor al actual: 2023"
      );
    }

    if (elemento.validity.rangeUnderflow) {
      error(elemento, "El año de publicación debe de ser mayor de 0");
    }

    return false;
  }

  return true;
}

function validarLocalizacion() {
  let elemento = document.getElementById("localization");

  if (!elemento.checkValidity()) {
    if (elemento.validity.patternMismatch) {
      error(elemento, "La localización o es una cadena vacía o son números");
    }

    return false;
  }

  return true;
}

// Validación de todos los campos
function validar(e) {
  borrarError();

  if (
    validarNombreGrupo() &&
    validarPublicacion() &&
    validarLocalizacion() &&
    confirm("Pulsa aceptar si deseas crear el disco")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

// Control de errores
function error(elemento, mensaje) {
  const mensajeError = document.getElementById("mensajeError");

  mensajeError.innerHTML = mensaje;
  mensajeError.className = "errorMensaje";
  elemento.className = "error";
  elemento.focus();

  switch (elemento.id) {
    case "name":
      document.getElementById("nombre").className = "errorMensaje";
      break;
    case "group":
      document.getElementById("grupo").className = "errorMensaje";
      break;
    case "ano":
      document.getElementById("year").className = "errorMensaje";
      break;
    case "localization":
      document.getElementById("localizacion").className = "errorMensaje";
      break;
  }
}

function borrarError() {
  let formulario = document.forms[0];
  const mensajeError = document.getElementById("mensajeError");
  let divs = ["nombre", "grupo", "year", "localizacion"];

  mensajeError.innerHTML = "";
  mensajeError.className = "";

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < divs.length; j++) {
    document.getElementById(divs[j]).className = "";
  }
}

// Creación de discos
function crearDisco(event) {
  event.preventDefault();

  let nombre = document.getElementById("name").value;
  let grupo = document.getElementById("group").value;
  let year = document.getElementById("ano").value;
  let tipo = document.getElementById("type").value;
  let localizacion = document.getElementById("localization").value;
  let prestado = document.getElementById("lent").checked;

  let disco = new Disco(nombre, grupo, year, tipo, localizacion, prestado);
  discos.push(disco);
}

// Mostrar tabla discos
function mostrarDiscos() {
  let respuesta = prompt(
    "¿En qué orden quieres mostrar los discos? \n 1 - Por defecto \n 2 - En orden inverso \n 3- Alfabéticamente"
  );
  let tabla = `<table border="1"><tr><th>Posicion</th><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th><th>Prestado</th></tr>`;
  let discosOrdenados;

  switch (respuesta) {
    case "1":
      discosOrdenados = discos;
      break;
    case "2":
      discosOrdenados = discos.slice().reverse();
      break;
    case "3":
      discosOrdenados = discos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    default:
      alert("No has introducido una opción válida");
      return;
  }

  let i = 0;
  discosOrdenados.forEach((disco) => {
    i++;
    tabla +=
      `<tr><td>` +
      i +
      `</td><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.year}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td></tr>`;
  });

  tabla += `</table>`;

  document.getElementById("discos").innerHTML = tabla;
}
