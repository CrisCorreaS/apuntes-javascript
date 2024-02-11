/*
Seguimos con Traversing; en la lección anterior vimos cómo movernos por el árbol DOM utilizando jQuery. Esta vez veremos cómo manipular elementos de una manera muy sencilla.
Así, veremos:
- .append, .appendTo .prepend: añade y mueve elementos como hijos.
- .before y .after: añade y mueve elementos como hermanos.
- .clone(): clona un elemento.
- .insertAfter(), .insertBefore(): inserta un elemento antes o después de otra.
- .remove(): borra el elemento y sus hijos.
- .empty(): borra el contenido y los hijos del elemento.
*/

$(document).ready(inicio);

function inicio() {
  alert("Creamos estructura con before/prepend/append/after");

  // PREPEND / APPEND -> añade / mueve elementos como HIJOS
  // prepend -> Crea un hijo antes del contenido del elemento padre actual
  // append -> Crea un hijo después del contenido del elemento padre actual

  // BEFORE / AFTER -> añade / mueve elementos como HERMANOS
  // before -> Crea un hermano antes del elemento hermano
  // after -> Crea un hermano después del elemento hermano
  $("div")
    .before("<div class='hermano'>1. Before</div>") // En jQuery no existe un método de crear un elemento en el DOM dinámicamente como el createElement(), por lo que tenemos que escribir la etiqueta completa
    .prepend("<div class='hijo'>2. Prepend</div>")
    .append("<div class='hijo'>3. Append</div>")
    .after("<div class='hermano'>4. After</div>");

  alert("Movemos el primer list item al final");

  // $(<elemento>).appendTo(<destino>) -> Mueve el elemento al destino
  $("ul li:first").appendTo("ul"); // -> Mueve el primer elemento al final ("Elemento 1")

  // $(<destino>).append(<elemento>) -> Mueve el elemento al destino, hay que poner el elemento también con "$"
  $("ul").append($("ul li:first")); // -> Mueve el primer elemento al final ("Elemento 2")


  // CLONAR ELEMENTOS
  // clone() -> Para clonar elementos
  $("ul li:first").clone().appendTo("ul"); // -> Clona el primer elemento ("Elemento 3") y lo pega al final


  // CREAR ELEMENTOS
  // Forma 1
  let enlace1 = $(
    "<a href='https://www.google.com'>Mi primer enlace a Google</a><br/>"
  ); // Creamos un nuevo enlace con el código html

  // Forma 2
  let enlace2 = $("<a/>", {
    // $(<etiqueta>, {valores})
    href: "https://www.google.com",
    html: "Mi <strong>segundo</strong> enlace a Google",
    class: "nuevo", // Para añadir clases, hay que hacerlo entre comillas
  });

  let enlace3 = $(
    "<a href='https://www.google.com'>Mi tercer enlace a Google</a>"
  );


  // AÑADIR ELEMENTOS AL DOM:
  // Forma 1
  alert("Añadimos el primer enlace");
  $("p").append(enlace1);

  // Forma 2
  alert("Añadimos el segundo enlace");
  enlace2.appendTo($("p"));

  // Forma 3
  alert("Añadimos el tercer enlace");
  enlace3.insertAfter("ul");


  // CREAR Y AÑADIR A LA VEZ
  $("li").after("<li>Nuevo list item</li>"); // Añade un nuevo "li" después de cada uno de los "li" que ya existen


  // BORRAR O ELIMINAR ELEMENTOS
  // <elemento>.remove() -> Borra el elemento y sus hijos
  $("ul").remove(); // Elimina el elemento "ul" y todos sus hijos

  // <elemento>.empty() -> Borra los hijos del elemento 
  $("div").empty(); // Elimina todos los hijos del elemento "div"
}
