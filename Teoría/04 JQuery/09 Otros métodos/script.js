/*
Seguimos trabajando con jQuery una lección más, y esta vez veremos otros métodos que no se han tratado hasta ahora pero que conviene conocer por su utilidad.

Así, podemos hablar de los siguientes métodos relacionados con tipos de datos:
- .isFunction(elemento): determina si el argumento es una función.
- .isEmptyObject(elemento): indica si el argumento es un objeto vacío.
- .isPlainObject(elemento): indica si el argumento es un objeto, creado como new Object o con llaves.
- .isArray(elemento): determina si el elemento es un array.
- .isNumeric(elemento): indica si el argumento representa a un número en Javascript.
- .type(objeto): determina el valor del objeto pasado como argumento.

También veremos los siguientes elementos de fecha, cadenas y el método data:
- .now(): al igual que cuando definimos una fecha en Javascript, el valor devuelto almacena el número de milisegundos desde el día 1 de enero del año 1970. Este valor se puede parsear para extraer los datos que necesitemos.
- .trim(cadena): elimina los espacios al comienzo y fin de una cadena.
- .data(elemento, clave [,valor]): almacena datos asociados con el elemento especificado o devuelve el valor que contiene.
- .removeData(elemento): borra los datos almacenados previamente.
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
  // MÉTODOS DE TIPOS (devuelven true o false y siempre empiezan por "$.is")
  // $.isFunction(<element>) -> Devuelve true si es una función
  // $.isEmptyObject(<element>) -> Devuelve true si es un objeto vacío
  // $.isPlainObject(<element>) -> Devuelve true si es un objeto plano (abrir o cerrar llaves/corchetes)
  // $.isArray(<element>) -> Devuelve true si es un array
  // $.isNumeric(<element>) -> Devuelve true si es un número

  // $.type(<element>) -> Devuelve el tipo de elemento que es
  let miArray = [1, 2, 3];

  alert("isArray: " + $.isArray(miArray)); // isArray: true
  alert("isFunction: " + $.isFunction(miArray)); // isFunction: false
  alert("isNumeric: " + $.isNumeric(miArray)); // isNumeric: false
  alert("type: " + $.type(miArray)); // type: array


  // MÉTODOS DE FECHAS
  // $.now() -> Devuelve el número de milisegundos desde el 01/01/1970
  let fechayHora = $.now();
  alert(fechayHora); // 1707704249586

  // Pasamos esto a un objeto de fecha y hora
  alert(Date(fechayHora)); // Mon Feb 12 2024 03:17:37 GMT+0100 (hora estándar de Europa central)


  // MÉTODOS DE CADENAS
  // $.trim() -> Elimina todos los espacios del principio y del final de la cadena
  alert(
    "TRIM: *" +
      $.trim("          varios espacios al principio y final        ") +
      "*"
  ); // TRIM: *varios espacios al principio y final*


  // MÉTODO DATA -> Para aportar más información
  // $.data(<nombre>) -> Extrae el valor
  // $.data(<nombre>, <valor>) -> Establece el valor de ese nombre
  // $.data(<objeto>)
  // $.removeData(<nombre>) -> Elimina ese nombre y su valor

  $("#nombre").click(function () {
    $("div").data("nombre", "Ada LoveLace"); // Establece el nombre como "Ada Lovelace"
  });

  $("#nombre2").click(function () {
    alert($("div").data("nombre")); // Extrae el nombre
  });

  $("#nombre3").click(function () {
    $("div").removeData("nombre"); // Elimina el nombre
  });

}