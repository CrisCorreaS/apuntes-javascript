import Edificio from "./edificio.js";

const PRIMER_FORM = document.querySelector("#primerform");
const EDIFICIO_CALLE = document.querySelector("#calle");
const EDIFICIO_NUMERO = document.querySelector("#numero");
const EDIFICIO_CODIGO_POSTAL = document.querySelector("#cp");
const EDIFICIO_PLANTAS = document.querySelector("#plantas");
const EDIFICIO_PUERTAS = document.querySelector("#puertas");
const PRIMER_FORM_ENVIAR = document.querySelector("#enviar");
const ERROR_PRIMER_FORM = document.querySelector("#msgPrimerForm");

let edificios = [];

function validarCalle() {
  if (!EDIFICIO_CALLE.checkValidity()) {
    if (EDIFICIO_CALLE.validity.valueMissing) {
      error(EDIFICIO_CALLE, "Tienes que introducir la calle del edificio");
    }

    if (EDIFICIO_CALLE.validity.patternMismatch) {
      error(
        EDIFICIO_CALLE,
        "El nombre de la calle tiene que tener entre 4 y 80 caracteres"
      );
    }
    return false;
  }

  return true;
}

function validarNumero() {
  if (!EDIFICIO_NUMERO.checkValidity()) {
    if (EDIFICIO_NUMERO.validity.valueMissing) {
      error(EDIFICIO_NUMERO, "Tienes que introducir el número del edificio");
    }

    if (EDIFICIO_NUMERO.validity.rangeOverflow) {
      error(EDIFICIO_NUMERO, "El número del edificio debe de ser menor de 300");
    }

    if (EDIFICIO_NUMERO.validity.rangeUnderflow) {
      error(EDIFICIO_NUMERO, "El número del edificio debe de ser mayor de 1");
    }

    return false;
  }

  return true;
}

function validarCodigoPostal() {
  if (!EDIFICIO_CODIGO_POSTAL.checkValidity()) {
    if (EDIFICIO_CODIGO_POSTAL.validity.valueMissing) {
      error(
        EDIFICIO_CODIGO_POSTAL,
        "Tienes que introducir el código postal del edificio"
      );
    }

    if (EDIFICIO_CODIGO_POSTAL.validity.rangeOverflow) {
      error(
        EDIFICIO_CODIGO_POSTAL,
        "El código postal del edificio debe de ser menor de 52999"
      );
    }

    if (EDIFICIO_CODIGO_POSTAL.validity.rangeUnderflow) {
      error(
        EDIFICIO_CODIGO_POSTAL,
        "El código postal del edificio debe de ser mayor de 1000"
      );
    }

    return false;
  }

  return true;
}

function validarPlantas() {
  if (!EDIFICIO_PLANTAS.checkValidity()) {
    if (EDIFICIO_PLANTAS.validity.valueMissing) {
      error(EDIFICIO_PLANTAS, "Tienes que introducir las plantas del edificio");
    }

    if (EDIFICIO_PLANTAS.validity.rangeOverflow) {
      error(
        EDIFICIO_PLANTAS,
        "El número de plantas del edificio debe de ser menor de 50"
      );
    }

    if (EDIFICIO_PLANTAS.validity.rangeUnderflow) {
      error(EDIFICIO_PLANTAS, "El edificio al menos debe de tener una planta");
    }

    return false;
  }

  return true;
}

function validarPuertas() {
  if (!EDIFICIO_PUERTAS.checkValidity()) {
    if (EDIFICIO_PUERTAS.validity.valueMissing) {
      error(EDIFICIO_PUERTAS, "Tienes que introducir las puertas del edificio");
    }

    if (EDIFICIO_PUERTAS.validity.rangeOverflow) {
      error(
        EDIFICIO_PUERTAS,
        "El número de puertas del edificio debe de ser menor de 300"
      );
    }

    if (EDIFICIO_PUERTAS.validity.rangeUnderflow) {
      error(
        EDIFICIO_PUERTAS,
        "El edificio al menos debe de tener cuatro puertas"
      );
    }

    return false;
  }

  if (
    EDIFICIO_PUERTAS.value % EDIFICIO_PLANTAS.value == 0 &&
    (EDIFICIO_PUERTAS.value / EDIFICIO_PLANTAS.value == 4 ||
      EDIFICIO_PUERTAS.value / EDIFICIO_PLANTAS.value == 6)
  ) {
    return true;
  } else {
    error(
      EDIFICIO_PUERTAS,
      "El edificio debe de tener 4 o 6 puertas por planta"
    );
    return false;
  }
}

function error(elemento, mensaje) {
  ERROR_PRIMER_FORM.innerHTML = mensaje;
  ERROR_PRIMER_FORM.className = "errorMensaje";
  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  let formulario = document.forms[0];

  ERROR_PRIMER_FORM.innerHTML = " ";
  ERROR_PRIMER_FORM.className = "";

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}

function validar(e) {
  e.preventDefault();
  borrarError();

  if (
    validarCalle() &&
    validarNumero() &&
    validarCodigoPostal() &&
    validarPlantas() &&
    validarPuertas()
  ) {
    alert(
      `Se ha registrado el nuevo edificio con dirección: ${EDIFICIO_CALLE.value} nº${EDIFICIO_NUMERO.value}. CP:${EDIFICIO_CODIGO_POSTAL}`
    );
  }
}

PRIMER_FORM_ENVIAR.addEventListener("click", validar, false);
