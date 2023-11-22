document.getElementById("enviar").addEventListener("click", validar, false);

function validarNombre(){
    let elemento = document.getElementById("name");

    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        error(elemento, "Debe introducir un nombre y un apellido");
      }

      if (elemento.validity.patternMismatch) {
        error(elemento, "El nombre debe tener entre 1 y 40 caracteres");
      }

      return false;
    }

    return true;
}

function validarContacto(){

}

function validarContrasinal(){
    let elemento = document.getElementById("password");

    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        error(elemento, "Debe introducir una contraseña");
      }

      if (elemento.validity.patternMismatch) {
        error(elemento, "La contraseña debe tener al menos 6 caracteres");
      }

      return false;
    }

    return true;
}

function validarContrasinales(){
    let contrasinal = document.getElementById("password");
    let contrasinal2 = document.getElementById("password2");

    if(contrasinal.value === contrasinal2.value){
        return true;
    } else{
        error(contrasinal2, "Las dos contraseñas no coinciden");
        return false;
    }
}

function validar(e){
    borrarError();
    if(validarNombre() && validarContacto() && validarContrasinal() && validarContrasinales()){
        return true;
    } else{
        e.preventDefault();
        return false;
    }
}

function error(elemento, mensaje){
    let idElemento = elemento.id;

    elemento.className = "error";
    elemento.focus();

    switch(idElemento){
        case "name":
            document.getElementById("mensajeNombre").innerHTML = mensaje;
            break;
        case "contact":
            document.getElementById("mensajeMovilCorreo").innerHTML = mensaje;
            break;
        case "password":
            document.getElementById("mensajeContrasena").innerHTML = mensaje;
            break;
        case "password2":
            document.getElementById("mensajeContrasena2").innerHTML = mensaje;
            break;
    }
}

function borrarError(){
    let formulario = document.forms[0];

    for (let i = 0; i < formulario.elements.length; i++) {
      formulario.elements[i].className = "";
    }
}