/*
En esta lección hablaremos del método .animate(), que tiene la siguiente sintaxis:

    $(selector).animate({parametros}, [velocidad], [function_callback])

Donde parámetros definen las propiedades CSS que se quieren modificar; la velocidad, opcional, indica el tiempo que queremos que dure la animación y, como en el caso de los efectos, puede ser “slow”, “fast”, nuestra propia velocidad definida o un número de milisegundos; y la función callback, también opcional, indica la función que debe ser ejecutada una vez que se finaliza la animación.

Es importante entender que las sentencias Javascript se ejecutan una tras otra; pero en el caso de los efectos, la siguiente línea de código puede ejecutarse incluso si el efecto anterior no ha finalizado, por lo que pueden ocurrir errores. Para evitarlo usamos las funciones de callback que se ejecutan después de que el efecto actual haya finalizado.

-> En esta lección trabajaremos también con el método .stop(), que nos permite parar una animación creada en un momento dado. Este método, a su vez incluye dos parámetros opcionales: stopAll, un booleano que indica si queremos parar todos las animaciones de la cola; y goToEnd, que indica si queremos completar la animación actual inmediatamente y por defecto es falso.

Por último, veremos cómo podemos encadenar acciones y métodos para conseguir efectos más largos sin crear varias líneas de código. Hasta ahora habíamos escrito sentencias jQuery una a una, pero podemos encadenar varios métodos jQuery del mismo elemento utilizando una sola sentencia.
*/

$(document).ready(inicio);

function inicio() {
  // ANIMACIONES
  // $(<selector>).animate({<parámetros>}, <velocidad>, <función_callback>)

  $("#animar1").click(function () {
    // Todo esto se ejecuta cuando hacemos click en el botón
    $("#div1").animate({
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "200px",
    }); // Cambia el ancho y el alto y se pone un poco más transparente

    // .delay(<milisegundos>) -> Introduce un retardo
    // Se puede crear un retardo en la animación del "div1"
    $("#div1").delay(2000);

    // Se puede crear ya directamente la animación con el retardo
    // $("#div1").delay(2000).animate({...});

    // Vamos a crear una nueva animación que deje al "div1" como estaba al principio
    $("#div1").animate(
      {
        opacity: "1",
        height: "100px",
        width: "100px",
      },
      "slow"
    );

    // Ahora creamos una animación que aumente dinámicamente el tamaño de letra cada vez que el elemento se anime
    $("#div1").animate(
      {
        fontSize: "+=10",
      },
      2000
    );
  });

  // Parar una animación
  // $(<selector>).stop(<stopAll>, <goToEnd>) -> "stopAll" y "goToEnd" son booleans
  // "stopAll" = parar todas las animaciones
  // "goToEnd" = si queremos ir hasta el final de la animación o si la queremos parar en el punto en el que la paramos
  $("#pararAnimar1").click(function () {
    $("#div1").stop(true, true); // Esto para todas las animaciones de principio a fin y deja el elemento justo como se ha parado la animación
  });


  // Ej otra animación
  $("#animar2").click(function () {
    // Todo esto se ejecuta cuando hacemos click en el botón
    $("#div2").animate({
      left: "250px",
      color: "black",
      height: "350px",
      width: "200px",
    }); // Cambia el ancho y el alto y se pone en negro

    // Creamos un retardo en la animación del "div2"
    $("#div2").delay(50);

    // Vamos a crear una nueva animación que deje al "div2" como estaba al principio
    $("#div2").animate(
      {
        color: "green",
        height: "100px",
        width: "100px",
      },
      "muyRapido"
    );

    $("#div2").animate(
      {
        fontSize: "-=10",
      },
      2000
    );
  });

  $("#pararAnimar2").click(function () {
    $("#div1").stop(true, false); // Esto para todas las animaciones de principio a fin y deja el elemento justo como debería de estar cuando acaba de animarse
  });



  // FUNCIONES CALLBACK -> Se ejecutan cuando terminamos lo que estamos haciendo. Ej: después de una animación se ejecuta x función
  $("#callback").click(function () {
    $("p").hide(1000, function () {
      // esta es la función callback, que se ejecuta después de que el párrafo se haya ocultado
      alert("El párrafo se ha ocultado");
    });
  });

  /*
  Es lo mismo hacer:

  $("#callback").click(function () {
    $("p").hide(1000);
    alert("El párrafo se ha ocultado");
  })
  */


  // ENCADENAMIENTO DE EFECTOS
  $("#encadenar").click(function () {
    $("p").css("color", "green").hide(2000).delay(500).show(2000);

    // Le cambiamos el color al párrafo, lo ocultamos, esperamos 500ms y lo enseñamos
  });


  // OTROS EFECTOS:
  // queue(), dequeue() y clearQueue
}
