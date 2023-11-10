window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre() {
    var elemento = document.getElementById("nombre");

    if (!elemento.checkValidity()) { // Así comprueba que la validación del html es correcta
        if (elemento.validity.valueMissing) { // Si el elemento está sin cubrir -> comprueba el "required"
            error2(elemento, "Debe introducir un nombre");
        }
        
        if (elemento.validity.patternMismatch) { // Si el valor introducido no coincide con el patrón regex que pusimos -> comprueba "pattern"
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }

        // error(elemento); -> sustituimos error(elemento) por los dos bloques de if() anteriores
        return false;
    }

    return true;
}

function validarEdad() {
  var elemento = document.getElementById("edad");

  if (!elemento.checkValidity()) {
    
    if (elemento.validity.valueMissing) {// Si el elemento está sin cubrir -> comprueba el "required"
      error2(elemento, "Debe introducir una edad");
    }

    if (elemento.validity.rangeOverflow) {// Si superamos el rango numérico -> comprueba "max" -> se usa en type="number"
      error2(elemento, "El valor debe de ser menor de 100");
    }
    
    if (elemento.validity.rangeUnderflow) {// Si usamos un número menor del rango numérico -> comprueba "min" -> se usa en type="number"
      error2(elemento, "El valor debe de ser mayor de 18");
    }
    
    // error(elemento);
    return false;
  }

  return true;
}

function validarTelefono() {
  var elemento = document.getElementById("telefono");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) { // Si el elemento está sin cubrir -> comprueba el "required"
      error2(elemento, "Debe introducir un teléfono");
    }

    if (elemento.validity.patternMismatch) { // Si el valor introducido no coincide con el patrón regex que pusimos -> comprueba "pattern"
      error2(elemento, "El teléfono debe tener 9 cifras");
    }
    
    // error(elemento);
    return false;
  }

  return true;
}


function validar(e) {
    borrarError();

    if (validarNombre() && validarEdad() && validarTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true
    } else {
        e.preventDefault();
        return false;
    }
}


function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage; // El validationMessage ya es un mensaje hecho por defecto que hace referencia al tipo de elemento y a sus condiciones de validación
    elemento.className = "error";
    elemento.focus();
}

function borrarError(elemento) {
    var formulario = document.forms[0];

    // recorremos los elementos y borra la "class = "error""
    for (var i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].className = "";
    }
}


function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}