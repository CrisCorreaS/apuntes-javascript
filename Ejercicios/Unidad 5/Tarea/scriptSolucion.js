const NOMBRE = document.getElementById("nombre");
const APELLIDOS = document.getElementById("apellidos");
const EDAD = document.getElementById("edad");
const NIF = document.getElementById("nif");
const EMAIL = document.getElementById("email");
const PROVINCIA = document.getElementById("provincia");
const FECHA = document.getElementById("fecha");
const TELEFONO = document.getElementById("telefono");
const HORA_VISITA = document.getElementById("hora");

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
    intentos = 1;
  } else {
    intentos++;
  }

  INTENTOS.innerHTML = "Intento de Envíos del formulario: " + intentos;

  // Apartado 12
  if (
    validarNombreCompleto() &&
    validarEdad() &&
    validarNif() &&
    validarEmail() &&
    validarProvincias() &&
    validarFecha() &&
    validarTelefono() &&
    validarHoraVisita() &&
    confirm("Pulsa 'Aceptar' si deseas enviar el formulario") // Apartado 12
  ) {
    return true;
  } else {
    return false;
  }
}

// Apartado 4
function validarNombreCompleto() {
  let regexNombre = /^(?=.{2,35}$)[A-Z][a-z]+(?: [A-Z][a-z]+)?$/;
  let regexApellidos = /^(?=.{1,35}$)[A-Z][a-z]+(\s?[A-Z][a-z]+)?$/;

  if (
    !regexNombre.test(NOMBRE.value) ||
    !regexApellidos.test(APELLIDOS.value)
  ) {
    if (!regexNombre.test(NOMBRE.value)) {
      if (NOMBRE.value.length > 35) {
        error(NOMBRE, "El nombre no puede tener más de 35 caracteres");
      } else {
        error(
          NOMBRE,
          "El nombre es incorrecto. Tiene que empezar por mayúscula e ir seguido de minúsculas"
        );
      }

      NOMBRE.style.textTransform = "none"; // Apartado 3
    } else if (
      !regexApellidos.test(APELLIDOS.value) &&
      regexNombre.test(NOMBRE.value)
    ) {
      if (APELLIDOS.value.length > 50) {
        error(APELLIDOS, "Los apellidos no pueden tener más de 50 caracteres");
      } else {
        error(
          APELLIDOS,
          "Los apellidos son incorrectos. Tienen que empezar por mayúsculas e ir seguidos de minúsculas"
        );
      }

      // Apartado 3
      APELLIDOS.style.textTransform = "none";
      NOMBRE.style.textTransform = "uppercase";
    }
    return false;
  }

  // Apartado 3
  if (regexNombre.test(NOMBRE.value)) {
    NOMBRE.style.textTransform = "uppercase";
  }

  if (regexApellidos.test(APELLIDOS.value)) {
    APELLIDOS.style.textTransform = "uppercase";
  }

  return true;
}

// Apartado 5
function validarEdad() {
  let regexEdad = /^([0-9]|[1-9][0-9]|10[0-5])$/;
  let edad = parseInt(EDAD.value);

  if (regexEdad.test(edad)) {
    return true;
  } else {
    if (edad < 0 || edad > 105) {
      error(EDAD, "La edad tiene que ser un número comprendido entre 0 y 105");
    } else {
      error(EDAD, "La edad tiene que ser un número");
    }
  }
}

// Apartado 6
function validarNif() {
  let regexNif = /^\d{8}-[a-zA-Z]$/; // "^" es el inicio de la línea, "\d{8}" son con exactamente 8 dígitos ya que "\d" indica que son números y el valor entre llaves ({}) es el número de dígitos, "-" representa al guión, "[a-zA-Z]" representa cualquier letra de la "a" a la "z" tanto en minúsculas o mayúsculas y "$" indica el final de la línea.

  if (regexNif.test(NIF.value)) {
    return true;
  } else {
    error(
      NIF,
      "El Nif es incorrecto, debes de introducir 8 números, un guión y una letra"
    );
    return false;
  }
}

