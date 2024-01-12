import Edificio from "./edificio.js";

const EDIFICIO_CALLE = document.querySelector("#calle");
const EDIFICIO_NUMERO = document.querySelector("#numero");
const EDIFICIO_CODIGO_POSTAL = document.querySelector("#cp");
const EDIFICIO_PLANTAS = document.querySelector("#plantas");
const EDIFICIO_PUERTAS = document.querySelector("#puertas");
const PRIMER_FORM_ENVIAR = document.querySelector("#enviar");
const ERROR_PRIMER_FORM = document.querySelector("#msgPrimerForm");

const LISTA_EDIFICIOS = document.querySelector("#listaEdificios");

let edificios = [];
let i = 0;

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
    edificios.push(
      new Edificio(
        EDIFICIO_CALLE.value,
        EDIFICIO_NUMERO.value,
        EDIFICIO_CODIGO_POSTAL.value,
        EDIFICIO_PLANTAS.value,
        EDIFICIO_PUERTAS.value
      )
    );

    alert(
      `Se ha registrado el nuevo edificio con dirección: ${EDIFICIO_CALLE.value} nº${EDIFICIO_NUMERO.value}. CP:${EDIFICIO_CODIGO_POSTAL.value}`
    );

    showEdificios();
  }
}

function showEdificios() {
  let br = document.createElement("br");
  let inputRadioButton = document.createElement("input");
  let textoLi = document.createTextNode(edificios[i].calle);
  /*
    In JavaScript, properties and methods are accessed differently. When you have getters and setters defined in a class, like in your Edificio class, they act as properties that are accessed using the dot notation without parentheses.
      - The edificio.calle and edificio._calle work as property access because the getter get calle() allows you to access _calle as if it were a public property. The underscore convention (_calle) is used to denote that it is a private property, but JavaScript does not enforce this privacy; it's just by convention.
      - The edificio.calle() syntax does not work because calle is not a method; it's an accessor property. In JavaScript, accessor properties are defined with get and set keywords and are accessed without parentheses.

    -> The get syntax binds an object property to a function that will be called when that property is looked up. So when you access edificio.calle, internally it calls the getter function you defined and returns the value of _calle. This is a way to expose private variables with controlled access, potentially allowing for validation or other logic to run when getting or setting the value.
      - edificio.calle: Correct, accesses the getter method for the _calle property.
      - edificio._calle: Technically works because JavaScript does not enforce private properties, but it goes against the encapsulation principle.
      - edificio.calle(): Incorrect, because calle is not a method, it's an accessor property and should not be called with parentheses.
    */

  inputRadioButton.type = "radio";
  inputRadioButton.name = "opcionEdificio"; // Tienen que tener el mismo "name", pero deben tener diferente "id" y "value"
  inputRadioButton.id = i;
  inputRadioButton.value = i;

  LISTA_EDIFICIOS.appendChild(inputRadioButton);
  LISTA_EDIFICIOS.appendChild(textoLi);
  LISTA_EDIFICIOS.appendChild(br);
  i++;
}

PRIMER_FORM_ENVIAR.addEventListener("click", validar, false);
