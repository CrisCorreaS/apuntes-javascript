/* 
Damos comienzo a la primera lección del curso en el que veremos cómo podemos acceder a los diferentes elementos de una página web, modificar su texto y atributos, y por qué debemos elegir una opción u otra.

Veremos tres modos de seleccionar elementos:
  - A partir de su identificador, mediante getElementById.
  - A partir de su clase, mediante getElementsByClassName.
  - A partir de su etiqueta, mediante getElementsByTagName.
  - A partir de su selector CSS, mediante querySelector.

¡Pero ojo! No es lo mismo utilizar un método que devuelva un único elemento, como es el primer y último caso, que utilizar cualquiera de los otros dos, que devuelven arrays y, por lo tanto, deben ser procesados como tal.

Además, veremos cómo modificar el texto que contiene un elemento “no vacío”, como es el caso de un párrafo, utilizando .innerHTML; cómo añadir un atributo a un elemento, mediante el método .setAttribute; y cómo añadir o quitar clases utilizando .className.
*/

/*
DOM -> Es un estandar que define cómo acceder a documentos XML, HTML...
Mediate JS podemos acceder y actualizar el contenido de un HTML dinámicamente cambiando, creando o borrando elementos; modificando atributos, etc

Hay que saber distinguir lo que es un elemento, un atributo y el texto:
Ej:
    <p id="parrafo1">Este es el párrafo 1</p>
    "p" -> Es el elemento
    "id" -> Es el atributo del elemento
    "Este es el párrafo 1" -> Es el texto que va dentro del elemento
*/

/*
Si no usamos en la etiqueta de script de html el defer (<script src="script.js" defer></script>) tenemos que hacer:
window.load = inicio;
window.addEventListener("load", inicio, fase);
*/

// function incicio(){
document
  .getElementById("cambiarTextos")
  .addEventListener("click", cambiarTextos, false);
document
  .getElementById("cambiarClases")
  .addEventListener("click", cambiarClases, false);
document
  .getElementById("quitarClases")
  .addEventListener("click", quitarClases, false);
//}

function cambiarTextos() {
  // Seleccionar UN ÚNICO elemento según su id
  document.getElementById("parrafo1").innerHTML = "Primer párrafo cambiado";

  // Seleccionar TODOS los elementos que tengan una etiqueta en concreto -> getElementsByTagName() devuelve un array de todos los elementos que tengan esa etiqueta
  document.getElementsByTagName("p")[1].innerHTML = "Segundo párrafo cambiado";

  // Seleccionar el PRIMER elemento con un selector CSS
  document.querySelector(".miClase").innerHTML = "Tercer párrafo cambiado";

  document.querySelector("#parrafo4").innerHTML = "Cuarto párrafo cambiado";

  // Seleccionar TODOS los elementos según su clase -> getElementsByClassName() devuelve un array de todos los elementos que tengan esa clase
  document.getElementsByClassName("miClase")[2].innerHTML = "Quinto párrafo cambiado";

  // Seleccionar TODOS los elementos con un selector CSS
  document.querySelectorAll(".miClase")[3].innerHTML = "Sexto párrafo cambiado";
}

function cambiarClases() {
  document.getElementById("parrafo1").setAttribute("class", "miClase");
  document.getElementById("parrafo2").className = "miClase";
  document.getElementById("parrafo7").classList.add("miClase");
}

function quitarClases() {
  // document.getElementById("parrafo1").setAttribute("class", "");
  // document.getElementById("parrafo2").className = "";
  // document.getElementById("parrafo3").classList.remove("miClase");

  for (let i = 0; i < document.getElementsByTagName("p").length; i++){
    document.getElementsByTagName("p")[i].className = "";
  }
}
