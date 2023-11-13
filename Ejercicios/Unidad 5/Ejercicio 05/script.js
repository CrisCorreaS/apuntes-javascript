window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
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

    if (elementoNombre.validity.patternMismatch || elementoGrupo.validity.patternMismatch) {
      error(elementoNombre, "El nombre debe tener 20 o menos caracteres");
    } else {
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
      error(elemento, "El año de publicación debe de ser menor al actual: 2023");
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
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  let formulario = document.forms[0];

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
