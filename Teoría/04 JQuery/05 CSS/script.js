/*
En la lección anterior trabajamos con elementos HTML: cómo extraer, modificar y añadir información a un elemento y a sus atributos.
En esta ocasión veremos cómo trabajar con las propiedades CSS de estos elementos.

Así, veremos el método css, que según los parámetros pasados ejecuta una u otra operación:
- .css(“propiedad”): entre paréntesis pasamos el nombre de la propiedad; si está compuesta por dos palabras deberemos escribirlas en minúsculas separadas por un guión o en formato camelCase. Por ejemplo: “font-size” o “fontSize”. Nos permite extraer el valor de esa propiedad.
- .css(“propiedad”, “valor”): permite modificar una única propiedad indicada en el primer parámetro, asignándole el valor indicado en el segundo parámetro.
- .css({“propiedad1”: “valor1”, “propiedad2”: “valor2″…}: permite modificar más de una propiedad de un elemento simultáneamente.

Además, veremos cómo modificar clases CSS:
- .addClass(“nombre de la clase”): añade una clase al elemento.
- .removeClass(“nombre de la clase”): borra una clase del elemento.
- .toggleClass(“nombre de la clase”): añade una clase si no la tiene; de lo contrario, la elimina.
- .hasClass(“nombre de la clase”): devuelve true o false si el elemento tiene la clase.

Por último, mencionaremos algunos métodos propios para cambiar dimensiones CSS, como son:
- .width()
- .height()
- .innerWidth()
- .innerHeight()
- .outerWidth()
- .outerHeigth()
*/

$(document).ready(inicio);

function inicio() {
  // EXTRAER PROPIEDADES CSS -> css(<propiedad>)
  // 1- Usando estilos CSS
  $("h1").css("font-size"); // Devuelve el número de píxeles de la fuente de la etiqueta h1
  console.log($("h1").css("font-size")); // 32px

  // 2- Usando el formato CamelCase
  $("h1").css("fontSize"); // Devuelve el número de píxeles de la fuente de la etiqueta h1
  console.log($("h1").css("fontSize")); // 32px

  // MODIFICAR PROPIEDADES CSS:
  // Una sola propiedad -> css(<propiedad>, <valor>)
  $("h1").css("fontSize", "40px");
  console.log($("h1").css("fontSize")); // 40px

  // Varias propiedades -> css({<propiedad1> : <valor1>, <propiedad2> : <valor2>, ...})
  $("h1").css({
    fontSize: "41px",
    color: "red",
  });
  console.log($("h1").css("fontSize")); // 41px
  console.log($("h1").css("color")); // rgb(255, 0, 0)

  // MODIFICAR CLASES CSS:
  $("h3").addClass("verde"); // Añade la clase "verde" al encabezado de nivel 3
  $("h3").removeClass("verde"); // Quita la clase "verde" al encabezado de nivel 3
  $("h3").toggleClass("verde"); // Si la clase "verde" existe en el encabezado de nivel 3, la elimina y si no, la crea
  $("h3").hasClass("verde"); // Devuelve true o false dependiendo de si el encabezado de nivel 3 contiene la clase "verde"

  $("h3").click(function () {
    console.log($("h3").hasClass("verde")); // true
    $("h3").removeClass("verde");
    console.log($("h3").hasClass("verde")); // false
    $("h3").addClass("verde");
    console.log($("h3").hasClass("verde")); // true
    $("h3").toggleClass("verde");
    console.log($("h3").hasClass("verde")); // false
    $("h3").toggleClass("verde");
    console.log($("h3").hasClass("verde")); // true
  });

  // MÉTODOS PROPIOS PARA CAMBIAR DIMENSIONES CSS
  // width()
  console.log($("h3").width()); // 589
  $("h3").width(25);
  console.log($("h3").width()); // 25

  // heigth()
  // innerWidth()
  // innerHeigth()
  // outerWidth()
  // outerHeigth()
}
