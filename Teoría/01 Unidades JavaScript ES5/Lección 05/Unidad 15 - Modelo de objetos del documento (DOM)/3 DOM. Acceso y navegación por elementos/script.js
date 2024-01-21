/*
Cerramos este breve curso aprendiendo a movernos entre los elementos del DOM. Y para ello deberemos sumergirnos en el “parentesco” entre nodos: ¿quién es el padre de quién? ¿y el hermano? ¿y el primer hijo? ¿y el último?

Así pues, aprenderemos a:
  - Seleccionar el padre de un elemento con parentElement.
  - Acceder a todos los hijos, con .childNodes y .children (¡ojo que tienen sus diferencias!).
  - Acceder a primer o último hijo con .firstChild o .lastChild, que ya vimos en la lección anterior.
  - Encontrar el siguiente hermano, con nextSibling y nextElementSibling.
*/

for (let i = 0; i < document.getElementsByTagName("h2").length; i++){
  document.getElementsByTagName("h2")[i].addEventListener("click", recorrerAdelante);
}

function recorrerAdelante(e) {
  let texto = "";
  let h2 = e.target; // e.target -> representa al elemento que ha llamado al evento, pero extraido. Con solo e, sería el elemento sin extraer

  texto += "Has elegido " + h2.textContent; // h2.textContent -> Proporciona el texto del elemento (Ej: Galicia)

  // Seleccionamos la etiqueta padre
  let padre = h2.parentElement;

  texto += " que está situada en el " + padre.id + ". <br>";

  // Seleccionamos la etiqueta hermana
  // let ul = h2.nextSibling; -> No lo usamos porque incluye nodos de tipo texto
  var ul = h2.nextElementSibling;

  // Seleccionamos el número de hijos del hermano
  texto += "El número de provincias es " + ul.children.length + ":";

  // Seleccionamos los hijos del hermano y nos los recorremos
  let hijo = ul.firstChild;

  while (hijo != null) {
    texto += " " + hijo.textContent;
    hijo = hijo.nextElementSibling;
  }
  // Si quisiéramos recorrernos los hijos de atrás hacia delante, tendríamos que poner que "hijo" fuera igual a "ul.lastChild" y que dentro del bucle while, en vez de ser "hijo = hijo.nextElementSibling", sería "hijo = hijo.previousElementSibling"

  // Mostramos el texto
  document.getElementById("texto").innerHTML = texto;
}