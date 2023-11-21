document.getElementById("enviar").addEventListener("click", validar, false);

function validarFecha() {
  let elemento = document.getElementById("date");
  let temp = elemento.value.split("/");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error(elemento, "Tienes que introducir una fecha");
    }

    if (elemento.validity.patternMismatch) {
      error(elemento, "La fecha tiene que tener un formato dd/mm/aaaa");
    }
    return false;
  }

  let ahora = new Date();
  let añoActual = ahora.getFullYear();
  let mesActual = ahora.getMonth() + 1;
  let diaActual = ahora.getDate();

  if (temp[2] > añoActual) {
    error(elemento, "La fecha no puede ser futura");
    return false;
  } else if (temp[2] == añoActual && temp[1] > mesActual) {
    error(elemento, "La fecha no puede ser futura");
    return false;
  } else if (
    temp[2] == añoActual &&
    temp[1] == mesActual &&
    temp[0] > diaActual
  ) {
    error(elemento, "La fecha no puede ser futura");
    return false;
  }

  if (temp[0] < 1 || temp[1] < 1 || temp[2] < 1) {
    error(elemento, "El día, mes o año no pueden ser menores a 1");
    return false;
  }

  let fecha = new Date(temp[2], temp[1] - 1, temp[0]); // temp[2] son los años, temp[1] los meses (a los que le restamos 1 porque el valor que ponemos en el form va de 1 a 12, pero el de js va de 0 a 11) y temp[0] son los días
  let mes = fecha.getMonth() + 1; // Sumamos uno porque nos va a devolver los meses del 0 al 11, no del 1 al 12
  let dia = fecha.getDate();

  if (temp[1] > 12) {
    error(elemento, "El mes no puede ser mayor a 12");
    return false;
  } else if (temp[1] == 2 && temp[0] > 29) {
    error(elemento, "Febrero no puede tener más de 29 días");
    return false;
  } else if (
    (temp[1] == 4 || temp[1] == 6 || temp[1] == 9 || temp[1] == 11) &&
    temp[0] > 30
  ) {
    error(
      elemento,
      "Los meses de abril, junio, septiembre y noviembre no pueden tener más de 30 días"
    );
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
    validarFecha() &&
    validarNombreEmpleado() &&
    validarNombreDestinatario() &&
    validarPesoGramos() &&
    validarNumeroCuenta() &&
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
  document.getElementById("mensajeError").className = "errorMensaje";
  elemento.className = "error";
  elemento.focus();
}