// Apartado 7
function validarEmail() {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // "^" indica el inicio de la línea, luego tenemos "[\w-\.]+" en donde "\w" representa uno o más caracteres que pueden ser letras minúsculas o mayúsculas (a-z, A-Z) o números (0-9), también tenemos el guión (-) que representa a un guión y por último un punto (.) que representa a un punto, por lo que ese grupo representa a cualquier caracter que sea una letra, un número, un guión o un punto. "@" es el carácter @, "([\w-]+\.)" representa uno o más grupos de caracteres que pueden ser letras (a-z, A-Z), números (0-9) o guiones (-), seguidos de un punto (.) y "+" después del grupo de paréntesis indica que puede haber uno o más de estos grupos, "[\w-]{2,4}" coincide con entre 2 y 4 caracteres que pueden ser letras (a-z, A-Z), números (0-9) o guiones (-). Por último "$" indica el final de la línea.

  if (regexEmail.test(EMAIL.value)) {
    return true;
  } else {
    error(EMAIL, "El mail no es válido");
  }
}

// Apartado 8
function validarProvincias() {  
  switch (PROVINCIA.value) {
    case "C":
    case "LU":
    case "OU":
    case "PO":
      return true;
      break;
    case "0":
      error(PROVINCIA, "No has seleccionado la provincia");
      return false;
      break;
    default:
      error(PROVINCIA, "No has seleccionado la provincia bien");
      return false;
      break;
  }
}

// Apartado 9 
function validarFecha() {
  let regexFechaGuion = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  let regexFechaBarra = /^\d{1,2}-\d{1,2}-\d{4}$/;

  if (regexFechaGuion.test(FECHA.value) || regexFechaBarra.test(FECHA.value)) {
    let separador = regexFechaGuion.test(FECHA.value) ? "/" : "-"; // Usamos el operador elvis para decretar si la fecha es con "/" o con "-" (es una estructura if-else que evalúa un boolean, resumidamente)
    let fechas = FECHA.value.split(separador);

    if (parseInt(fechas[2]) !== new Date().getFullYear() - parseInt(EDAD.value)) {
      error(
        FECHA,
        "No puedes tener " + EDAD.value + " años naciendo en " + fechas[2]
      );
      return false;
    }

    if (
      parseInt(fechas[0]) < 1 ||
      parseInt(fechas[0]) > 31 ||
      parseInt(fechas[1]) < 1 ||
      parseInt(fechas[1]) > 12 ||
      parseInt(fechas[2]) < new Date().getFullYear() - 105 ||
      parseInt(fechas[2]) > new Date().getFullYear()
    ) {
      error(FECHA, "El formato de fecha está mal, has escrito el día, mes o año mal");
      return false;
    }
    return true;
  } else {
    error(
      FECHA,
      "La fecha solo puede estar en formato dd/mm/aaaa o en formato dd-mm-aaaa"
    );
    return false;
  }
}

// Apartado 10
function validarTelefono() {
  let regexTelefono = /[0-9]{9}/;

  if (regexTelefono.test(TELEFONO.value)) {
    return true;
  } else {
    error(TELEFONO, "El teléfono tiene que tener 9 números");
    return false;
  }
}

// Apartado 11
function validarHoraVisita() {
  let regexHora = /^([01][0-9]|2[0-3]):[0-5][0-9]$/; // "^" indica el inicio. "([01][0-9]|2[0-3])" indica que el primer número puede ser cualquiera que empiece por 0 o 1 ([01][0-9] -> 00-19) o (|) un número que empiece por 2 y sea seguido de cualquier número del 0 al 3 (2[0-3] -> 20-23). Los ":" indican literalmente los dos puntos (:). Y por último "[0-5][0-9]" indica cualquier número que empiece con un número comprendido entre 0 y 5 ([0-5][0-9] -> 00-59) y "$" indica el final
  let resultado = regexHora.test(HORA_VISITA.value) ? true : false;

  if (resultado) {
    return true;
  } else {
    error(HORA_VISITA, "La hora no está en un formato de hh:mm");
    return false;
  }
}

// Control de Errores
function error(elemento, mensaje) {
  elemento.className = "error";
  elemento.focus();

  ERRORES.className = "error";
  ERRORES.innerHTML = mensaje;
}

function borrarError() {
  let formulario = document.forms[0];
  let mensajes = [ERRORES, INTENTOS];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < mensajes.length; j++) {
    mensajes[j].className = "";
    mensajes[j].innerHTML = "";
  }
}
