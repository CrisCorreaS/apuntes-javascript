const NOMBRE = document.getElementById("nombre");
const APELLIDOS = document.getElementById("apellidos");
const EDAD = document.getElementById("edad");
const NIF = document.getElementById("nif");
const EMAIL = document.getElementById("email");
const PROVINCIA = document.getElementById("provincia");
const FECHA = document.getElementById("fecha");
const TELEFONO = document.getElementById("telefono");
const HORA_VISITA = document.getElementById("hora");

const LIMPIAR = document.getElementById("button");
const ENVIAR = document.getElementById("enviar");

const ERRORES = document.getElementById("errores");
const INTENTOS = document.getElementById("intentos");

ENVIAR.addEventListener("click", validar, false);

// Apartado 1 -> No se ha cambiado el html excepto la etiqueta con "htm" por "html"

// Apartado 2
let intentos = getCookie("intentos");

document.cookie = "intentos=" + intentos + ";";

function getCookie(galleta) {
  let nom = galleta + "=";
  let array = document.cookie.split(/;/g);

  for (var i = 0; i < array.length; i++) {
    var c = array[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(galleta) == 0) {
      return c.substring(nom.length, c.length);
    }
  }
  return "";
}

// Validaciones:
function validar(e) {
  borrarError();
  e.preventDefault();

  // Apartado 2
  if (!intentos) {
    intentos = 0;
  } else {
    intentos++;
  }

  INTENTOS.innerHTML = "Intento de Envíos del formulario: " + intentos;

  let validacionNombreCompleto = validarNombreCompleto();
  let validacionEdad = validarEdad();
  let validacionNif = validarNif();
  let validacionEmail = validarEmail();
  let validacionProvincias = validarProvincias();
  let validacionFecha = validarFecha();
  let validacionTelefono = validarTelefono();
  let validacionHoraVisita = validarHoraVisita();

  // Apartado 12
  if (
    validacionNombreCompleto &&
    validacionEdad &&
    validacionNif &&
    validacionEmail &&
    validacionProvincias &&
    validacionFecha &&
    validacionTelefono &&
    validacionHoraVisita &&
    confirm("Pulsa 'Aceptar' si deseas enviar el formulario") // Apartado 12
  ) {
    return true;
  } else {
    return false;
  }
}

// Apartado 4
function validarNombreCompleto() {}

// Apartado 5
function validarEdad() {}

// Apartado 6
function validarNif() {}

// Apartado 7
function validarEmail() {}

// Apartado 8
function validarProvincias() {}

// Apartado 9
function validarFecha() {}

// Apartado 10
function validarTelefono() {}

// Apartado 11
function validarHoraVisita() {}
