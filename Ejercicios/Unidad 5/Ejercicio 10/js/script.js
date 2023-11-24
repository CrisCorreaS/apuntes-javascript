import Cliente from "./cliente.js";

document.getElementById("enviar").addEventListener("click", validar, false);

const OPCIONES = document.getElementsByName("option");
const NUMERO_DOCUMENTO = document.getElementById("number");
const DIA = document.getElementById("day");
const MES = document.getElementById("month");
const ANO = document.getElementById("year");
const RECORDAR = document.getElementById("recordar");

const MENSAJE_DOCUMENTO = document.getElementById("mensajeDocumento");
const MENSAJE_FECHA = document.getElementById("mensajeFecha");

let clientes = [];

// Validaciones
function validarDocumentos() {
  let check = false;
  let validez = false;
  let respuesta = false;

  for (let i = 0; i < OPCIONES.length; i++) {
    if (OPCIONES[i].checked) {
      if (OPCIONES[i].value === "dni") {
        if (validarDNI(NUMERO_DOCUMENTO)) {
          validez = true;
        }
      } else if (OPCIONES[i].value === "pasaporte") {
        if (validarPasaporte(NUMERO_DOCUMENTO)) {
          validez = true;
        }
      }
      check = true;
    }
  }

  if (!check) {
    error(NUMERO_DOCUMENTO, "Tienes que marcar el tipo de documento");
  }

  if (check && validez) {
    respuesta = true;
  }

  return respuesta;
}

function validarPasaporte(elemento) {
  const REGEX = /^[A-Z]{3}[0-9]{6}$/;

  if (REGEX.test(elemento.value)) {
    return true;
  } else {
    error(
      elemento,
      "El pasaporte está mal. Tiene que tener 3 letras en mayúscula y 6 números"
    );
    return false;
  }
}

function validarDNI(elemento) {
  const REGEX = /^[0-9]{8}[a-zA-Z]{1}$/;

  if (REGEX.test(elemento.value)) {
    return true;
  } else {
    error(
      elemento,
      "El dni está mal. Tiene que tener ocho números y una letra"
    );
    return false;
  }
}

function validarFecha() {
  let ahora = new Date();
  let anoActual = ahora.getFullYear();
  let mesActual = ahora.getMonth() + 1;
  let diaActual = ahora.getDate();

  if (!DIA.checkValidity() && !MES.checkValidity() && !ANO.checkValidity()) {
    if (DIA.validity.valueMissing) {
      error(DIA, "Tienes que introducir un día");
    } else if (MES.validity.valueMissing) {
      error(MES, "Tienes que introducir un mes");
    } else {
      error(ANO, "Tienes que introducir un año");
    }

    return false;
  }

  if (ANO.value > anoActual - 18) {
    error(ANO, "No puedes ser menor de edad");
    return false;
  } else if (ANO.value == anoActual - 18 && MES.value > mesActual) {
    error(MES, "No puedes ser menor de edad");
    return false;
  } else if (
    ANO.value == anoActual - 18 &&
    MES.value == mesActual &&
    DIA.value > diaActual
  ) {
    error(DIA, "No puedes ser menor de edad");
    return false;
  }

  if (DIA.value < 1 || MES.value < 1 || ANO.value < 1) {
    error(DIA, "El día, mes o año no pueden ser menores a 1");
    return false;
  }

  if (MES.value > 12) {
    error(MES, "El mes no puede ser mayor a 12");
    return false;
  } else if (MES.value == 2 && DIA.value > 29) {
    error(DIA, "Febrero no puede tener más de 29 días");
    return false;
  } else if (
    (MES.value == 4 || MES.value == 6 || MES.value == 9 || MES.value == 11) &&
    DIA.value > 30
  ) {
    error(
      DIA,
      "Los meses de abril, junio, septiembre y noviembre no pueden tener más de 30 días"
    );
    return false;
  }

  let fecha = new Date(ANO.value + "/" + MES.value + "/" + DIA.value);

  // devuelve true si el argumento no es un número. Como Date en JavaScript se convierte internamente a un número (el número de milisegundos desde el 1 de enero de 1970), si la fecha es inválida, se convertirá a NaN y isNaN() devolverá true
  if (isNaN(fecha.getTime())) {
    error(DIA, "La fecha es inválida");
    return false;
  }

  return true;
}

function error(elemento, mensaje) {
  let idElemento = elemento.id;

  elemento.className = "error";
  elemento.focus();

  switch (idElemento) {
    case "number":
    case "option":
      MENSAJE_DOCUMENTO.innerHTML = mensaje;
      MENSAJE_DOCUMENTO.className = "mensajeError";
      break;
    case "day":
    case "month":
    case "year":
      MENSAJE_FECHA.innerHTML = mensaje;
      MENSAJE_FECHA.className = "mensajeError";
      break;
  }
}

function borrarError() {
  let formulario = document.forms[0];
  let mensajes = [MENSAJE_DOCUMENTO, MENSAJE_FECHA];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < mensajes.length; j++) {
    mensajes[j].className = "normal";
    mensajes[j].innerHTML = "";
  }
}

function validar(e) {
  borrarError();
  e.preventDefault();

  // Así validamos todo al mismo tiempo en vez de ir uno a uno
  let documento = validarDocumentos();
  let fechaValida = validarFecha();

  if (documento && fechaValida) {
    // Para crear el LocalStorage
    if (RECORDAR.checked) {
      // Para almacenar los datos en LocalStorage
      localStorage.setItem("dni", NUMERO_DOCUMENTO.value);
      localStorage.setItem("fechaNacimiento", DIA.value + "/" + MES.value + "/" + ANO.value);
    }
    window.location.href = "./clave.html"; // Así redirigimos a una nueva página web
    return true;
  } else {
    return false;
  }
}

// Para recuperar los datos con el LocalStorage
window.addEventListener("DOMContentLoaded", (e) => {
  // Guardamos los valores de dni y fechaNacimiento en las variables
  let dni = localStorage.getItem("dni");
  let fechaNacimiento = localStorage.getItem("fechaNacimiento");

  if (dni && fechaNacimiento) { // Si uno de los valores del LocalStorage está vacío devolverá "null", lo cual lo interpretará como un false
    NUMERO_DOCUMENTO.value = dni;

    let opcionDNI = document.querySelector('input[name="option"][value="dni"]'); // Seleccionamos el botón de "dni" para poder checkearlo
    opcionDNI.checked = true;

    let fechaPartes = fechaNacimiento.split("/");
    DIA.value = fechaPartes[0];
    MES.value = fechaPartes[1];
    ANO.value = fechaPartes[2];
  }
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Clientes
let numero = -1;
let numerosBotones = [];

let cliente = Cliente(
  NUMERO_DOCUMENTO.value,
  DIA.value + "/" + MES.value + "/" + ANO.value
);

clientes.push(cliente);


function shuffleBotones() {
  while (numerosBotones.length < 9) {
    let numero = Math.floor(Math.random() * 10);

    if (!numerosBotones.includes(numero)) {
      numerosBotones.push(numero);
    }
  }

  for (let i = 0; i < 10; i++){
    document.getElementById(i).innerHTML = numerosBotones[i];
    document.getElementById(i).value = numerosBotones[i];
  }
}

shuffleBotones()