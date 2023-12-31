# 📚 Apuntes sobre el DOM:

## 📖 [Qué es el DOM](https://lenguajejs.com/javascript/dom/que-es/)

Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura de árbol, mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

### El objeto document

En Javascript, la forma de acceder al DOM es a través de un objeto llamado ``document``, que representa el árbol DOM de la página o, más concretamente, la página de la pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán "Element" o "Node":
- **Element:** no es más que la representación genérica de una etiqueta: HTMLElement.
- **Node:** es una unidad más básica, la cuál puede ser "Element" o un nodo de texto.

Todos los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico. Algunos ejemplos:

| Tipo de dato genérico |  Tipo específico |   Etiqueta  |           Descripción           |
|-----------------------|------------------|-------------|---------------------------------|
| Element (HTMLElement) |  HTMLDivElement  |  ``<div>``  | Etiqueta divisoria (en bloque)  |
| Element (HTMLElement) | HTMLSpanElement  |  ``<span>`` |  Etiqueta divisoria (en línea)  |
| Element (HTMLElement) | HTMLImageElement |  ``<img>``  |            Imagen               |
| Element (HTMLElement) |     HTMLAudio    | ``<audio>`` |     Contenedor de audio         |

### API nativa de Javascript
Javascript nos proporciona un conjunto de herramientas para trabajar de forma nativa con el DOM de la página, entre las que se encuentran:
| Acción |	Descripción|
|-----------------------|------------------|
|🔍 Buscar etiquetas |	Métodos para buscar elementos en el DOM como ``.querySelector()``|
|🔮 Crear etiquetas |	Métodos y consejos para crear elementos en el DOM y trabajar con ellos|
|📩 Gestionar atributos	| Formas de gestionar y modificar atributos HTML de elementos del DOM|
|🎭 Gestión de CSS |	Uso de la API ``.classList`` para manipular clases CSS desde Javascript|
|🧾 Contenido etiquetas |	Acceder y modificar el contenido de una etiqueta HTML del DOM|
|🔌 Insertar etiquetas |	Formas de añadir elementos en el DOM, como ``.appendChild()`` u otros|
|🚢 Navegar por etiquetas |	Métodos para «navegar» a través de la jerarquía del DOM|
|🧙‍♂️ Animar elementos del DOM |	Aplicar animaciones CSS a elementos del DOM desde Javascript con ``animate()``|

## 📖 [Seleccionar elementos del DOM](https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/)
Si nos encontramos en nuestro código Javascript y queremos hacer modificaciones en un elemento de la página HTML, lo primero que debemos hacer es buscar dicho elemento. Para ello, se suele intentar identificar el elemento a través de alguno de sus atributos más utilizados, generalmente el "id" o "class".

Existen una serie de métodos que nos permitirán buscar en el DOM de la página y encontrar dichos elementos. El primer grupo son métodos más antiguos y tradicionales, el segundo grupo son métodos más modernos, pero requieren conocer selectores CSS.

### Métodos tradicionales
Los métodos más clásicos y tradicionales para realizar búsquedas de elementos en el DOM son más sencillos, pero menos potentes. Si lo que buscas es un elemento específico, lo mejor sería utilizar el método ``getElementById()``. En caso contrario, utilizaremos alguno de los otros tres métodos, que nos devuelven siempre un Array:

| Métodos de búsqueda |	Descripción | Devuelve |	Si no lo encuentra... |
|-----------------------|------------------|------------------|------------------|
| ``.getElementById(id)`` |	Busca el elemento HTML por su id | Objeto Element |	Devuelve null.|
| ``.getElementsByClassName(class)`` |	Busca elementos con la clase = "class" | HTMLCollection (es casi como un array) |	Devuelve [].|
| ``.getElementsByName(value)`` |	Busca elementos con el atributo name = "value" | NodeList (es casi como un array)  |	Devuelve [].|
| ``.getElementsByTagName(<tag>)`` |	Busca etiquetas HTML "tag" | HTMLCollection (es casi como un array) |	Devuelve [].|

Estos son los 4 métodos tradicionales de Javascript para manipular el DOM. Se denominan tradicionales porque son los que existen en Javascript desde versiones más antiguas.
