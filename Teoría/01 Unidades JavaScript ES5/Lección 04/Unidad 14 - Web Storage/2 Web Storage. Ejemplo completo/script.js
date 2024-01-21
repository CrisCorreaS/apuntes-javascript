/*
Cerramos la última parte de este curso con un ejemplo completo en el que trabajaremos con la API de Almacenamiento Web, es decir, con Web Storage.

En la lección anterior ya vimos cómo comprobar si el navegador soportaba Storage y cuáles eran los métodos que nos permitían trabajar con este tipo de elementos de almacenamiento web.

En este vídeo, por el contrario, pondremos en práctica lo aprendido con un programa en el que controlaremos que un usuario ha accedido a nuestra página y llevaremos un control de las veces que realiza esta acción. Para ello, crearemos una serie de funciones que interactuarán con las variables de almacenamiento web:
  - En primer lugar, comprobaremos si el navegador soporta Storage y mostraremos un mensaje con el nombre del usuario si este se ha logueado en la página, diferenciando si es su primera visita o ya ha entrado en más ocasiones.
  - Utilizaremos una función para llevar el control de las veces que el usuario ha accedido a la página.
  - Crearemos dos funciones para incrementar y decrementar el valor del contador anterior.
  - Finalmente crearemos otra función para hacer logout y restablecer los valores anteriores.
*/

/*
Nos adentramos en un concepto nuevo hasta ahora en este conjunto de cursos de programación con Javascript: el concepto de API; y es que Web Storage es una API de almacenamiento web que proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave-valor de una forma mucho más intuitiva que utilizando cookies.

Cuando hablamos de Web Storage disponemos, a su vez, de dos mecanismos de almacenamiento web:

  - sessionStorage: que permite almacenar información mientras el navegador está abierto; es decir, mientras dura la sesión de la página. Todas las páginas que tienen el mismo origen (dominio y protocolo) pueden acceder a estos datos indistintamente.
  - localStorage: similar a sessionStorage pero los datos se mantienen aún a pesar de que cerremos el navegador.

En primer lugar, lo más recomendable es comprobar si el navegador que vamos a utilizar soporta Web Storage.

Ya hemos utilizado los diferentes métodos que nos permiten trabajar con este tipo de almacenamiento:
  - setItem() -> permite crear un elemento de almacenamiento web.
  - getItem() -> permite consultar un elemento.
  - removeItem() y clear() -> permite eliminar información de un elemento o el elemento completo.
*/


// Comprobar si el navegador soporta webstorage
if (typeof (Storage) !== "undefined") {
    alert("El navegador soporta WebStorage");

    // Nos vamos a asegurar de que el usuario esté logueado en la página -> pedimos el nombre con localStorage
    saludar();

    // Contador puede incrementar o decrementar de uno en uno. El valor inicia de 0 cada vez que nos logueamos, por lo que usaremos sessionStorage
    // Contador:
    contador();

    // Botones incrementar y decrementar
    document.getElementById("incrementar").addEventListener("click", incrementar, false);
    document.getElementById("decrementar").addEventListener("click", decrementar, false);


    // Botón de logout
    document.getElementById("logout").addEventListener("click", logout, false);

} else {
    alert("El navegador NO soporta WebStorage");
}


// Saludar
function saludar() {
    if (localStorage.getItem("usuario") != null) {
      document.getElementById("saludo").innerHTML = "¡Bienvenida de nuevo, " + localStorage.getItem("usuario") + "!";
    } else {
      localStorage.setItem("usuario", prompt("Escribe tu nombre de usuario para registrarte"));
      document.getElementById("saludo").innerHTML = "¡Bienvenida por primera vez, " + localStorage.getItem("usuario") + "!";
    }
}

// Contador
function contador() {
    if (!sessionStorage.getItem("contadorStorage")) { // Ponemos el contador a 0 si no existía
      sessionStorage.setItem("contadorStorage", "0"); // Se usan siempre cadenas y siempre devuelven cadenas. Aunque a los números los convierte directamente en cadenas
    }

    document.getElementById("contador").innerHTML = "Contador: " + sessionStorage.getItem("contadorStorage");

}

// Botones incrementar y decrementar
function incrementar() {
    sessionStorage.setItem("contadorStorage", Number(sessionStorage.getItem("contadorStorage")) + 1); // No pasa nada si aquí le pasamos un entero, porque automáticamente lo convierte en cadena
    document.getElementById("contador").innerHTML = "Contador: " + sessionStorage.getItem("contadorStorage");
}

function decrementar() {
    sessionStorage.setItem("contadorStorage", Number(sessionStorage.getItem("contadorStorage")) - 1); 
    document.getElementById("contador").innerHTML = "Contador: " + sessionStorage.getItem("contadorStorage");
}

// Botón de logout
function logout() {
    alert("Se ha cerrado la sesión de " + localStorage.getItem("usuario"));
    localStorage.removeItem("usuario"); // También podríamos hacer: localStorage.clear() -> esto no borra el "contadorStorage" porque es un sessionStorage, no un localStorage
    document.getElementById("saludo").innerHTML = "";
}