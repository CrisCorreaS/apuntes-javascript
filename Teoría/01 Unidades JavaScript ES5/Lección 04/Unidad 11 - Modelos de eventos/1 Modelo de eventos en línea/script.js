/*
Antes de empezar a hablar de modelos de eventos, conviene saber qué es un evento.

En la programación tradicional, los programas se ejecutan siguiendo una secuencia de instrucciones que van de arriba a abajo. No obstante, actualmente es posible trabajar con la programación basada en eventos, de manera que ciertas instrucciones se ejecutan en el momento que ocurre algo: un evento.

Javascript admite los dos tipos de métodos de programación. Hasta ahora habíamos trabajado la programación tradicional; ahora nos adentraremos en el mundo de los eventos.

Hay muchos tipos de eventos en Javascript, normalmente asociados a las acciones que realiza un usuario mientras interactúa con el ordenador mediante el ratón o el teclado; aunque hay otros eventos que se ejecutan automáticamente, como el evento “onload”, que sucede cuando termina de cargarse una página web. Podéis ver un listado con todos los eventos en Mozilla MDN Web Docs.

En esta lección vamos a ver el modelo de eventos en línea, o también conocido como eventos en atributos HTML. Es el modo más sencillo y menos profesional o recomendado de indicar qué código debe ejecutarse cuando se produzca un evento; dicho código se asocia a un atributo del elemento HTML.

Un ejemplo sería el siguiente, en que se muestra una ventana de diálogo al pulsar un botón:

    <input type="button" value="¡Haz clic sobre mí!" onclick="alert('¡Hola, caracola!');" />

Veamos cómo funciona este modelo de eventos con varios ejemplos, entre ellos el extensamente utilizado “onload” en la etiqueta <body>. ¡Pero recuerda, este no es el método más recomendable!
*/

/*
Este modelo no es recomendado utilizarlo ya que mezcla html con js si ponemos el js
embebido en el html con la etiqueta <script> o directamente en el evento.
*/

/*
EVENTO:
Mecanismo que se acciona cuando el usuario realiza un cambio sobre la página
Capturar un evento es programar una accion para que se realice una tarea
El encargado de gestionar los eventos es el DOM (Document Object Model)

MANEJADOR:
Acción que se va a manejar. Por ejemplo, en el evento click (hacer click con el ratón) el manejador es onClick

Más info: https://www.w3schools.com/tags/ref_eventattributes.asp
*/

/*
MODELO DE REGISTRO DE EVNETOS EN LÍNEA:
Cada elemento HTML tiene sus posibles eventos como propiedades, es decir, puede tener como propiedades los atributos "id" o "value" de una etiqueta html, pero también puede tener como propiedades todos los eventos: onclick, onload, onmouseover, onmouseout...
Entonces, decimos que: 
- Cada elemento HTML tiene sus posibles eventos como propiedades: puede tener un evento de cada tipo
- El nombre del evento es "on" seguido de la acción


Manejadores -> atributo de una etiqueta HTML
*/

//Esta parte se puede hacer internamente en el html con una etiqueta <script></script> pero no es lo idóneo, ya que es buena práctica separar el html del css y js

/*
FUNCIÓN EXTERNA QUE UTILIZA EL MANEJADOR DE H3:

Con esta función "cambiar(elementoH3)", hacemos que desde el js se cambie el elemento h3:

<h3 onclick="cambiar(this)">Al hacer click cambia el texto con JS</h3>

Vemos que la etiqueta llama a nuestra función con el onclick y se pasa entre paréntesis
a sí misma (con "this"). La función cambiar, ponemos que se le pasa un parámetro,
no es necesario hacer un let elementoH3, ya que es la propia etiqueta al hacer
cambiar(this), la cual ya se mete a sí misma como parámetro de la función.

Lo que sí, es muy importante poner un parámetro dentro de la función cambiar en el js
ya que si no, la firma de la función sería diferente y por ende, no sería la
función cambiar que necesita un parámetro (y la cual está llamando la etiqueta h3),
sino que sería la función cambiar que no necesita parámetros.

Tampoco es necesario el return, porque estamos trabajando directamente sobre la etiqueta
*/
function cambiar(elementoH3) {
    elementoH3.innerHTML = "El texto ha cambiado";
}

/*
Hay algunas acciones que desencadenan varios eventos.
- Cuando pulsamos un botón de tipo submit de un formulario, se ejecutan automáticamente los eventos:
    - onmousedown
    - onclick
    - onmouseup
    - onsubmit

Todos estos eventos tienen asociadas acciones, por ejemplo, al ser un elemento un botón 
de enviar formulario, este envía el formulario de la página a la página que nosotros 
hayamos  indicado en "from" (está configurado por defecto). Para evitar que ocurra esto, 
podemos escribir un return false al final del código en html y así poder personalizar 
nuestro código
*/

function alertar() {
    alert("Vamos a Google");
}

function preguntar() {
    return confirm("¿Deseas ir a Google?");
}
/*
Esta función para que funcione verdaderamente bien y que, si decimos "Cancelar" una vez
nos pregunte si deseamos ir a Google, no nos redirija a Google, tenemos que añadir el
"return".

Si no ponemos un "return", no se le devuelve al código HTML el valor boolean (true o false)
que devuelve la función confirm al "Aceptar" o "Cancelar", por lo que no puede interpretar
la opción que elegimos y siempre nos llevará a Google (tanto eligiendo una opción u otra).

Es importante tener en cuenta que un "return" puede o no, modificar todo el comportamiento
de nuestro evento
*/



/*
EVENTO onload:

Este evento nos permite indicarle a la página que no cargue ningún javascript hasta que
no haya cargado todo el html.

Para esto, tenemos que escribir en el html lo siguiente:

<body onload="funcion_ejecutar">
*/