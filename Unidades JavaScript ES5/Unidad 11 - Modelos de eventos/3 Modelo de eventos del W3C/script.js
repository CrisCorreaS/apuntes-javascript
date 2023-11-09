/*
A diferencia del modelo de eventos en línea, el modelo de registro de eventos avanzados
del W3C, separa el js del html.

En los apuntes del modelo de eventos en línea, todo el js debería de haberse embebido
con la etiqueta <script> pero me daba un poco de TOC hacerlo sabiendo que es una mala
práctica, pero es como sería el modelo de eventos en línea de verdad.

Este tipo de modelo de eventos se utiliza en navegadores tipo Firefox, Mozilla, Chrome...
pero no funciona en navegadores como Edge o el Internet Explorer. Para estos navegadores,
necesitamos un modelo diferente, el modelo de eventos avanzado de Microsoft

NOTA: La etiqueta de <script> con la referencia a donde está este script.js
(<script src="script.js"></script>), debería de ir siempre al final del body.
Si está en la cabecera, cuando ejecutamos el código nos puede dar el siguiente error:
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
El cual se soluciona poniendo la etiqueta al final del body
*/

/*
SINTAXIS:
En nuestro js, tenemos que poner lo siguiente para gestionar los eventos de cualquier elemento:

elemento.addEventListener("<evento_sin_on>", <nombre_funcion>, <true | false>);

- Para hacer referencia al elemento tenemos que hacer un document.getElementById()
- El evento tendría que ser sin "on" y con comillas -> para un onclick sería "click"
- La función no tiene comillas ni se pone el paréntesis() -> saludar() sería saludar
- true o false lo veremos más adelante porque hace referencia a la fase de burbujeo -> por defecto lo dejamos en "false"
*/

document.getElementById("w3c").addEventListener("mouseover", saludarUnaVez, false);

function saludarUnaVez() {
    alert("Hola caracola");
}


//Este modelo de eventos, nos permite añadir varias acciones a un mismo evento
document.getElementById("w3c").addEventListener("mouseover", saludarDosVeces, false);
document.getElementById("w3c").addEventListener("mouseover", colorearRojo, false);

function saludarDosVeces() {
  alert("Hola caracola 1");
  alert("Hola caracola 2");
}

function colorearRojo() {
    document.getElementById("w3c").style.color = "red"; // Así hacemos referencia a la propia etiqueta HTML y le aplicamos un estilo con css
}

/*
Primero hace el alert de "Hola caracola", luego los dos de "Hola caracola 1" y 
"Hola caracola 2" y por último se colorea

Se sigue el orden del js a la hora de verse los eventos
*/


document.getElementById("w3c").addEventListener("dblclick", colorearRojo, false); // dblclick es doble click. Aquí usa la misma función que el mouseover, esto funciona porque se sigue haciendo el evento sobre la etiqueta con id="w3c", si se hiciera con otra, no funcionaría porque en la función estamos haciendo un document.getElementById("w3c")
document.getElementById("w3c").addEventListener("dblclick", fondo, false);

function fondo() {
    document.getElementById("w3c").style.background = "blue";
}

// Eliminar algunas acciones de los eventos -> removeEventListener(nombre_EventListener_a_eliminar, nombre_funcion_que_ejecuta)
document.getElementById("w3cPrueba").addEventListener("mouseover", saludar, false);
document.getElementById("w3cPrueba").addEventListener("mouseover", fondoVerde, false);
document.getElementById("w3cPrueba").addEventListener("click", saludarDosVeces, false);

function saludar() {
    alert("Hola caracola"); // Solo con esta línea, lo que hace es saludar con Hola Caracola y luego hacer que se ejecute la siguiente acción (fondoVerde)
    document.getElementById("w3cPrueba").removeEventListener("click", saludarDosVeces); // Ahor al hacer click, no hace nada, ya que "saludarDosVeces()", era la única acción que se ejecutaba al hacer click
}

function fondoVerde() {
  document.getElementById("w3cPrueba").style.background = "green";
}



//FUNCIONES ANÓNIMAS
/*
Antes SIN funciones anónimas:
elemento.addEventListener("<evento_sin_on>", <nombre_funcion>, <true | false>);

Ahora CON funciones anónimas:
elemento.addEventListener("<evento_sin_on>", function(){código_funcion}, <true | false>);
*/

document.getElementById("w3cAnonima").addEventListener("click", function () {
    document.getElementById("w3cAnonima").style.background = "#C0C0C0";
}, false);

