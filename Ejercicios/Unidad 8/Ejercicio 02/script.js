$(document).ready(function () {
  const ZONA_DIBUJO = $("#zonadibujo");
  const COLORES_PALETA = $("#paleta tr:first-child td");
  const TEXTO_PINCEL = $("#pincel");

  let numeroLineas = 30;
  let numeroColumnas = 30;
  let anchoCelda = 10;
  let altoCelda = 10;
  let colores = ["color1"];
  let contadorClicks = 0;

  function pintar() {
    const CELDAS = $("#tablaNueva td");
    let pincelActivado = false;

    CELDAS.on("click", function () {
      if (colores.length == 0) {
        $(this).removeClass();
      } else {
        $(this).addClass(colores[colores.length - 1]);
      }

      contadorClicks++;
      pincelActivado = !pincelActivado;
    });

    CELDAS.on("mouseover", function () {
      if (pincelActivado && contadorClicks == 1) {
        $(this).removeClass();

        if (colores.length > 0) {
          $(this).addClass(colores[colores.length - 1]);
        }
      } else {
        pincelActivado = false;
        contadorClicks = 0;
      }
    });
  }

  COLORES_PALETA.on("click", function () {
    COLORES_PALETA.removeClass("seleccionado");

    if ($(this).is(COLORES_PALETA.last())) {
      TEXTO_PINCEL.html("PINCEL DESACTIVADO");
      colores = [];
    } else {
      TEXTO_PINCEL.html("PINCEL ACTIVADO");
      colores.push($(this).attr("class"));
    }

    $(this).addClass("seleccionado");
  });

  function crearZonaDibujo() {
    let tabla = $("<table>").addClass("tablaCreada").attr("id", "tablaNueva");

    for (let i = 1; i <= numeroLineas; i++) {
      let fila = $("<tr>").addClass("tablaCreada");

      for (let j = 1; j <= numeroColumnas; j++) {
        let celda = $("<td>")
          .css({ width: anchoCelda + "px", height: altoCelda + "px" })
          .addClass("tablaCreada");

        fila.append(celda);
      }

      tabla.append(fila);
    }

    ZONA_DIBUJO.append(tabla);

    pintar();
  }

  crearZonaDibujo();
});
