document.getElementById("enviar").addEventListener("click", validar, false);

function validarFecha() {
  let elemento = document.getElementById("name");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir una fecha");
    }

    if (elemento.validity.patternMismatch) {
      error(elemento, "La fecha tiene que tener un formato dd/mm/aaaa");
    }
    return false;
  }

  return true;
}

function validarNombreEmpleado() {
  let elemento = document.getElementById("name");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir el nombre del empleado");
    }

    if (elemento.validity.patternMismatch) {
      error(
        elemento,
        "El nombre del empleado debe estar formado por dos letras en mayúscula, un símbolo y cuatro dígitos"
      );
    }
    return false;
  }

  return true;
}

function validarNombreDestinatario() {
  let elemento = document.getElementById("for");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir el nombre del destinatario");
    }

    if (elemento.validity.patternMismatch) {
      error(
        elemento,
        "El nombre del destinatario debe estar formado por dos o tres letras mayúsculas correspondientes al estado, un guión bajo, el nombre de la ciudad  con la primera letra Mayúscula y el resto en minúsculas, dos puntos, y el código de distrito de 4 dígitos"
      );
    }
    return false;
  }

  return true;
}

function validarPesoGramos() {
  let elemento = document.getElementById("weight");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Debe introducir el peso en gramos");
    }

    if (elemento.validity.rangeOverflow) {
      error(elemento, "El valor debe de ser menor de 5000");
    }

    if (elemento.validity.rangeUnderflow) {
      error(elemento, "El valor debe de ser mayor de 100");
    }

    return false;
  }

  return true;
}

function validarNumeroCuenta() {
  let elemento = document.getElementById("accountNumber");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir el número de cuenta");
    }

    if (elemento.validity.patternMismatch) {
      error(
        elemento,
        "El número de cuenta está formado por el IBAN + 20 dígitos"
      );
    }
    return false;
  }

  return true;
}

function validar(e) {
  borrarError();

  if (
    validarFecha &&
    validarNombreEmpleado() &&
    validarNombreDestinatario() &&
    validarPesoGramos() &&
    validarNumeroCuenta &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function borrarError() {
  var formulario = document.forms[0];

  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}

function error(elemento, mensaje) {
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}
