/*
Ya sabemos cómo cargar archivos de texto y archivos XML asíncronamente mediante AJAX, y en el caso de XML, procesarlos a continuación utilizando Javascript.
Vamos a ver en esta ocasión cómo manejar un array desde el lado del servidor con PHP, y cómo procesar la respuesta recibida a través del this.responseText.
En esta ocasión lo haremos mediante una petición con GET, por lo que la URL con sus parámetros irá en texto plano en el método open().
*/

const TEXTO = document.querySelector("#nombre");
const SUGERENCIA = document.querySelector("#sugerencia");

function mostrarNombre(e) {
  let cadena = e.target.value; // Coge el valor del texto que estemos escribiendo en el input, es igual que decir: TEXTO.value

  if (cadena.length == 0) { // Si al levantar la tecla no hay nada (Ej: al "suprimir")
    SUGERENCIA.innerHTML = "";
    return;
  } else {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      /*
      Cada vez que se envía una solicitud al servidor, en ese procesamiento hay cinco fases y cada 
      una de ellas va a llamar a esta función. En cada cambio de una fase a otra, la función se va
      a ejecutar. 
      */

      if (this.readyState == 4 && this.status == 200) {
        // Cuando la solicitud ha sido prcesada y el estado y el status son correctos se hace lo siguiente
        SUGERENCIA.innerHTML = this.responseText; // php nos va a devolver un texto, por eso es "responseText", si fuera un xml sería un "responseXML"
      }
    };

    xhr.open("GET", "arrayNombres.php?nombre=" + cadena, true);
    /* 
    En la función open(), al usar "GET", los datos van por url, por lo que se deben poner los datos tipo:
        "arrayNombres.php?nombre=" + cadena
    Donde:
    - arrayNombres.php -> Es el archivo php que nos devolverá los datos
    - ?nombre= -> Son los datos que estamos pidiendo
    - cadena -> El valor de los datos introducidos (lo que escribimos en el input)

    En la función send() no ponemos ningún parámetro porque las peticiones con "GET" no lo necesitan.
    Si trabajásemos con "POST", tendríamos que poner por parámetros los datos que quisiésemos pedir
     */
    xhr.send();
  }
}

TEXTO.addEventListener("keyup", mostrarNombre, false) // El evento "keyup" se activa cuando se suelta una tecla. Los eventos "keydown" y "keyup" brindan un código que indica qué tecla se presiona, mientras que keypress indica qué carácter se ingresó -> https://developer.mozilla.org/es/docs/Web/API/Element/keyup_event