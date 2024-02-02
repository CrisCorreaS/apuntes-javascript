/*
jQuery es una biblioteca* de Javascript que permite interactuar con el árbol DOM de una página de una manera mucho más sencilla que trabajando con Vanilla Javascript. Además, permite manejar eventos, crear animaciones, etc.

*Biblioteca, que no librería como menciono en el vídeo. Se trata de un error muy común de false-friend: decimos librería porque en inglés se utiliza la palabra library, cuyo significado es biblioteca, y no librería.

Para incluir jQuery en nuestros proyectos podemos hacerlo de dos maneras:
  - Descargando los archivos fuente de jQuery de la web oficial e incluyéndolos en nuestro proyecto, pudiendo referenciarlos de manera interna: esta opción nos permite no depender de Internet ni que cambios en las versiones hagan fallar nuestro código.
  - Haciendo referencia directamente a la url pública del CDN donde se encuentra la última versión de jQuery: dependemos de Internet pero nos aseguramos que siempre estamos haciendo referencia a una versión correcta

A la hora de incluir cualquiera de las opciones podemos hacerlo con:
- La versión comprimida (o minificada), que reduce en gran medida el tamaño del archivo.
- La versión descomprimida, que es recomendable si queremos disponer del código fácilmente visualizable.

Por último veremos la sintaxis de las sentencias en jQuery, diferenciando tres opciones:
- La sintaxis con una función anónima.
- La sintaxis con una función con nombre.
- La sintaxis reducida.
*/

/*
SINTAXIS JQUERY:

  $(selector).accion();

- $ -> es un caracter más que se usa para identificar elementos jQuery 
*/

/* 
1º ESPERAMOS A LA CARGA DEL HTML:

- Opcion 1 -> Función anónima
$(document).ready(function () {
  alert("Página cargada correctamente");
});

- Opcion 2 -> Función con nombre
$(document).ready(inicio);

function inicio() {
  alert("Página cargada correctamente");
}

- Opcion 3 -> Versión reducida --> NO es la más recomendable porque
$(function () {
  alert("Página cargada correctamente");
});
*/

$(document).ready(inicio);

function inicio() {
  alert("Página cargada correctamente");
  document.getElementById("hola").innerHTML = "¡Hola Mundo!";
}