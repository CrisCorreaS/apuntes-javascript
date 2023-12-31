# 📚 Apuntes sobre el DOM:

> [!NOTE]
> Links con información y vídeos para apoyar y complementar los apuntes:
> - [W3Schools JS HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
> - [Diferencias entre getElementById vs querySelector (y otros métodos del DOM) de ManzDev](https://www.youtube.com/watch?v=EiKYr5vjs48)
> - [HTMLCollection vs NodeList by freeCodeCamp](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/)
> - [Nodelist vs. HTMLCollection by Web Dev Simplified](https://www.youtube.com/watch?v=rhvec8cXLlo)
> - [HTMLCollection vs. NodeList Explained by The Code Creative](https://www.youtube.com/watch?v=uwJyp4ZLVMA)
> - [DOM Manipulation by Web Dev Simplified](https://www.youtube.com/watch?v=y17RuWkWdn8)

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
| [.getElementById("id")](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) |	Busca el elemento HTML por su id | Objeto Element |	Devuelve null.|
| [.getElementsByClassName("class")](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) |	Busca elementos con la clase = "class" | HTMLCollection (es casi como un array) |	Devuelve [].|
| [.getElementsByName("value")](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName) |	Busca elementos con el atributo name = "value" | NodeList (es casi como un array)  |	Devuelve [].|
| [.getElementsByTagName("tag")](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName) |	Busca etiquetas HTML "tag" | HTMLCollection (es casi como un array) |	Devuelve [].|

Estos son los 4 métodos tradicionales de Javascript para manipular el DOM. Se denominan tradicionales porque son los que existen en Javascript desde versiones más antiguas.

#### getElementById()
El primer método, ``.getElementById("id")`` busca un elemento HTML con el id especificado. En principio, un documento HTML bien construído no debería tener más de un elemento con el mismo id, por lo tanto, este método devolverá siempre un solo elemento:
```const page = document.getElementById("page");```

#### getElementsByClassName()
Por otro lado, el método ``.getElementsByClassName("class")`` permite buscar los elementos que tengan la clase especificada en class. Es importante darse cuenta del matiz de que el método tiene getElements en plural, es decir, puede devolver varias clases ya que al contrario que los id, pueden existir varios elementos con la misma clase:
```
const items = document.getElementsByClassName("item");  // [div, div, div]

console.log(items[0]);      // Primer item encontrado: <div class="item"></div>
console.log(items.length);  // 3
```
Estos métodos devuelven siempre un Array con todos los elementos encontrados que encajen con el criterio. En el caso de no encontrar ninguno, devolverá un Array vacío: [].

Exactamente igual funcionan los métodos ``getElementsByName("name")`` y ``getElementsByTagName("tag")``, salvo que se encargan de buscar elementos HTML por su atributo name o por su propia etiqueta de elemento HTML, respectivamente:
```
// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.getElementsByName("nickname");  // [input]

// Obtiene todos los elementos <div> de la página
const divs = document.getElementsByTagName("div");         // [div, div, div]
```

### Métodos modernos
Aunque los métodos tradicionales anteriores son más que suficientes para buscar elementos, actualmente tenemos a nuestra disposición dos nuevos métodos de búsqueda de elementos que son mucho más cómodos y prácticos si conocemos y dominamos los selectores CSS.

Es el caso de los métodos ``.querySelector()`` y ``.querySelectorAll()``:

|Método de búsqueda |	Descripción | Devuelve |	Si no lo encuentra...|
|-----------------------|------------------|------------------|------------------|
| [.querySelector(sel)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) |	Busca el primer elemento que coincide con el selector CSS "sel" |	El primer elemento|	Devuelve null|
| [.querySelectorAll(sel)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) |	Busca todos los elementos que coinciden con el selector CSS "sel" |	NodeList |	Devuelve []|
 
Con estos dos métodos podemos realizar todo lo que hacíamos con los métodos tradicionales mencionados anteriormente e incluso muchas más cosas (en menos código), ya que son muy flexibles y potentes gracias a los selectores CSS.

#### querySelector()
El método ``.querySelector()`` devuelve el primer elemento que encuentra que encaja con el selector CSS suministrado por parámetro. Siempre devuelve un solo elemento y en caso de no coincidir con ninguno, devuelve null :

```
const page = document.querySelector("#page");               // <div id="page"></div>
const info = document.querySelector(".main .info");         // <div class="info"></div>
```

Lo interesante de este método, es que al permitir suministrarle un selector CSS básico o incluso un selector CSS avanzado, se vuelve un sistema mucho más potente.

- El primer ejemplo sería equivalente a utilizar un ``.getElementById()``, sólo que en la versión de ``.querySelector()`` indicamos por parámetro un selector, y en el primero le pasamos un simple String. Observa que estamos indicando un "#" porque se trata de un "id".

- En el segundo ejemplo, estamos recuperando el primer elemento con clase "info" que esté dentro de otro con clase "main". En los métodos tradicionales, sería menos directo ya que tendríamos que realizar varias llamadas. Con ``.querySelector()`` se hace directamente sólo con una.

#### querySelectorAll()
Por otro lado, el método ``.querySelectorAll()`` realiza una búsqueda de elementos en el DOM, sólo que como podremos intuir por ese All(), devuelve un Array con todos los elementos que coinciden con el selector CSS.

```
// Obtiene todos los elementos con clase "info"
const infos = document.querySelectorAll(".info");

// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.querySelectorAll('[name="nickname"]');

// Obtiene todos los elementos <div> de la página HTML
const divs = document.querySelectorAll("div");
```

El método ``.querySelectorAll()`` siempre nos devolverá un Array de elementos. El número de elementos del array dependerá de los que encuentre.

### Búsquedas acotadas
Al realizar una búsqueda de un elemento particular y guardarlo en una variable o constante, podemos volver a realizar una nueva búsqueda posteriormente sobre este elemento, en lugar del DOM íntegro ``document``:

```
const menu = document.querySelector("#menu");
const links = menu.querySelectorAll("a");
```

Sin embargo, si controlamos un poco de CSS, esto puede ser más sencillo si hacemos lo siguiente:

```
const links = document.querySelectorAll("#menu a");
```

### [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) o [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
Ten en cuenta que aunque en esta documentación hemos hablado de Array (para simplificar), realmente los métodos de búsqueda generalmente devuelven un tipo de dato [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) o [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), que aunque son muy similares, no son exactamente Arrays.

```
const elements = document.querySelectorAll("div");
elements.map // undefined

const elements = [...document.querySelectorAll("div")];
elements.map // ƒ map() { [native code] }
```

En el segundo caso hemos hecho una desestructuración de arrays, es decir, hemos sacado todos los elementos de la estructura y la hemos metido en un nuevo Array. Por esta razón en el primer caso no podemos usar ``.map()`` y en el segundo caso, sí.

