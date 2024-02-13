/*
En esta lección veremos dónde podemos informarnos de todos los eventos de que dispone jQuery y, además, trabajaremos con algunos de ellos.

En primer lugar veremos cómo funciona .on(), que permite adjuntar uno o más manejadores a uno o más elementos seleccionados. Este método a su vez puede contener una función con o sin parámetros e incluso funciones anónimas: veremos cómo utilizarlo en cada uno de los casos.
También veremos el método .one(), que únicamente permite que el evento se ejecute una única vez para cada elemento de la selección.

Además, trabajaremos con varios eventos asociados al mismo selector utilizando el mismo .on(), que nos permitirá mostrar un código mucho más limpio y comprensible.
A su vez, en caso de que necesitemos eliminar el manejador de eventos asociado a un elemento, utilizaremos el método .off().

Por último veremos qué son .trigger() y .trigglerHandler(), que desencadenan la ejecución del comportamiento por defecto de un método, y la diferencia entre uno y otro
*/

$(document).ready(inicio);

function inicio() {
  // MÉTODOS
  // .on(<evento>, [{<parametros_como_objetos>}], <funcion>)

  // Es muy parecido a los eventos de javascript
  // <selector>.on(<evento>, [{<parametros_como_objetos>}], <funcion>)

  // Evento JS -> document.getElementByTagName("p").addEventListener("click", mensaje);
  $("p").on("click", mensaje); // Evento con jQuery

  function mensaje() {
    alert("Párrafo pulsado");
  }

  // Llamada a una función con parámetros
  $("p").on(
    "click",
    { nombre: "Ada", apellido: "LoveLace" },
    mensajeParametros
  );

  function mensajeParametros(e) {
    // Accedemos a los parámetros con "e.data"
    alert(e.data.nombre + " " + e.data.apellido); // Ada LoveLace
  }

  // Ejecución de una función anónima -> Hacemos referencia al elemento sobre el que hacemos el evento
  $("p").on("click", function () {
    alert($(this).text()); // Nos devuelve el texto que haya dentro del párrafo que estamos pulsando
  });


  // .one() -> El evento se ejecuta una única vez para CADA ELEMENTO de la selección
  $("p").one("click", function () {
    alert("El párrafo " + $(this).text() + " ha sido pulsado por primera vez");
  });


  // Varios eventos asociados al mismo selector
  // .on({<evento1> : <funcion1>, <evento2> : <funcion2> ... })
  $("p").on({
    mouseover: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "red");
    },
    click: function () {
      $(this).css("background-color", "lightgreen");
    },
  });

  
  // Eliminamos el manejador de eventos -> .off()
  // off() -> Elimina los eventos que no se estén ejecutando en ese momento

  // En este caso si pasamos el cursor por encima de todos los párrafos y hacemos click en "quitarEvento" elimina todos los eventos "onClick" y "onMouseover", pero deja los "onMouseleave" porque se siguen ejecutando.
  // Si no pasamos el cursor por encima de los párrafos y hacemos click en "quitarEvento", se quitan todos los eventos porque ninguno se estaba ejecutando
  $("#quitarEvento").click(quitarEvento);

  function quitarEvento() {
    $("p").off();
  }


  // trigger(<evento>) -> Simula la ejecución de un evento (selecciona y ejecuta la simulación)
  // triggerHandler() -> Ejecuta un evento (ejecuta el evento)
  $("#cuenta1").click(function () {
    $("#contador1").text(parseInt($("#contador1").text()) + 1); // Hay que parsearlo porque es una cadena y queremos que se haga una suma
  });

  $("#cuenta2").click(function () {
    $("#contador2").text(parseInt($("#contador2").text()) + 1);

    // Vamos a simular que hacemos click sobre "cuenta1"
    $("#cuenta1").trigger("click");
  });
}
