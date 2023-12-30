import Persona from "./persona.js";

const NOMBRE = document.getElementById("registro_nombre");
const APELLIDO = document.getElementById("registro_apellido");
const MAIL = document.getElementById("registro_email");
const RECORDAR = document.getElementById("registro_condiciones");
const MENSAJE_ERROR = document.getElementById("mensajeError");
const FORM = document.getElementById("registro");

// Creamos el array de Personas
let personas = [];

document.getElementById("enviar").addEventListener("click", validar, false);

function validarNombre() {
  var elemento = document.getElementById("registro_nombre");
  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "El Nombre no puede ser vacío");
    }

    if (elemento.validity.patternMismatch) {
      error(elemento, "El nombre ha de contener entre 5 y 20 caracteres");
    }

    return false;
  }

  return true;
}

function validarApellido() {
  if (!APELLIDO.checkValidity()) {
    if (APELLIDO.validity.valueMissing) {
      error(APELLIDO, "El apellido no puede ser vacío");
    }

    if (APELLIDO.validity.patternMismatch) {
      error(APELLIDO, "El apellido ha de contener entre 2 y 50 caracteres");
    }

    return false;
  }

  return true;
}

function validarMail() {
  if (!MAIL.checkValidity()) {
    if (MAIL.validity.valueMissing) {
      error(MAIL, "El correo no puede ser vacío");
    }

    if (MAIL.validity.patternMismatch) {
      error(MAIL, "El correo no tiene el formato correcto");
    }

    return false;
  }

  return true;
}

function validar(e) {
  borrarError();
  e.preventDefault();

  if (!RECORDAR.checked) {
    error(RECORDAR, "Debe de aceptar las condiciones de uso antes de acceder");
  }

  if (
    validarNombre() &&
    validarApellido() &&
    validarMail() &&
    RECORDAR.checked
  ) {

    // Introducimos a la persona
    let persona = new Persona(
      NOMBRE.value,
      APELLIDO.value,
      MAIL.value,
    );
    personas.push(persona);

    alert(
      "Datos de " +
        NOMBRE.value +
        " y " +
        APELLIDO.value +
        " registrados correctamente"
    );
    return true;
  } else {
    return false;
  }
}

function error(elemento, mensaje) {
  elemento.className = "error";
  elemento.focus();

  FORM.className = "error";

  MENSAJE_ERROR.innerHTML = mensaje;
  MENSAJE_ERROR.className = "mensajeError";
}

function borrarError() {
  let formulario = document.forms[0];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  MENSAJE_ERROR.className = "normal";
  MENSAJE_ERROR.innerHTML = "";
}
