/*
Cerramos el bloque de cookies con esta lección en la que vemos cómo trabajar con cookies de un modo avanzado, diseñando nuestras propias funciones para crearlas, modificarlas, obtener su valor y borrarlas, en todas ellas controlando la fecha de expiración.
*/

document.getElementById("verTodas").addEventListener("click", verCookies, false);
document.getElementById("crearCookie").addEventListener("click", crearModificarCookie, false);
document.getElementById("modificarCookie").addEventListener("click", crearModificarCookie, false);
document.getElementById("leerCookie").addEventListener("click", leerCookie, false);
document.getElementById("borrarCookie").addEventListener("click", borrarCookie, false);


// Funciones generales:
function setCookie(nombre, valor, expiracionDias) { // expiración es el número de días
    var d = new Date(); // Si Date() está vacío, significa que la fecha es justo cuando creamos la variable hoy
    
    d.setTime(d.getTime() + expiracionDias * 24 * 60 * 60 * 1000); // le añadimos a la fecha en la que nos encontramos ahora, los milisegundos de los días que nos han marcado en la variable "expiracion"
    
    var expiracion = "expires = " + d.toUTCString(); // la fecha la necesitamos en formato UTC

    document.cookie = nombre + " = " + valor + "; " + expiracion + "; path = /";
}


function getCookie(nombre) {
    var nom = nombre + "="; // No ponemos paréntesis, porque la cookie es interpretada: nombre=valor, aunque nosotras la creemos como nombre = valor.
    var array = document.cookie.split(/;/g); // Así tenemos un array con todas las cookies que existen

    for (var i = 0; i < array.length; i++){
        var c = array[i]; // c va a tener el valor de cada cookie y almacenarlo, cada vez que se haga el bucle, vamos a sobreescribir el valor de c

        // Eliminamos los espacios en blanco de las cookies
        while (c.charAt(0) == " ") { // nos recorremos la cadena hasta que el primer caracter de la cookie no sea un espacio en blanco
            c = c.substring(1); // vamos sobreescribiendo la cadena sin el primer caracter
        }

        if (c.indexOf(nombre) == 0) {
          // vamos a mirar si el nombre de la cookie se corresponde con el que hemos puesto -> Si el nombre de la cookie está al principio de la cadena, indexOf() devolverá 0.
          return c.substring(nom.length, c.length); // usamos cadena.substring(indiceInicio, indiceFin), en este caso: nos va a devolver la cookie desde el final del "nom" (nombre + "=") hasta el final de la cookie, es decir, el valor de esta -> si "nom" fuera (nombre + " = "), no estaría bien porque se contarían más espacios de los correctos. Si creamos una cookie cristina=correa; si usamos "nom" (nombre + "=") devuelve "correa", si usamos "nom" (nombre + " = ") devuelve "rrea"
        }
    }
    return "";
}


function deleteCookie(nombre) {
    setCookie(nombre, "", 0);
    
}


// Funciones específicas que podemos usar
function verCookies() {
    alert("Cookies actuales: \n " + document.cookie);
}

function crearModificarCookie() {
    var nombre = prompt("Introduzca el nombre de la cookie");
    var valor = prompt("Introduzca el valor de la cookie");
    var expiracion = parseInt(prompt("Introduzca el número de días para que expire la cookie"));

    setCookie(nombre, valor, expiracion);
    verCookies();
}

function leerCookie() {
    var nombre = prompt("Introduzca el nombre de la cookie a consultar");
    var resultado = getCookie(nombre);
    
    alert(resultado);
}

function borrarCookie() {
    var nombre = prompt("Introduzca el nombre de la cookie a borrar");
    
    deleteCookie(nombre);
}