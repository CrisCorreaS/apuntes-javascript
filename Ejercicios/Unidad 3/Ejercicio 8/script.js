//Cristina Correa

function devolverDatos(){
    let respuesta = document.getElementById("numero").value;
    let partesCadena = respuesta.split(/:/g);

    let codigoPostal = partesCadena[4];
    let apellidos = partesCadena[1];
    let email = partesCadena[3];
    let partesEmail = email.split(/@/);
    let servidor = partesEmail[1];
    let telefono = partesCadena[2];

    alert("Código Postal: " + codigoPostal+ "\nApellidos: " + apellidos + "\nEmail: " + email + "\nServidor: " + servidor + "\nTelefono: " + telefono);
}