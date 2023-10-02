/*
En esta lección empezamos a ver los objetos del navegador (BOM -> Browser Object Model). Concretamente empezamos por uno de los más importantes: Window. El objeto window representa la ventana que tiene un documento DOM.

El objeto window tiene una serie de propiedades que veremos a continuacion:
    -name: representa el nombre de la ventana.
    -outerWidth y outerHeight: son el ancho y alto de la ventana incluyendo la barra de herramientas y la de scroll.
    -innerWidth e innerHeight: similar a los anteriores pero sin incluir la barra de herramientas ni la de scroll.
    -pageXOffset y pageYOffset: nos indica dónde se encuentra situado el scroll horizontal y vertical, respectivamente.
    -screenX y screenY: permite conocer la distancia de la ventana desde la izquierda y desde arriba respectivamente.

También hay una serie de propiedades con iframes y con otras ventanas que nos van a resultar muy de utilidad para poder conocer el estado de la ventana, quién la creó, etc. Son:
    -frames: devuelve todos los iframe de la ventana.
    -frameElement: devuelve el frame en el que está insertada la ventana.
    -length: devuelve el número de frames que tiene la ventana.
    -closed: devuelve un booleano que indica si la ventana está cerrada.
    -opener: devuelve la referencia de la ventana que creó la ventana actual.
    -parent: devuelve la ventana padre de la actual.
    -self: devuelve la ventana actual

Además, dentro de window se encuentran otros objetos del navegador que veremos más adelante:
    -window.document.
    -window.navigator.
    -window.screen.
    -window.history.
    -window.location.

Estas propiedades son las que veremos en el vídeo, y dejaremos los métodos para la siguiente lección.
*/

/*
CARACTERÍSTICAS:
    -Representa una ventana abierta en un navegador
    -Si una ventana tiene etiquetas de tipo <iframe> el navegador crea un objeto window para el html inicial y uno para cada <iframe>
    -Todos los objetos, funciones, variables... que contiene una ventana, son miembros del objeto window: las funciones son sus métodos, las variables globales y el DOM (Modelo de Objetos del Documento) son sus propiedades
    -No todos lo métodos sirven para todos los navegadores: hay que comprobar la compatibilidad
*/

//PROPIEDADES BÁSICAS DE WINDOW
//Nombre de la ventana
window.name = "Mi ventana"; //Así le asignamos un nombre a la ventana con la que trabajamos
var texto = "";
texto += "<br/> Nombre: " + window.name; //Mi ventana

//Tamaño de la ventana con toolbar y scrollbar -> barra de herramientas de una ventana
texto += "<br/> Ancho externo: " + window.outerWidth; //585 -> Devuelve el número de píxeles
texto += "<br/> Alto externo: " + window.outerHeight; //720 -> Devuelve el número de píxeles

//Tamaño de la ventana sin toolbar ni scrollbar
texto += "<br/> Ancho interno: " + window.innerWidth; //521 -> Devuelve el número de píxeles
texto += "<br/> Alto interno: " + window.innerHeight; //629 -> Devuelve el número de píxeles

//Scroll horizontal y vertical
texto += "<br/> Scroll horizontal: " + window.scrollX; //0 -> Devuelve el número de píxeles en los que se encuentra el scroll
texto += "<br/> Scroll vertical: " + window.scrollY; //0 -> Devuelve el número de píxeles en los que se encuentra el scroll

//Distancia a la que está la ventana de la esquina superior izquierda
texto += "<br/> Distancia desde la izquierda: " + window.screenX; //-160 -> Devuelve el número de píxeles 
texto += "<br/> Distancia desde arriba: " + window.screenY; //-969 -> Devuelve el número de píxeles

/*
Al hacer el siguiente código, me daba al principio un error -> Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
Y eso era debido a que no se encontraba el elemento con id = "ventana", y aunque estuviera en el html no se encontraba
porque yo cargaba el js en el head, por lo que no se recorría el documento viendo el id = "ventana", una vez que cambié
la etiqueta del <script> al final del body, lo pude solucionar.
*/
var elemento = document.getElementById("ventana");
if (elemento) {
  elemento.innerHTML = texto;
} else {
  console.log('El elemento con id "ventana" no fue encontrado');
}

/*PROPIEDADES CON IFRAMES:
    -frames: devuelve todos los elementos iframe de la ventana
    -frameElement: devuelve el frame en el que la ventana está insertada
    -length: devuelve el número de frames que tiene la ventana
*/

/*PROPIEDADES CON OTRAS VENTANAS:
    -closed: devuelve un boolean, si la ventana está cerrada es true
    -opener: devuelve una referencia con la ventana que creó la ventana actual -> abridor de la ventana
    -parent: devuelve la ventana padre de la ventana actual
    -self: devuelve la ventana actual
*/

/*OTROS OBJETOS DEL NAVEGADOR:
El objeto Window es el objeto padre por excelencia, de window cuelgan una serie de objetos como son los
objetos del navegador. Así que podemos sacar los otros objetos del navegador haciendo lo siguiente:
    -window.document -> Document
    -window.navigator -> Navigator
    -window.screen -> Screen
    -window.history -> History
    -window.location -> Location

*No necesitamos ponerlos así, podemos hacer un: document.write() sin poner window.document.write()
porque el window está implícito. Y eso no solo pasa con los objetos, también pasa con los métodos,
el método alert() lo solemos utilizar sin window porque está implícito pero se podría poner window.alert()
*/