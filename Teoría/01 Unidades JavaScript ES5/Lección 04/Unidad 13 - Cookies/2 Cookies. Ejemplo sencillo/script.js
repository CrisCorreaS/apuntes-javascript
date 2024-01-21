/*
En la lección anterior vimos una pequeña introducción sobre las cookies: qué son, cómo crearlas, modificarlas y borrarlas.

Esta vez vamos a ver un ejemplo sencillo en el que, mediante una serie de botones, crearemos y borraremos cookies y comprobaremos cómo las guarda nuestro navegador.

En la siguiente lección trabajaremos con un ejemplo más avanzado en el que controlaremos, además, la fecha de expiración de las cookies.
*/

document.getElementById("verTodas").addEventListener("click", verTodas, false);
document.getElementById("crearCookie1").addEventListener("click", crearCookie, false);
document.getElementById("crearCookie2").addEventListener("click", crearCookie, false);
document.getElementById("borrarCookie1").addEventListener("click", borrarCookie, false);
document.getElementById("borrarCookie2").addEventListener("click", borrarCookie, false);


function verTodas() {
    alert(document.cookie);
}

function crearCookie(e) {
    if (!e) {
        e = window.event; // Esto se hacía antes
    }

    if (e.target.id == "crearCookie1") {
        document.cookie = "nombre = Ada;";
        alert("Hemos creado la primera cookie");
    }

    if (e.target.id == "crearCookie2") {
        document.cookie = "apellido = Lovelace;";
        alert("Hemos creado la segunda cookie");
    }
}

function borrarCookie(e) {
    if (!e) {
        e = window.event;
    }

    if (e.target.id == "borrarCookie1") {
        document.cookie = "nombre = ; expires = Thu, 01 Jan 1970, 00:00:01 GMT;";
        alert("Hemos borrado la primera cookie");
    }

    if (e.target.id == "borrarCookie2") {
        document.cookie = "apellido = ; expires = Thu, 01 Jan 1970, 00:00:01 GMT;";
        alert("Hemos borrado la segunda cookie");
    }
    
}