# Apuntes sobre el DOM:

## [Qué es el DOM](https://lenguajejs.com/javascript/dom/que-es/)

Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura de árbol, mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

### El objeto document

En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o, más concretamente, la página de la pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán  o :
- **Element:** no es más que la representación genérica de una etiqueta: HTMLElement.
- **Node:** es una unidad más básica, la cuál puede ser  o un nodo de texto.

Todos los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico. Algunos ejemplos:

| Tipo de dato genérico | Tipo específico | Etiqueta | Descripción |
| Element (HTMLElement) | HTMLDivElement | ``<div>`` | Etiqueta divisoria (en bloque) |
| Element (HTMLElement) | HTMLSpanElement | ``<span>`` | Etiqueta divisoria (en línea) |
| Element (HTMLElement) | HTMLImageElement | ``<img>`` | Imagen |
| Element (HTMLElement) | HTMLAudio | ``<audio>`` | Contenedor de audio |