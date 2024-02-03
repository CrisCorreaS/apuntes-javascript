/*
En esta lección empezaremos a trabajar con elementos HTML tal y como hacíamos cuando interactuábamos con el DOM en el curso de Javascript V. Utilización del modelo de objetos del documento (DOM). Pero esta vez haciendo uso de las opciones que ofrece JQuery.
En primer lugar veremos cómo extraer información de un elemento mediante:
- .html(): extrae el código HTML.
- .text(): extrae el texto de la etiqueta.
- .val(): extrae el valor de un elemento de tipo input.

También veremos cómo modificar y añadir información a un elemento:
- .html(“valor”): añade a un elemento el código html introducido entre paréntesis.
- .text(“valor”): añade a un elemento el texto introducido entre paréntesis.
- .val(“valor”): introduce el valor entre paréntesis en el elemento input.

Además, trabajaremos con atributos de un elemento mediante los siguientes métodos:
- .attr(“atributo”): extrae la información del atributo cuyo nombre está indicado entre paréntesis.
- .attr(“atributo”, “valor”): añade el valor del segundo parámetro al atributo cuyo nombre está indicado en el primer parámetro.
- .attr({ “atributo1”: “valor1”, “atributo2”: “valor2”}: permite añadir o modificar la información de más de un atributo simultáneamente.

  Por último, veremos las funciones callback que tienen los métodos .text, .html, .val y .attr. Estas contienen dos parámetros: el índice del elemento actual en la lista de elementos seleccionados y el valor original.
*/

$(document).ready(inicio);

function inicio() {
  /* EXTRAER INFORMACIÓN DE UN ELEMENTO [(GET): paréntesis sin parámetros]
  - html()
  - text()
  - val()
  */
  let htmlPrimero = $("#primero").html(); // Extraemos código html (innerHtml) del primer párrafo
  let textoPrimero = $("#primero").text(); // Extraemos el texto del primer párrafo
  let valorInput = $("input").val(); // Extraemos el "value" del input

  console.log(htmlPrimero); // Parrafo 1
  console.log(textoPrimero); // Parrafo 1
  console.log(valorInput); // Value del input

  /* MODIFICAR / AÑADIR INFORMACIÓN DE UN ELEMENTO [(SET): valor entre paréntesis]
  - html(<valor>)
  - text(<valor>)
  - val(<valor>)
  */
  $("#primero").html("Nuevo html del párrafo 1"); // Introducir código html en el párrafo 1
  console.log($("#primero").html()); // Nuevo html del párrafo 1
  console.log($("#primero").text()); // Nuevo html del párrafo 1

  $("#primero").text("Nuevo txt del párrafo 1"); // Introducir texto en el párrafo 1
  console.log($("#primero").text()); // Nuevo txt del párrafo 1
  console.log($("#primero").html()); // Nuevo txt del párrafo 1

  $("input").val("Nuevo valor del input"); // Introducir valor nuevo en el input
  console.log($("input").val()); // Nuevo valor del input

  /* EXTRAER INFORMACIÓN DE UN ATRIBUTO (GET)
  - attr(<nombre_atributo>)
  */
  let atributoHREF = $("a").attr("href"); // Extraemos información del valor del atributo "href" de todos los enlaces
  console.log(atributoHREF); // https://www.miweb.com

  /* MODIFICAR / AÑADIR INFORMACIÓN DE UN ATRIBUTO (SET)
  - attr(<nombre_atributo>, <nuevo_valor>) -> Modificar un solo atributo
  - attr({
      "nombre_atributo1": "valor_atributo1",
      "nombre_atributo2": "valor_atributo2",
      ...
    })
  */
  // Un solo atributo
  $("a").attr("href", "todoslosenlaces.html"); // Cambiamos el valor del atributo "href" de todos los enlaces
  console.log($("a").attr("href")); // todoslosenlaces.html

  // Varios atributos
  $("a").attr({
    title: "Todos los enlaces",
    href: "todoslosenlaces2.html",
  });
  console.log($("a").attr("title")); // Todos los enlaces
  console.log($("a").attr("href")); // todoslosenlaces2.html

  /*
  FUNCIONES CALLBACK:
    - Los métodos text(), html(), val() y attr() tienene una función callback con dos parámetos:
        - El índice del elemento actual en la lista de elementos seleccionados
        - El valor original
    - Una función que tiene dos parámetros y que luego podemos utilizar para lo que queramos
  */
  $("button").click(function () {
    $("a").attr("href", function callback(i, original) {
      // i hace referencia a la etiqueta a la que nos estamos refiriendo, en este caso a "a" que como solo hay una etiqueta de enlace, sería 0; original hace referencia al atributo
      console.log($("a").attr("href")); // todoslosenlaces2.html
      original += "/nuevo";
      console.log($("a").attr("href")); // todoslosenlaces2.html -> Por consola no aparece el cambio por ahora
      return original; // Cuando hacemos el return original, es cuando en "Elements" podemos ver: <a href="todoslosenlaces2.html/nuevo" title="Todos los enlaces">Enlace</a>
    });

    console.log($("a").attr("href")); // todoslosenlaces2.html/nuevo -> Ahora sí que está y aparece cambiado
  });
}
