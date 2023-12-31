# 📚 Apuntes sobre el DOM:

> [!NOTE]
> Enlaces con información y vídeos para apoyar y complementar los apuntes:
> - Links:
>   - [W3Schools JS HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
>   - [Diferencias entre getElementById vs querySelector (y otros métodos del DOM) de ManzDev](https://www.youtube.com/watch?v=EiKYr5vjs48)
>   - [HTMLCollection vs NodeList by freeCodeCamp](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/)
>   - [WebComponents de ManzDev](https://lenguajejs.com/webcomponents/)
> - Vídeos:
>   - [Nodelist vs. HTMLCollection by Web Dev Simplified](https://www.youtube.com/watch?v=rhvec8cXLlo)
>   - [HTMLCollection vs. NodeList Explained by The Code Creative](https://www.youtube.com/watch?v=uwJyp4ZLVMA)
>   - [DOM Manipulation by Web Dev Simplified](https://www.youtube.com/watch?v=y17RuWkWdn8)

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

## 📖 [Crear elementos en el DOM](https://lenguajejs.com/javascript/dom/crear-elementos-dom/)
Si te encuentras en fase de aprendizaje, lo normal suele ser crear código HTML desde un fichero HTML. Sin embargo, y sobre todo con el auge de las páginas SPA (Single Page Application) y los frameworks o librerías Javascript, esto ha cambiado bastante y es muy frecuente crear código HTML desde Javascript de forma dinámica.

Esto tiene sus ventajas y sus desventajas. Un fichero .html siempre será más sencillo, más «estático» y más directo, ya que lo primero que analiza un navegador web es un fichero de marcado HTML. Por otro lado, un fichero .js es más complejo y menos directo, pero mucho más potente, «dinámico» y flexible, con menos limitaciones a la hora de desarrollar.

Existe una serie de métodos para crear de forma eficiente diferentes elementos HTML o nodos. Dichos métodos nos ofrecen una forma muy sencilla de crear estructuras dinámicas, mediante bucles o estructuras definidas:


|Métodos|	Descripción| Devuelve |
|-----------------------|------------------|------------------|
| [.createElement(tag, options)](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) |	Crea y devuelve el elemento HTML definido por el String tag.| Elemento |
| [.createComment(text)](https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment)	|Crea y devuelve un nodo de comentarios HTML <!-- text -->| Nodo de tipo Comentario |
| [.createTextNode(text)](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)	|Crea y devuelve un nodo HTML con el texto text| Nodo de tipo Texto|
| [.cloneNode(deep)](https://developer.mozilla.org/es/docs/Web/API/Node/cloneNode)	|Clona el nodo HTML y devuelve una copia. deep es false por defecto|Duplicado del nodo que lo llamó|
| [.isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)|	Indica si el nodo HTML está insertado en el documento HTML|Boolean|

Para empezar, nos centraremos principalmente en la primera, que es la que utilizamos para crear elementos HTML en el DOM.

### Creando elementos con createElement()
Mediante el método ``.createElement()`` podemos crear un Elemento HTML en memoria (¡no estará insertado aún en nuestro documento HTML!). Con dicho elemento almacenado en una variable o constante, podremos modificar sus características o contenido, para posteriormente insertarlo en una posición determinada del DOM o documento HTML.

Vamos a centrarnos en el proceso de creación del elemento, y más adelante veremos diferentes formas de insertarlo en el DOM. El funcionamiento de ``.createElement()`` es muy sencillo: se trata de pasarle el nombre de la etiqueta tag a utilizar:

```
const div = document.createElement("div");      // Creamos un <div></div>
const span = document.createElement("span");    // Creamos un <span></span>
const img = document.createElement("img");      // Creamos un <img>
```

Aunque menos frecuente, de la misma forma, podríamos crear comentarios HTML con ``.createComment()`` o fragmentos de texto sin etiqueta HTML con ``.createTextNode()``, pasándole a ambos un String con el texto en cuestión. En ambos, se devuelve un Node que podremos utilizar luego para insertar en el documento HTML:

```
const comment = document.createComment("Comentario");   // <!--Comentario-->
const text = document.createTextNode("Hola");           // Nodo de texto: 'hola'
```

El método ``createElement()`` tiene un parámetro opcional denominado "options". Si se indica, se espera un objeto con una propiedad is para definir un elemento personalizado en una modalidad menos utilizada. Se verá más adelante en el apartado de Web Components.

> Ten presente que en los ejemplos que hemos visto estamos creando los elementos en una constante, pero de momento no los hemos añadido al documento HTML, por lo que no aparecerían visualmente. Más adelante veremos como añadirlos.

### El método .cloneNode()
Hay que tener mucho cuidado al crear e intentar duplicar elementos HTML. Un error muy común es asignar un elemento que tenemos en otra variable, pensando que estamos creando una copia (cuando no es así). Esto es un clásico error común cuando se está aprendiendo a programar:

```
const div1 = document.createElement("div");
div.textContent = "Elemento 1";

const div2 = div1;   // NO se está haciendo una copia
div2.textContent = "Elemento 2";

div1.textContent;  // 'Elemento 2'
div2.textContent;  // 'Elemento 2'
```

Con esto, quizás pueda parecer que estamos duplicando un elemento para crearlo a imagen y semejanza del original. Sin embargo, lo que se hace es una referencia al elemento original, de modo que si se modifica el div2, también se modifica el elemento original. Esto se hace de esta forma por razones de rendimiento y eficiencia. Básicamente, creas un elemento div1 que apunta a una referencia de memoria X, y cuando haces "div2 = div1", lo que estás haciendo es asignarle al elemento div2 la misma referencia de memoria X que tiene el div1; por lo que la memoria X tendrá apuntando tanto al elemento div1 como al div2; así que cuando un elemento se modifica, cambian las propiedades de la memoria X y, por ende, cambian los dos elementos porque solo hay una referencia de memoria implicada.

Para evitar que se cree una referencia, y duplicar el elemento, que es lo que realmente queremos, deberíamos usar el método .cloneNode():

```
const div1 = document.createElement("div");
div1.textContent = "Elemento 1";

const div2 = div1.cloneNode();   // Ahora SÍ estamos duplicando
div2.textContent = "Elemento 2";

div1.textContent;  // 'Elemento 1'
div2.textContent;  // 'Elemento 2'
```

El método ``cloneNode(deep)`` acepta un parámetro Boolean opcional (deep), a false por defecto, para indicar el tipo de clonación que se realizará:
- Si es **true**, clonará también elementos hijos. Se conoce como clonación profunda (Deep Clone).
- Si es **false**, no clonará elementos hijos. Se conoce como clonación superficial (Shallow Clone).

### La propiedad .isConnected
La propiedad ``isConnected`` nos indica si el elemento en cuestión está conectado al DOM, es decir, si está insertado en el documento HTML:
- Si devuelve **true**, significa que el elemento está conectado al DOM.
- Si devuelve **false**, significa que el elemento no está conectado al DOM.
- 
Hasta ahora, hemos creado elementos que no lo están (permanecen sólo en memoria). En el capítulo Insertar elementos en el DOM veremos como insertarlos en el documento HTML para que aparezca visualmente en la página.

## Usando fragmentos
En algunas ocasiones, nos puede resultar muy interesante utilizar fragmentos. Los fragmentos son una especie de documento paralelo, aislado de la página con la que estamos trabajando, que tiene varias características:
- No tiene elemento padre. Está aislado de la página o documento.
- Es mucho más simple y ligero (mejor rendimiento).
- Si necesitamos hacer cambios consecutivos, no afecta al reflow (repintado de un documento).

De esta forma, es una estrategia muy útil para usarlo de documento temporal y no realizar cambios consecutivos, con su impacto de rendimiento. Para crearlos, necesitaremos utilizar la siguiente función:
- **[document.createDocumentFragment()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)**	-> Crea un fragmento aislado (sin padre).

Así pues, el Object que devuelve el método ``document.createDocumentFragment()`` es un fragmento que podremos utilizar para almacenar en su interior un pequeño DOM temporal, que luego añadiremos en nuestro DOM principal.

```
const fragment = document.createDocumentFragment();

for (let i = 0; i < 5000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item número ${i}`;
  fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

Como se puede ver, utilizamos el fragmento fragment generado como ubicación temporal donde hacer todos los cambios del DOM que necesitemos, sin que afecten al reflow del documento de forma independiente. Una vez terminemos nuestra lógica y tengamos el DOM definitivo, lo insertamos como hacemos siempre, por ejemplo, con un appendChild (ver más adelante).

Es entonces cuando se traslada todo el DOM del fragmento al lugar donde hemos indicado en el appendChild (*en nuestro ejemplo, a la etiqueta <body>), dejando nuevamente el fragmento vacío.
