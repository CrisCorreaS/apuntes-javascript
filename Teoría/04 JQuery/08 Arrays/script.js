/*
Pasamos a trabajar con otra de las partes más interesantes de cualquier lenguaje de programación en general y, en este caso, de jQuery en particular: los arrays, arreglos o vectores.
Concretamente, en esta lección veremos qué es y cómo utilizar un espacio de nombres (tal y como ocurre con $.fn), así como la diferencia entre escribir, por ejemplo, $.each o jQuery.each.

También trabajaremos con los siguientes métodos:
- $.each y $.map -> nos permiten recorrer y manipular elementos de un array u objeto.
- $.inArray -> devuelve el índice de un valor en un array, o -1 si el valor no se encuentra en el array.
- $.merge -> permite unir dos arrays.
- $.grep -> busca un elemento que cumpla con una característica y devuelva true o false.
- $.makeArray -> convierte un array jQuery en un array Javascript.

Además, sobre un selector que devuelve uno o más elementos, puedes realizar las siguientes operaciones:
- .each -> recorre los elementos seleccionados y ejecuta para cada uno de ellos la función pasada por parámetro.
- .length -> devuelve el número de elementos de un array.
- .get() -> extrae el elemento de una posición indicada por parámetro.
- .index() -> extrae el número de un elemento respecto a sus hermanos.
*/

/*
ESPACIO DE NOMBRES $.fn
-> Cuando usamos selecciones utilizamos métodos del espacio de nombres $.fn, y forman parte del objeto JQuery -> $("div")

ESPACIO DE NOMBRES $
-> Cuando no usamos selecciones, utilizamos métodos del espacio de nombres $, y forman parte del núcleo del objeto JQuery -> $.each o jQuery.each

--> Hay métodos de $.fn y de $ con el mismo nombre, no los confundas
*/

$(document).ready(inicio);

function inicio() {
  // Recorrer y manipular elementos de un array u objeto
  // $.each(<array u objeto>, <funcion (<indice>, <elemento>){...}>) -> Es un iterador inmutable (no varía) que devuelve el array original
  // $.map(<array u objeto>, <funcion (<elemento>, <indice>){...}>) -> Es un iterador mutable que devuelve un array nuevo basado en el array original con los cambios que hayamos hecho

  // Objeto -> usa pares clave:valor
  let obj = { nombre: "Ada", apellido: "Lovelace" };

  $.each(obj, function (clave, valor) {
    alert(clave + " : " + valor); // nombre : Ada || apellido : Lovelace
  });

  // Array
  let array = [1, 5, 6, 0, 9];

  $.each(array, function (indice, valor) {
    alert(indice + " : " + valor); // 0 : 1 || 1 : 5 || 2 : 6 || 3 : 0 || 4 : 9
  });

  // Número de elementos de un array
  alert("Número de elementos del array = " + array.length); // Número de elementos del array = 5

  // Vuscar un valor en un array
  // $.inArray(<elemento>, <array>) -> devuelve el índice de un valor en un array, o -1 si el valor no está en el array
  if ($.inArray(3, array) !== -1) {
    alert("Valor encontrado en la posición " + $.inArray(3, array));
  } else {
    alert("El valor no se encuentra en el array");
  } // El valor no se encuentra en el array

  if ($.inArray(9, array) !== -1) {
    alert("Valor encontrado en la posición " + $.inArray(9, array));
  } else {
    alert("El valor no se encuentra en el array");
  } // Valor encontrado en la posición 4

  // Unir dos arrays
  // $.merge(<array1>, <array2>);
  console.log($.merge([1, 2, 3, 4], [5, 6, 7]));
  /*
Array(7)
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
6: 7
length: 7
  */

  // -------------------------------ARRAYS DE ELEMENTOS JQUERY -------------------------------------
  // Recorrer un array de elementos de un selector
  alert("Recorrer un array de elementos de un selector 'li' ");

  $("#recorrer").click(function () {
    $("li").each(function () {
      console.log($(this).text());
    }); // Elemento 1 || Elemento 2 || Elemento 3 || Elemento 4
  });

  // length -> Número de elementos de un array
  alert("Número de elementos li: " + $("li").length); // Número de elementos li: 4

  // get(<num_posicion>) -> Extraer el elementos de una posición
  let element = $("li").get(2);
  alert(
    "El elemento número 3 es de tipo " +
      element.nodeName +
      " y contiene " +
      element.innerHTML
  ); // El elemento número 3 es de tipo LI y contiene Elemento 3

  // index() -> Extrae el número de un elemento respecto a sus hermanos
  $("li").click(function () {
    alert("Has pulsado el elemento " + $(this).index()); // Has pulsado el elemento 0
  });

  // $.grep(<array u objeto>, funcion(<elemento>, <indice>){...}) -> Busca un elemento que cumpla con una característica (true/false)
  alert("Buscamos los elementos que tengan índice mayor que 1");

  let filtrado = $.grep($("li"), function (element, indice) {
    return indice > 1; // Devuelve los elementos con índice > 1
  });

  // Nos recorremos ahora ese filtrado
  $.each(filtrado, function (indice, elemento) {
    alert(indice + " : " + elemento.innerHTML); // 0 : Elemento 3 || 1 : Elemento 4 ||
  });

  // Convertir un array jQuery en un array JS -> $.makeArray(array)
  alert("Convertimos un array jQuery en JavaScript y lo invertimos");

  let arrayJS = $.makeArray($("li"));

  arrayJS.reverse();

  for (let i = 0; i < arrayJS.length; i++) {
    alert(arrayJS[i].innerHTML); // Elemento 4 || Elemento 3 || Elemento 2 || Elemento 1
  }
}
