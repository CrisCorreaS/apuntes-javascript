/*
En esta segunda lección aprenderemos cómo crear, modificar y borrar elementos en un documento HTML. Concretamente veremos:
  - Cómo crear un nuevo elemento con el método .createElement.
  - Cómo crear un nuevo elemento textual para incluirlo en elementos HTMl “no vacíos”, mediante el método .createTextNode.
  - Cómo incluir un elemento dentro de otro o del documento con .appendChild.
  - Cómo sustituir y borrar elementos con .replaceChild y .removeChild respectivamente.

Y recordaremos cómo trabajar con atributos utilizando .setAttribute.
*/

const DIV1 = document.getElementById("div1");
const CREAR_PARRAFO = document.getElementById("crearParrafo");
const CREAR_IMAGEN = document.getElementById("crearImagen");
const BORRAR_ULTIMO = document.getElementById("borrarUltimo");
const BORRAR_PRIMERO = document.getElementById("borrarPrimero");
const SUSTITUIR = document.getElementById("sustituirPrimeroVacio");

CREAR_PARRAFO.addEventListener("click", crearParrafo, false);
CREAR_IMAGEN.addEventListener("click", crearImagen, false);
BORRAR_ULTIMO.addEventListener("click", borrarUltimo, false);
BORRAR_PRIMERO.addEventListener("click", borrarPrimero, false);
SUSTITUIR.addEventListener("click", sustituirPrimeroVacio, false);

function crearParrafo() {
  // Crear elemento
  let parrafo = document.createElement("p"); // Esto crea un párrafo

  // Crear texto -> No vale un String tienes que crear un Text Node
  let texto = document.createTextNode(document.getElementById("texto").value);

  // Le vamos a poner dentro el texto al párrafo
  parrafo.appendChild(texto); // appendChild() añade un "hijo" al elemento -> Ahora tenemos un párrafo con texto pero aún no pertenece a nuestro documento

  // Añadir atributos al elemento
  parrafo.setAttribute("class", "miClase");

  // Añadimos el párrafo al div div1 -> Eso es hacer que el párrafo sea hijo del div
  DIV1.appendChild(parrafo);
}

function crearImagen() {
  // Crear elemento
  let imagen = document.createElement("img"); // Esto crea una imagen

  // Añadir atributos al elemento
  imagen.src = "ruta";
  imagen.setAttribute("src", prompt("Escribe una ruta para la imagen"));

  imagen.alt = prompt("Escribe un texto alternativo para la imagen");

  // Añadimos el párrafo al div div1 -> Eso es hacer que el párrafo sea hijo del div
  DIV1.appendChild(imagen);
}

function borrarUltimo() {
  // Seleccionamos el elemento padre y el elemento hijo
  let padre = DIV1;
  let ultimoHijo = padre.lastChild; // lastChild -> selecciona el último hijo

  // Eliminamos el último hijo del elemento padre
  padre.removeChild(ultimoHijo);
}

function borrarPrimero() {
  // Seleccionamos el elemento padre y el elemento hijo
  let padre = DIV1;
  let primerHijo = padre.firstChild; // firstChild -> selecciona el primer hijo

  // Eliminamos el primer hijo del elemento padre
  padre.removeChild(primerHijo);
}

function sustituirPrimeroVacio() {
  // Creamos el elemento
  let parrafo = document.createElement("p");

  // Creamos el text node
  let texto = document.createTextNode("Vacio");

  // Le vamos a poner dentro el texto al párrafo
  parrafo.appendChild(texto);

  // Sustituir un elemento -> replaceChild(<nuevo-elemento>, <elemento-viejo>)
  DIV1.replaceChild(parrafo, DIV1.firstChild);
}
