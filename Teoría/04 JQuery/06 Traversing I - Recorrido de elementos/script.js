/*
En lecciones anteriores vimos cómo utilizar jQuery para modificar elementos y para cambiar sus estilos. En esta ocasión veremos cómo movernos a través del DOM de nuestra web.
Traversing significa “moverse a través” y se utiliza para encontrar o seleccionar elementos HTML teniendo encuenta la relación de éstos con otros elementos. Comenzaremos a con una selección de uno o más elementos y nos moveremos a través de ella hasta que lleguemos al que estamos buscando.

Podemos hablar de las siguientes relaciones de elementos:
- Current, o elemento actual.
- Ancestors, es decir, antecesores o predecesores (nodos padre, abuelo, etc.).
- Descendants, o descendientes (nodos hijo, nieto, etc.).
- Siblings, o nodos hermano (nodos que comparten el mismo nodo padre).

jQuery provee de una gran variedad de métodos que nos permiten atravesar el DOM, la mayoría de ellos utilizando el árbol DOM del documento, entre los que se encuentran:
- Antecesores:
  - .parent(): padre directo.
  - .parents(): todos los antecesores hasta html.
  - .parentsUntil(): todos los antecesores hasta uno en concreto.
  - .closest(): antecesor más cercano que tiene esa etiqueta.

- Descendientes:
  - .children(): hijos directos.
  - .find(): hijos que cumplen con una condición.
  - .siblings(): todos los hermanos.
  - .next() y .prev(): siguiente hermano y hermano anterior.
  - .nextAll() y .prevAll(): todos los siguientes hermanos y todos los hermanos anteriores.
  - .nextUntil() y .prevUntil(): el siguiente o anterior hermano hasta uno en concreto.
  
- Filtros:
  - .has(): elemento que contiene elementos indicados en el selector pasado entre paréntesis.
  - .not(): elemento que no cumple con el criterio indicado entre paréntesis.
  - .first(): primer elemento que cumple con un criterio.
  - .last(): último elemento que cumple con un criterio.
  - .eq(número): elemento que se encuentra en la posición indicada entre paréntesis.

- Añadir elementos:
  - .add(): añade elementos a una selección (¡ojo! No los crea).
*/

$(document).ready(inicio);

function inicio() {
  // ASCENDIENTES
  // .parents() -> Todos los antecesores hasta la etiqueta "html" (padres, abuelos, bisabuelos, tatarabuelos...)
  $("span").parents().css("border", "2px solid red"); // Añadimos a todos los ascendientes del "span" ("li", "ul", "div" y "body" ["html" exclusive]), un borde rojo

  // .parent() -> Padre directo
  $("div").parent().css("border", "2px solid blue"); // Añadimos al padre del "div" ("body"), un borde azul

  // .parentsUntil("<etiqueta>") -> Todos los antecesores hasta uno en concreto
  $("span").parentsUntil("div").css("border", "2px solid green"); // Añadimos a a todos los ascendientes del "span" ("li", "ul") hasta la etiqueta "div" exclusive, un borde verde

  // .closest("<etiqueta>") -> Antecesor más cercano con esa etiqueta
  $("b").closest("ul").css("border", "2px solid violet"); // Añadimos a la etiqueta "ul" más cercana al "b", un borde violeta. En este caso solo hay un "ul", pero si la estructura fuera: ul>li>ul>li>b, el "ul" violeta sería el segundo "ul": ul>li>ul (violeta)>li>b

  // DESCENDIENTES
  // .children() -> Devuelve todos los hijos directos
  $("li").children().css("border", "2px solid yellow"); // Añadimos un borde amarillo a todos los hijos del elemento "li" ("span", "i", "b", "u" y "pre")

  // .children("<query>") -> Devuelve todos los hijos que cumplan la query
  $("li").children("i.cur").css("border", "2px solid orange"); // Añadimos un borde naranja a todos los hijos del elemento "li" que tengan una etiqueta "i" y una clase "cur"

  // .find("<query>") -> Busca los descendientes que cumplan una condición
  $("div").find("u").css("border", "2px solid pink"); // Añadimos un borde rosa a todos los descendientes del elemento "sapn" que tengan una etiqueta "u"

  // HERMANOS (Comparten el mismo padre)
  // .siblings() -> Busca a todos los hermanos
  $("li>p#parrafo").siblings().css("border", "2px solid purple"); // Añadimos un borde púrpura a todos los hermanos del elemento "p" con un id="parrafo" dentro de un "li", sin incluirse a sí mismos

  // .next(), .prev() -> Busca a un hermano anterior o a un hermano siguiente
  $("li>pre#segundo").prev().css("border", "2px solid brown"); // Añadimos un marrón coral al hermano anterior del elemento "pre" con un id="segundo" dentro de un "li"
  $("li>pre#segundo").next().css("border", "2px solid coral"); // Añadimos un borde coral al siguiente hermano del elemento "pre" con un id="segundo" dentro de un "li"

  // .nextAll(), .prevAll() -> Busca a todos los hermanos anteriores o a todos los hermanos siguientes
  $("ol>li#tercero").prevAll().css("border", "2px solid cadetblue"); // Añadimos un marrón cadetblue a todos los hermanos anteriores del elemento "li" con un id="tercero" dentro de un "ol"
  $("ol>li#tercero").nextAll().css("border", "2px solid yellowgreen"); // Añadimos un borde yellowgreen a todos los hermanos siguientes del elemento "li" con un id="tercero" dentro de un "ol"

  // .nextUntil() -> Todos los hermanos hasta el elemento que haya entre paréntesis
  $("li>p#prueba").nextUntil("div").css("border", "2px solid crimson"); // Añadimos un borde crimson a todos los hermanos del elemento "p" con un id="prueba" dentro de un "li" hasta llegar a un elemento hermano "div" (sin incluir el "div")
  $("div>p>i").nextUntil("b").css("border", "2px solid turquoise"); // Añadimos un borde turquoise a todos los hermanos del elemento "i" dentro de un "p" dentro de un "div" hasta llegar a un elemento hermano "b" (sin incluir el "p")

  // FILTRADO
  // .has() , .not(), .first(), .last(), .eq(<número>)

  // AÑADIR ELEMENTOS A UNA SELECCIÓN (NO los crea)
  // .add(<lo_que_queramos>) -> Podemos colocar un selector, un elemento, html... entre paréntesis -> Se pueden poner tantos "add()" como queramos
  $("span").add("b").css("border", "4px dotted"); // A los elementos "span" y "b" les añadimos un borde más gordo y punteado de color tomato

}
