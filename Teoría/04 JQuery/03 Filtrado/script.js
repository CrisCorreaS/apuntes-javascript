/*
En la lección anterior aprendimos cómo trabaja jQuery con los selectores. Pues bien, sobre estas agrupaciones de elementos podemos realizar una serie de filtros que nos permitirán escoger ciertos elementos en función de unas u otras características.

Los métodos de filtrado con los que trabajaremos son los siguientes:
- .has(<selector>): opera sobre elementos que contienen otros elementos que se identifican con el selector incluido entre paréntesis.
- .not(<selector>): similar al anterior, pero opera sobre elementos que NO contienen otros elementos identificados por el selector incluido entre paréntesis.
- .filter(<selector>): opera sobre elementos que coinciden con la búsqueda, de manera que elige de entre los elementos que ya han sido seleccionados aquellos que cumplen con la condición.
- .find(<selector>): devuelve los descendientes de los elementos que coinciden con la búsqueda.
- .first(): devuelve el primer elemento de una lista.
- .last(): devuelve el último elemento de una lista.
- .eq(<número>): devuelve el elemento que se encuentra en la posición indicada entre paréntesis.

Además, veremos con un ejemplo cómo es posible realizar selecciones encadenadas y cambios sobre los elementos mediante métodos enlazados uno a continuación de otro.
*/

$(document).ready(inicio);

function inicio() {
  /*
  FILTRADO DE SELECCIONES:
    - has(<selector>) -> Opera sobre elementos que contienen otros elementos incluidos en el has()
        $("div.textos").has("p") -> Devuelve un elemento div que tenga una clase "textos" y tenga dentro párrafos
    
    - not(<selector>) -> Opera sobre elementos que NO contienen otros elementos indicados en el not()
        $("p").not(".importante") -> Devuelve todos los párrafos que no tengan una clase "importante"

    - filter(<selector>) -> Opera en elementos que coinciden con la búsqueda
        $("p").filter(".importante") -> Devuelve el p con la clase "importante"

    - find(<selector>) -> Devuelve los descendientes de un elemento
        $("p#primero").find("span"); -> Devuelve los span del párrafo con id="primero"

    - first() / last() -> Devuelve el primer o último elementos de una lista
        $("p").first() ->  Devuelve el primer párrafo
        $("p").last() ->  Devuelve el último párrafo

    - eq(<número>) -> Devuelve el elemento que coincide con la posición indicada
        $("p").eq(5) -> Devuelve el sexto párrafo porque empieza de 0 a x
  */
  
  // ENCADENAMIENTO DE SELECCIONES:
  $("div#textos") // Etiqueta con id=textos
    .find("p") // Solo párrafos -> El h3 ya no está seleccionado
    .eq(0) // Solo el primer párrafo
    .html("TEXTO CAMBIADO EN EL PRIMER PÁRRAFO") // Cambia el html (innerHtml)
    .end() // Restablece a los elementos del párrafo, pero el html del primer párrafo sigue cambiado
    .eq(2) // Tercer párrafo
    .html("TEXTO CAMBIADO EN EL TERCER PÁRRAFO");
}