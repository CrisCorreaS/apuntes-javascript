document.getElementById("enviar").addEventListener("click", validar, false);

const NOMBRE_MENSAJE = document.getElementById("mensajeNombre");
const CONTACTO_MENSAJE = document.getElementById("mensajeMovilCorreo");
const CONTRASENA_MENSAJE = document.getElementById("mensajeContrasena");
const CONTRASENA2_MENSAJE = document.getElementById("mensajeContrasena2");

// Miramos si existe el localStorage y si lo hace, los datos ya se guardan
let nombreAlmacenado = localStorage.getItem("nombreUsuario");
if (nombreAlmacenado) {
  document.getElementById("name").value = nombreAlmacenado;
}

// Validación de campos
function validarNombre() {
  let elemento = document.getElementById("name");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "<b>!</b> Introduce tu nombre");
    }

    if (elemento.validity.patternMismatch) {
      error(elemento, "<b>!</b> El nombre debe tener entre 1 y 40 caracteres");
    }

    return false;
  }

  return true;
}

function validarContacto() {
  let regexTelefono = /^\d{9}$/;
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

  let contacto = document.getElementById("contact");

  // Así miramos que se cumplan las regex
  if (regexMail.test(contacto.value) || regexTelefono.test(contacto.value)) {
    return true;
  } else {
    error(contacto, "<b>!</b> La dirección de correo electrónico o el número de teléfono móvil faltan o son inválidos. Corríjalo e inténtelo de nuevo.");
    return false;
  }
}

function validarContrasinal() {
  let elemento = document.getElementById("password");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "<b>!</b> Introduce tu contraseña");
    }

    if (elemento.validity.patternMismatch) {
      error(elemento, "<b>!</b> La contraseña debe tener al menos 6 caracteres");
    }

    return false;
  }

  return true;
}

function validarContrasinales() {
  let contrasinal = document.getElementById("password");
  let contrasinal2 = document.getElementById("password2");

  if (contrasinal.value === contrasinal2.value) {
    return true;
  } else {
    error(contrasinal2, "<b>!</b> Las dos contraseñas no coinciden");
    return false;
  }
}

function validar(e) {
  borrarError();
  e.preventDefault();

  // Así validamos todo al mismo tiempo en vez de ir uno a uno
  let nombreValido = validarNombre();
  let contactoValido = validarContacto();
  let contrasenaValida = validarContrasinal();
  let contraseniasValidas = validarContrasinales();

  if (
    nombreValido &&
    contactoValido &&
    contrasenaValida &&
    contraseniasValidas
  ) {
    localStorage.setItem("nombreUsuario", document.getElementById("name").value); // Así creamos el localStorage que almacena el nombre
    alert("El formulario se ha enviado");
    return true;
  } else {
    return false;
  }
}

function error(elemento, mensaje) {
  let idElemento = elemento.id;

  elemento.className = "error";
  elemento.focus();

  switch (idElemento) {
    case "name":
      NOMBRE_MENSAJE.innerHTML = mensaje;
      NOMBRE_MENSAJE.className = "mensajeError";
      break;
    case "contact":
      CONTACTO_MENSAJE.innerHTML = mensaje;
      CONTACTO_MENSAJE.className = "mensajeError";
      break;
    case "password":
      CONTRASENA_MENSAJE.innerHTML = mensaje;
      CONTRASENA_MENSAJE.className = "mensajeError";
      break;
    case "password2":
      CONTRASENA2_MENSAJE.innerHTML = mensaje;
      CONTRASENA2_MENSAJE.className = "mensajeError";
      break;
  }
}

function borrarError() {
  let formulario = document.forms[0];
  let mensajes = [NOMBRE_MENSAJE, CONTACTO_MENSAJE, CONTRASENA_MENSAJE, CONTRASENA2_MENSAJE];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
  
  for (let j = 0; j < mensajes.length; j++){
    mensajes[j].className = "normal";
    mensajes[j].innerHTML = "";
  }

}
