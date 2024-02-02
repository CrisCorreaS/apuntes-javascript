/*
En esta sección vamos a ver cómo trabaja jQuery con los selectores tal y como trabajamos con CSS, por eso conviene saber cómo funcionan los selectores en las hojas de estilos: para sacar todo el potencial que tiene jQuery a la hora de seleccionar elementos.
De este modo, con jQuery podremos hacer referencia a elementos indicando su etiqueta, identificador, sus clases, o incluso pseudoselectores; todo ello de una única vez, sin necesidad de recorrer elementos, hacer bucles, o acceder a arrays, tal y como hacíamos con Javascript. Además, veremos cómo guardar los elementos seleccionados en una variable para su uso posterior.

Del mismo modo, veremos cómo aplicar escuchadores de eventos a un selector, al igual que hacíamos en Javascript con addEventListener, donde mencionaremos:
- Eventos de texto: html, text, val.
- Eventos de ratón: click, dblclick, mouseover, mouseout, mouseenter, mouseleave.
- Eventos de teclado: keypress, keydown, keyup.
- Eventos relacionados con formularios: submit, change, focus, blur.
- Eventos asociados a document/window: load, resize, scroll, unload.

Y por último veremos el funcionamiento en un ejemplo en el que integraremos selectores y eventos, y te permitirá ver el potencial de esta librería con apenas unas líneas de código.
*/

$(document).ready(inicio);

function inicio() {
  /*
  SELECTORES (son como los de CSS):
    - selectores de etiqueta. Ej -> $("p");
    - selectores de id. Ej -> $("#primero");
    - selectores de clase. Ej -> $(".tercero");
    - selectores de atributo. Ej -> $("input[type=text]");
    - selectores de pseudoselectores. Ej -> $("a[target='_blank']")

    Más info: https://api.jquery.com/category/selectors/

  GUARDAR UNA SELECCIÓN EN UNA VARIABLE:
  */
  let parrafos = $("p"); // Guarda los elementos EN EL MOMENTO

  /*
  EVENTOS:
    - Texto: html, text, val
    - Ratón: click, dblclick, mouseover, mouseout, mouseenter, mouseleave
    - Teclado: keypress, keydown, keyup
    - Formularios: submit, change, focus, blur
    - Document/Window: load, resize, scroll, unload
  */
  // Para todos los párrafos:
  $("p").mouseover(function () {
    $("p").css("color", "red"); // cambia el css
  });

  $("p").mouseout(function () {
    $("p").css("color", "black"); // cambia el css
  });

  // Para el párrafo en concreto en el que el ratón esté sobre él
  $("p").mouseover(function () {
    $(this).css("font-weight", "bold"); 
  });

  $("p").mouseout(function () {
    $(this).css("font-weight", "normal"); 
  });

  // Para un único párrafo
  $("#primero").click(function () {
    alert("Has pulsado el primer párrafo");
  });

  $(".importante").click(function () {
    $(this).hide(); // se oculta
  });
}
