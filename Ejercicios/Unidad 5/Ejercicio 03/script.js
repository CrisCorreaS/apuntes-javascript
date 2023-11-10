window.onload = iniciar;

function iniciar() {
  const ELEMENTO_DNI = document.getElementById("dni");
  ELEMENTO_DNI.addEventListener("input", validarDNI, false);
}

function validarDNI(e) {
  const ELEMENTO_DNI = document.getElementById("dni");
  borrarError();

  if (!ELEMENTO_DNI.checkValidity()) {
    if (ELEMENTO_DNI.validity.valueMissing) {
      error(ELEMENTO_DNI, "Debe introducir los números del dni");
    }

    if (ELEMENTO_DNI.validity.rangeOverflow) {
      error(ELEMENTO_DNI, "El número no puede tener más de 8 cifras");
    }

    if (ELEMENTO_DNI.validity.rangeUnderflow) {
      error(ELEMENTO_DNI, "El número no puede tener más de 8 cifras");
    }

    e.preventDefault();
    return false;
  } else {
    document.getElementById("letra").value = calcularLetraDNI(
      ELEMENTO_DNI.value
    );
    return true;
  }
}

function error(elemento, mensaje) {
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  var formulario = document.forms[0];

  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}

function calcularLetraDNI(dni) {
  let dniNumerico = Number(dni);
  let resto = dniNumerico % 23;
  let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
  let letraDNI = letrasDNI.charAt(resto);
  return letraDNI;
}
