/*
Damos por finalizado este curso de jQuery en el que veremos cómo trabajar con AJAX en esta biblioteca. Si quieres saber qué es AJAX y cómo utilizarlo en Vanilla Javascript (Javascript puro) te recomiendo que eches un ojo al curso de Javascript VI. Mecanismos de comunicación asíncrona.

En primer lugar, veremos la sintaxis de $.ajax(), que a su vez dispone de una serie de parámetros entre los que destacan:
- url: a la que realizamos la petición.
- data: datos a enviar como objeto o cadena.
- success: función de respuesta si la petición ha ido correcta.
- error: función de respuesta si la petición ha fallado.

Además, veremos otros métodos basados en $.ajax() pero que disponen de parámetros ya establecidos por defecto, como son:
- $.get(): solicita datos del servidor utilizando una petición HTTP GET, para lo que necesita una URL y, opcionalmente, una función de callback.
- $.post(): solicita datos del servidor utilizando una petición HTTP POST, que también necesita una URL, y opcionalmente datos y una función de respuesta.

Por último, veremos los siguientes métodos que nos serán muy útiles a la hora de cargar información de manera asíncrona en nuestra página web:
- $.getScript(), que obtiene y ejecuta un script de Javascript utilizando una petición AJAX de itpo HTTP GET.
- $.getJSON(), que obtiene un fichero JSON utilizando una petición AJAX de itpo HTTP GET.
- $.load(), que carga datos de un servidor y los coloca en el elemento seleccionado.
*/

$(document).ready(inicio);

function inicio() {
  // Haciéndolo con AJAX
  $("#ajax").click(function () {
    let nom = $("#nombre").val();
    let ape = $("#apellido").val();

    let parametros = {
      nombre: nom,
      apellido: ape,
    };

    // Ahora hacemos la parte de ajax con $.ajax
    // $.ajax -> Tiene un conjunto completo de parámetros
    $.ajax({
      url: "saludo.php", // URL donde realizamos la petición
      data: parametros, // Datos a enviar, como objeto o como cadena
      success: function (respuesta) {
        // Función si la petición ha ido bien. Si la petición (ajax) devuelve datos, estos datos van a ir metidos en "respuesta"
        $("#mostrar").text(respuesta);
      },
      error: function (xhr, status) {
        // Función si la petición ha fallado
        alert("Ha ocurrido un error");
      },
      complete: function (xhr, status) {
        // Ocurre al final de todo, da igual si la petición ha ido bien o no
        alert("Petición realizada");
      },

      // Otras opciones: beforeSend, async, cache, context, headers...
    });
  });

  // Otros métodos: basados en $.ajax pero tienen parámetros establecidos por defecto
  $("#enviarGet").click(function () {
    $.get(
      "saludo.php",
      {
        nombre: "Ada",
        apellido: "LoveLace",
      },
      function (respuesta) {
        $("#mostrar").text(respuesta);
      }
    );
  });

  // Otra forma
  $("#enviarGetMensajes").click(function () {
    // Función que no envía nada y controla diferentes resultados de la solicitud
    $.get("saludo.php", function () {
      alert("Exito");
    })
      .done(function () {
        alert("Exito 2");
      })
      .fail(function () {
        alert("Error");
      })
      .always(function () {
        alert("Siempre");
      });
  });

  $("#enviarPost").click(function () {
    //Función que envía datos pero no devuelve nada
    $.post("saludo.php", {
      nombre: "Ada",
      apellido: "Lovelace",
    });

    //Función que no envía datos pero recibe respuesta
    $.post("holamundo.php", function (respuesta) {
      alert("Respuesta: " + respuesta);
    });

    //Función que envía datos y recibe respuesta
    $.post("saludo.php", {
      nombre: "Ada",
      apellido: "Lovelace",
    }).done(function (respuesta) {
      alert("Respuesta: " + respuesta);
    });
  });

  //Añade un script y ejecuta una función del script
  $("#getScript").click(function () {
    $.getScript("script.js", function () {
      dentroScript();
    });
  });

  //Obtiene un JSON desde el servidor
  $("#getJSON").click(function () {
    $.getJSON("json.php", function (respuesta) {
      $.each(respuesta, function (clave, valor) {
        alert(clave + " : " + valor);
      });
    });
  });

  //Carga datos del servidor y el HTML lo introduce en un elemento
  $("#load").click(function () {
    $("#mostrar").load("holamundo.php", function () {
      alert("Se ha cargado holamundo.php en #mostrar");
    });
  });
}
