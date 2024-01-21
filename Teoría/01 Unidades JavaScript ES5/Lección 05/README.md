# 📚 Apuntes sobre el DOM:
> [!NOTE]
> ### Índice:
> - **[Qué es el DOM](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#-qu%C3%A9-es-el-dom)**
>   - [El objeto document](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#el-objeto-document)
>   - [API nativa de Javascript](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#api-nativa-de-javascript)
> - **[ Seleccionar elementos del DOM](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#-seleccionar-elementos-del-dom)**
>   - [Métodos tradicionales](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#m%C3%A9todos-tradicionales)
>   - [Métodos modernos](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#m%C3%A9todos-modernos)
>   - [Búsquedas acotadas](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#b%C3%BAsquedas-acotadas)
>   - [NodeList o HTMLCollection](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#nodelist-o-htmlcollection)
> - **[Crear elementos en el DOM](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#-crear-elementos-en-el-dom)**
>   - [Usando fragmentos](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#usando-fragmentos)
> - **[Gestionar atributos del DOM](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#-gestionar-atributos-del-dom)**
>   - [¿Qué es un atributo HTML?](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#qu%C3%A9-es-un-atributo-html)
>   - [Acceder a atributos HTML](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#acceder-a-atributos-html)
>   - [Obtener atributos HTML](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#obtener-atributos-html)
>   - [Modificar o eliminar atributos HTML](https://github.com/CrisCorreaS/practica-js/blob/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005/README.md#modificar-o-eliminar-atributos-html)
>   - [Caso especial: Atributos booleanos](https://github.com/CrisCorreaS/practica-js/blob/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005/README.md#caso-especial-atributos-booleanos)
> - **[La API classList de Javascript](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#-la-api-classlist-de-javascript)**
>   - [La propiedad .className](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#la-propiedad-classname)
>   - [La propiedad .classList](https://github.com/CrisCorreaS/practica-js/tree/main/Unidades%20JavaScript%20ES5/Lecci%C3%B3n%2005#la-propiedad-classlist)
> - **[Contenido en el DOM]()**
>   - []()
> - []()
>   - []()
> - []()
>   - []()
> - []()
>   - []()


> [!TIP]
> Enlaces con información y vídeos para apoyar y complementar los apuntes:
> - Links:
>   - [W3Schools JS HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
>   - [HTMLCollection vs NodeList by freeCodeCamp](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/)
>   - [WebComponents de ManzDev](https://lenguajejs.com/webcomponents/)
>   - [W3Schools HTML DOM Element classList](https://www.w3schools.com/jsref/prop_element_classlist.asp)
> - Vídeos:
>   - [Diferencias entre getElementById vs querySelector (y otros métodos del DOM) de ManzDev](https://www.youtube.com/watch?v=EiKYr5vjs48)
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
| [.querySelector("sel")](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) |	Busca el primer elemento que coincide con el selector CSS "sel" |	El primer elemento|	Devuelve null|
| [.querySelectorAll("sel")](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) |	Busca todos los elementos que coinciden con el selector CSS "sel" |	NodeList |	Devuelve []|
 
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
| [.createElement("tag", "options")](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) |	Crea y devuelve el elemento HTML definido por el String tag.| Elemento |
| [.createComment("text")](https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment)	|Crea y devuelve un nodo de comentarios HTML <!-- text -->| Nodo de tipo Comentario |
| [.createTextNode("text")](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)	|Crea y devuelve un nodo HTML con el texto text| Nodo de tipo Texto|
| [.cloneNode("deep")](https://developer.mozilla.org/es/docs/Web/API/Node/cloneNode)	|Clona el nodo HTML y devuelve una copia. deep es false por defecto|Duplicado del nodo que lo llamó|
| [.isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)|	Indica si el nodo HTML está insertado en el documento HTML|Boolean|

Para empezar, nos centraremos principalmente en la primera, que es la que utilizamos para crear elementos HTML en el DOM.

#### Creando elementos con createElement()
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

> [!NOTE]
> Ten presente que en los ejemplos que hemos visto estamos creando los elementos en una constante, pero de momento no los hemos añadido al documento HTML, por lo que no aparecerían visualmente. Más adelante veremos como añadirlos.

#### El método .cloneNode()
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

#### La propiedad .isConnected
La propiedad ``isConnected`` nos indica si el elemento en cuestión está conectado al DOM, es decir, si está insertado en el documento HTML:
- Si devuelve **true**, significa que el elemento está conectado al DOM.
- Si devuelve **false**, significa que el elemento no está conectado al DOM.
- 
Hasta ahora, hemos creado elementos que no lo están (permanecen sólo en memoria). En el capítulo Insertar elementos en el DOM veremos como insertarlos en el documento HTML para que aparezca visualmente en la página.

### Usando fragmentos
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

## 📖 [Gestionar atributos del DOM](https://lenguajejs.com/javascript/dom/atributos-del-dom/)
### ¿Qué es un atributo HTML?
Las etiquetas HTML tienen ciertos atributos que definen el comportamiento de la etiqueta. Existen atributos comunes a todas las etiquetas HTML, y atributos que sólo existen para determinadas etiquetas HTML. El orden de los atributos en HTML no es importante, da igual que este primero o segundo, no influye en nada.

Además, un atributo puede tener un valor o ser un atributo booleano, es decir, simplemente estar presente y no tener ningún valor indicado (si un atributo booleano no tiene ningún valor pero está presente, es como ponerlo en true ya que lo que importa a la hora de gestionar si es true o false, no es el valor, si no que esté presente o no)

``` 
<div class="container" data-attr="value">
  <button disabled>Avisar</button>
</div>
```
Observa que "class" y "data-attr" son ejemplos de atributos, y "container" y "value" son sus correspondientes valores. Por otro lado, "disabled" es un atributo booleano (no tiene valor, pero al estar presente, ese atributo es true).

### Acceder a atributos HTML
En general, una vez tenemos un elemento sobre el que vamos a crear algunos atributos, lo más sencillo es asignarle valores como propiedades de objetos, pero también se pueden eliminar y jugar con eso.

```
const element = document.querySelector("div");   // <div class="container"></div>

element.id = "page";           // <div id="page" class="container"></div>
element.style = "color: red";  // <div id="page" class="container" style="color: red"></div>
element.className = "data";    // <div id="page" class="data" style="color: red"></div>
element.id = "";               // <div id="" class="data" style="color: red"></div> -> Eso es como quitarle el "id"
```
> [!NOTE]
> Hay que tener en cuenta que algunos casos como el del último ejemplo, se indica className en lugar de class. Esto ocurre porque es una palabra reservada para las clases de Javascript, como también ocurre con for para los bucles, etc.

> [!TIP]
> Aunque es posible asignar a la propiedad className varias clases en un String separadas por espacio, recomendamos utilizar la propiedad classList para manipular clases CSS

### Obtener atributos HTML
Aunque la forma anterior es la más rápida, tenemos algunos métodos para obtener los atributos HTML de forma clara y literal, sin problemas como los de className:

|Métodos |	Descripción| Devuelve |
|-----------------------|------------------|------------------|
| [hasAttributes()](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes) |	Indica si el elemento tiene atributos HTML| Boolean |
| [hasAttribute("attr")](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute) |	Indica si el elemento tiene el atributo HTML "attr"| Boolean|
| [getAttributeNames()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames) |	Devuelve un Array con los atributos del elemento|Array|
| [getAttribute(attr)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) |	Devuelve el valor del atributo attr del elemento o null si no existe|Valor del atributo o null|

> [!CAUTION]
> Es muy fácil equivocarse cuando están ``hasAttributes()`` y ``hasAttribute("attr")``, para diferenciarlos piensa que el plural es para saber si existen uno o varios atributos; mientras el que está en singular, se usa para ver si el atributo pasado como parámetro está o no en el elemento.

En los dos primeros casos, podemos utilizar ``hasAttributes()`` o ``hasAttribute("attr")`` para saber que atributos HTML tiene definidos una etiqueta. Por otro lado, el método ``getAttributeNames()`` nos devuelve la lista de atributos que tiene una etiqueta, y el método ``getAttribute("attr·)`` nos da el valor que tiene un atributo HTML específico.

Consideremos el siguiente HTML:

```
<div id="page" class="info data dark" data-number="5"></div>
```

Vamos a aplicar las siguientes lineas de Javascript, trabajando con ese elemento:

```
const element = document.querySelector("#page");

element.hasAttributes();              // true (tiene 3 atributos)
element.hasAttribute("data-number");  // true (data-number existe)
element.hasAttribute("disabled");     // false (disabled no existe)

element.getAttributeNames();          // ["id", "data-number", "class"]
element.getAttribute("id");           // "page"
```

Como puedes ver, es muy sencillo de utilizar.

### Modificar o eliminar atributos HTML
Por otro lado, tenemos algunos métodos para modificar atributos HTML existentes, o directamente, eliminarlos:

|Métodos |	Descripción| Devuelve |
|-----------------------|------------------|------------------|
|[setAttribute("attr", "value")](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) |	Añade o cambia el atributo "attr" al valor value del elemento HTML|void, solo realiza la acción|
|[toggleAttribute("attr", "force")](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute) |	Añade atributo attr si no existe, si existe lo elimina|void, solo realiza la acción|
|[removeAttribute("attr")](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) |	Elimina el atributo attr del elemento HTML|void, solo realiza la acción|

Estos métodos son bastante autoexplicativos y fáciles de entender, aún así, vamos a ver unos ejemplos de uso donde podemos ver como funcionan. Continuamos con el ejemplo HTML anterior:

```
<div id="page" class="info data dark" data-number="5"></div>
```

Ahora, vamos a modificar sus atributos HTML utilizando dichos métodos. Observa que ``setAttribute()`` puede servir tanto para añadir nuevos atributos que no existían como para modificar los que ya existen:

```
const element = document.querySelector("#page");

element.setAttribute("data-number", "10");   // Cambiar "data-number" a 10
element.removeAttribute("id");               // Elimina el atributo "id"
element.setAttribute("id", "page");          // Vuelve a añadirlo
element.toggleAttribute("disabled");         // Si realizamos una acción, el atributo "disabled" aparece o desaparece
```

> [!CAUTION]
> Tenemos que tener cuidado con ``toggleAttribute()`` y diferenciarlo del método ``toggle()`` de ``classList``. ``toggleAttribute()`` es única y exclusivamente para poner o quitar atributos booleanos de un elementos, mientras que ``classList.toggle()`` lo veremos más adelante pero únicamente se utiliza para cambiar el valor del atributo "class"

Sin embargo, hay un caso especial que es digno de mención.

### Caso especial: Atributos booleanos
Hay que hablar de un caso especial, que es el que comentamos en el que podemos establecer atributos HTML que son Boolean, es decir, que no tienen indicado ningún valor.

Si esto lo hacemos con el método ``setAttribute()`` y le indicamos un booleano, no tendremos exactamente lo que buscamos. Recuerda que los atributos HTML son siempre de tipo String:

```
const button = document.querySelector("button");

button.setAttribute("disabled", true);   // ❌ <button disabled="true">Clickme!</button>
button.disabled = true;                  // ✅ <button disabled>Clickme!</button>
button.setAttribute("disabled", "");     // ✅ <button disabled>Clickme!</button>
```

Por lo tanto, la forma correcta de establecerlos es indicar un String vacío. Automáticamente, el navegador sabrá que una cadena de texto vacía es un booleano y ocultará su valor. Por otro lado, si lo haces mediante una propiedad Javascript, si puedes usar un booleano, y añadirá el atributo HTML automáticamente.

Normalmente, el método .toggleAttribute(attr, force) es más sencillo para estos casos. Añade el atributo que le pasas por parámetro si no existe, y lo elimina si ya existe:

```
button.toggleAttribute("disabled");         // Como ya existe "disabled", lo elimina
button.toggleAttribute("hidden");           // Como no existe "hidden", lo añade
```

Si se le proporciona el Boolean force, si es verdadero: añade el atributo, si es falso: elimina el atributo.

 ## 📖 [La API classList de Javascript](https://lenguajejs.com/javascript/dom/manipular-clases-css/)
En CSS es muy común utilizar múltiples clases CSS para asignar estilos relacionados dependiendo de lo que queramos. Para ello, basta hacer cosas como la que veremos a continuación:

Observa que tenemos un elemento <div> que tiene las siguientes clases:

```
<div class="element shine dark-theme"></div>
```

- La clase element sería la clase general que representa el elemento, y que tiene estilos fijos.
- La clase shine podría tener una animación CSS para aplicar un efecto de brillo.
- La clase dark-theme podría tener los estilos de un elemento en un tema oscuro.

Todo esto se utiliza sin problema de forma estática, pero cuando comenzamos a programar en Javascript, buscamos una forma dinámica, práctica y cómoda de hacerlo desde Javascript.

### La propiedad .className
Javascript tiene a nuestra disposición una propiedad ``.className`` en todos los elementos HTML. Dicha propiedad contiene el valor del atributo HTML class como un String, y puede tanto leerse como reemplazarse:

|Propiedad |	Descripción| Devuelve un Valor |
|-----------------------|------------------|------------------|
| [.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) |	Acceso directo al valor del atributo HTML class. También se puede asignar | String |
| [.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) |	Objeto especial para manejar clases CSS. Contiene métodos y propiedades de ayuda | [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) (muy parecido a un array) |

La propiedad ``.className`` viene a ser la modalidad directa y rápida de utilizar el getter ``.getAttribute("class")`` y el setter ``.setAttribute("class", value)``.

Veamos un ejemplo utilizando estas propiedades y métodos y su equivalencia:

```
const div = document.querySelector(".element");

// Obtener clases CSS
div.className;              // "element shine dark-theme"
div.getAttribute("class");  // "element shine dark-theme"

// Modificar clases CSS
div.className = "element shine light-theme";
div.setAttribute("class", "element shine light-theme");
```

Trabajar con ``.className`` tiene una limitación cuando trabajamos con múltiples clases CSS, y es que no puedes realizar una manipulación sólo en una clase CSS concreta, dejando las demás intactas. Es por eso que, modificar clases CSS mediante una asignación ``.className``, se vuelve poco práctico.

Probablemente, la forma más interesante de manipular clases CSS desde Javascript es mediante la propiedad ``.classList``, que es la que veremos a continuación.

### La propiedad .classList
Para trabajar más cómodamente, existe un sistema muy interesante para trabajar con clases: la propiedad u objeto ``.classList``. Se trata de un objeto especial que contiene una serie de ayudantes que permiten trabajar con las clases de forma más intuitiva y lógica.

Si accedemos a ``.classList``, nos devolverá un Array (no es exactamente un array, sino un [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)) de clases CSS de dicho elemento. Pero además, incorpora una serie de métodos ayudantes que nos harán muy sencillo trabajar con clases CSS:

<table>
      <tr>
        <th>Método</th>
        <th>Descripción</th>
        <th>Devuelve</th>
      </tr>
      <tr>
        <td colspan="3"><b>Obtener información</b></td>
      </tr>
      <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">.classList</a></td>
        <td>Devuelve la lista de clases del elemento HTML</td>
        <td>DOMTokenList (como un array)</td>
      </tr>
      <tr>
        <td>.classList.length</td>
        <td>Devuelve el número de clases del elemento HTML</td>
        <td>Número entero</td>
      </tr>
      <tr>
        <td>.classList.item("n")</td>
        <td>Devuelve la clase número "n" del elemento HTML. null si no existe</td>
        <td>String del nombre de la clase o null</td>
      </tr>
      <tr>
        <td>.classList.contains(clase)</td>
        <td>Indica si la clase existe en el elemento HTML</td>
        <td>Boolean, true si existe y false si no</td>
      </tr>
      <tr>
        <td colspan="3"><b>Acciones sobre clases</b></td>
      </tr>
      <tr>
        <td>.classList.add(c1, c2, ...)</td>
        <td>Añade las clases c1, c2... al elemento HTML.</td>
        <td>Void</td>
      </tr>
      <tr>
        <td>.classList.remove(c1, c2, ...)</td>
        <td>Elimina las clases c1, c2... del elemento HTML.</td>
        <td>Void</td>
      </tr>
      <tr>
        <td>.classList.toggle(clase)</td>
        <td>Si la clase no existe, la añade. Si no, la elimina.</td>
        <td>Void</td>
      </tr>
      <tr>
        <td>.classList.toggle(clase, expr)</td>
        <td>Si expr es true, añade la clase. Si es false, la elimina</td>
        <td>Void</td>
      </tr>
      <tr>
        <td>.classList.replace(old, new)</td>
        <td>Reemplaza la clase old por la clase new</td>
        <td>Void</td>
      </tr>
    </table>
 
Veamos un ejemplo de uso de cada método de ayuda. Supongamos que tenemos el siguiente elemento HTML en nuestro documento. Vamos a acceder a el y a utilizar el objeto .classList con dicho elemento:

```
<div id="page" class="info data dark" data-number="5"></div>
```

Observa que dicho elemento HTML tiene:
- Un atributo "id"
- Tres clases CSS: "info", "data" y "dark"
- Un metadato HTML "data-number" (también es un atributo)

#### Acceder a clases CSS
Al margen de acceder a la lista de clases mediante ``.classList`` y al número de clases del elemento con ``.classList.length``, es posible acceder a la propiedad ``.classList.values`` para obtener un String como lo haría ``.className``:

```
const element = document.querySelector("#page");

// ¿Qué clases tiene?
element.classList;              // ["info", "data", "dark"] (DOMTokenList)
element.classList.value;        // "info data dark" (String)
element.classList.length;       // 3

// Convertirlas a array
Array.from(element.classList)   // ["info", "data", "dark"] (Array)
[...element.classList];         // ["info", "data", "dark"] (Array)

// Consultarlas
element.classList.item(0);      // "info"
element.classList.item(1);      // "data"
element.classList.item(3);      // null
```

El objeto ``.classList`` aunque parece que devuelve un Array no es un array, sino un DOMTokenList que actúa de forma similar a un array, por lo que puede carecer de algunos métodos o propiedades concretos. Si quieres convertirlo a un array real, utiliza ``Array.from()`` o desestructuración con [...div.classList].

Observa que disponemos del método ``.classList.item()`` que nos devuelve un String con la clase específica en esa posición. Si no existe una clase en esa posición, nos devolverá null.

#### Añadir y eliminar clases CSS
Los métodos ``.classList.add()`` y ``.classList.remove()`` permiten indicar una o múltiples clases CSS a añadir o eliminar. Observa el siguiente código donde se ilustra un ejemplo:

```
const element = document.querySelector("#page");

element.classList.add("uno", "dos");
element.classList;  // ["info", "data", "dark", "uno", "dos"]

element.classList.remove("uno", "dos");
element.classList;  // ["info", "data", "dark"]
```

Al utilizar los métodos ``.add()`` o ``.remove()``, en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.

#### Comprobar si existen clases CSS
Con el método ``.classList.contains()`` podemos comprobar si existe una clase en un elemento HTML, ya que nos devuelve un Boolean indicandonos si está presente o no:

```
const element = document.querySelector("#page");

element.classList;                      // ["info", "data", "dark"]
element.classList.contains("info");     // Devuelve `true` (existe esa clase)
element.classList.contains("warning");  // Devuelve `false` (no existe esa clase)
```

Esto puede resultar interesante en algunas situaciones, donde queremos averiguar mediante Javascript si existe una clase.

#### Conmutar o alternar clases CSS
Otro ayudante muy interesante es el del método ``.classList.toggle()``, que lo que hace es añadir o eliminar la clase CSS dependiendo de si ya existía previamente. Es decir, añade la clase si no existía previamente o elimina la clase si existía previamente:

```
const element = document.querySelector("#page");

element.classList; // ["info", "data", "dark"]

element.classList.toggle("info"); // Como "info" existe, lo elimina. Devuelve "false"
element.classList; // ["data", "dark"]

element.classList.toggle("info"); // Como "info" no existe, lo añade. Devuelve "true"
element.classList; // ["info", "data", "dark"]
```

Observa que ``.toggle()`` devuelve un Boolean que será true o false dependiendo de si, tras la operación, la clase sigue existiendo o no. Ten en cuenta que en ``.toggle()``, al contrario que ``.add()`` o ``.remove()``, sólo se puede indicar una clase CSS por parámetro.

#### Reemplazar una clase CSS
Por último, tenemos un método ``.classList.replace()`` que nos permite reemplazar la primera clase indicada por parámetro, por la segunda. Veamos este método en acción:

```
const element = document.querySelector("#page");

element.classList; // ["info", "data", "dark"]

element.classList.replace("dark", "light");       // Devuelve `true` (se hizo el cambio)
element.classList.replace("warning", "error");    // Devuelve `false` (no existe warning)
```

Con todos estos métodos de ayuda, nos resultará mucho más sencillo manipular clases CSS desde Javascript en nuestro código.

## [Contenido en el DOM](https://lenguajejs.com/javascript/dom/contenido-elemento-dom/)
