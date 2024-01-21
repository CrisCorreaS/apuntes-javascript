/*
En la lección anterior vimos cómo funcionaba el modelo de eventos en línea, o eventos en atributos HTML, que permitía incluir los eventos en Javascript directamente sobre la etiqueta HTML. Como ya viste anteriormente, esta opción no es la más indicada puesto que mezcla código en diferentes lenguajes dentro del mismo archivo.

En esta lección, por el contrario, trabajaremos con el modelo de eventos tradicional, que consiste en aplicar sobre un elemento seleccionado a través de Javascript, un evento de la forma “onnombreevento” (onclick, onmouseover, onblur…).

Desde el punto de vista de la organización, esta forma es mucho más correcta, ya que separa el código HTML del código Javascript.

Sin embargo, esta opción tampoco es la más recomendada, puesto que únicamente permite asociar un solo evento del mismo tipo a un elemento. Es decir, si hiciéramos lo siguiente:

    document.getElementById("parrafo").onclick = hazEsto;
    document.getElementById("parrafo").onclick = hazLoOtro;

Al hacer click sobre el párrafo con id “parrafo” únicamente se ejecutaría la función hazLoOtro().

Por eso la mejor opción es siempre utilizar el Modelo de eventos de W3C, que veremos en una lección posterior.
*/

/*
En la lección anterior vimos cómo funcionaba el modelo de eventos en línea, o eventos en atributos HTML, que permitía incluir los eventos en Javascript directamente sobre la etiqueta HTML con <script> (aunque en los apuntes yo lo hice con un js aparte porque me daba toc). Como ya vimos anteriormente, esta opción no es la más indicada puesto que mezcla código en diferentes lenguajes dentro del mismo archivo.

En esta lección, por el contrario, trabajaremos con el modelo de eventos tradicional, que consiste en aplicar sobre un elemento seleccionado a través de Javascript, un evento de la forma “onnombreevento” (onclick, onmouseover, onblur…).

Desde el punto de vista de la organización, esta forma es mucho más correcta, ya que separa el código HTML del código Javascript.

Sin embargo, esta opción tampoco es la más recomendada, puesto que únicamente permite asociar un solo evento del mismo tipo a un elemento. Es decir, si hiciéramos lo siguiente:

document.getElementById("parrafo").onclick = hazEsto;
document.getElementById("parrafo").onclick = hazLoOtro;

Al hacer click sobre el párrafo con id “parrafo” únicamente se ejecutaría la función hazLoOtro().

Por eso la mejor opción es siempre utilizar el Modelo de eventos de W3C, que veremos en una lección posterior.

El inconveniente de este tipo de eventos es que la página debe de estar completamente cargada para que se 
utilicen las funciones del DOM (que permiten asignar los manejadores de los elementos html)

SINTAXIS:
document.getElementById("nombre_id").nombre_evento_con_on = nombre_funcion_sin_parentesis;
*/

document.getElementById("tradicional1").onclick = cambiar1; //la función no lleva paréntesis
document.getElementById("tradicional2").onclick = cambiar2; 
document.getElementById("tradicional3").onclick = cambiar3; 

function cambiar1() {
    alert("Vamos a cambiar el texto 1 de la etiqueta a continuación");
    document.getElementById("tradicional1").innerHTML = "Texto Cambiado 1";
}

function cambiar2() {
    alert("Vamos a cambiar el texto 2 de la etiqueta a continuación");
    document.getElementById("tradicional2").innerHTML = "Texto Cambiado 2";
    // Si queremos que en un momento determinado esta acción del evento "onclick", desaparezca. Tenemos que hacer lo siguiente:
    document.getElementById("tradicional2").onclick = null; // Ahora si hacemos click una vez, se hace la acción de la función, pero al darle una o más veces más, ya no lo hace
}

function cambiar3() {
  alert("Vamos a cambiar el texto de todas las etiquetas a continuación");
  document.getElementById("tradicional1").innerHTML = "Texto 1 Cambiado 3";
  document.getElementById("tradicional2").innerHTML = "Texto 2 Cambiado 3";
  document.getElementById("tradicional3").innerHTML = "Texto 3 Cambiado 3";
}


/*
Para evitar que haya el inconveniente de que la página tenga que estar completamente 
cargada para que se utilicen las funciones DOM que asignan manejadores a los elementos 
HTML, tenemos que:
*/

window.onload = function () {
    alert("La página ha cargado correctamente");
    document.getElementById("tradicional4").onclick = miMensaje; // las funciones siempre sin paréntesis en el modelo de eventos tradicional
};

function miMensaje() {
    document.getElementById("tradicional4").innerHTML = "Modelo de registro de eventos tradicional"
}