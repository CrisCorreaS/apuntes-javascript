document.getElementById("enviar").addEventListener("click", validar, false);

const OPCIONES = document.getElementsByName("option");
const NUMERO_DOCUMENTO = document.getElementById("number");
const DIA = document.getElementById("day");
const MES = document.getElementById("month");
const ANO = document.getElementById("year");
const RECORDAR = document.getElementById("recordar");

const MENSAJE_DOCUMENTO = document.getElementById("mensajeDocumento");
const MENSAJE_FECHA = document.getElementById("mensajeFecha");

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
    (MES.value == 4 || MES.value == 6 || MES.value == 9 || MES.value == 11) && DIA.value > 30) {
    error(
      DIA,
      "Los meses de abril, junio, septiembre y noviembre no pueden tener más de 30 días"
    );
    return false;
  }

  let fecha = new Date(ANO.value + "/" + (MES.value - 1) + "/" + DIA.value);

  // devuelve true si el argumento no es un número. Como Date en JavaScript se convierte internamente a un número (el número de milisegundos desde el 1 de enero de 1970), si la fecha es inválida, se convertirá a NaN y isNaN() devolverá true
  if (isNaN(fecha.getTime())) {
    error(DIA, "La fecha es inválida");
    return false;
  }

  return true;
}

function error(elemento, mensaje) {}

function borrarError() {}

function validar(e) {
  borrarError();
  e.preventDefault();

  // Así validamos todo al mismo tiempo en vez de ir uno a uno
  let documento = validarDocumentos();
  let fechaValida = validarFecha();

  if (documento && fechaValida) {
    return true;
  } else {
    return false;
  }
}
