const ZONA_DIBUJO = document.querySelector("#zonadibujo");
const COLORES_PALETA = document.querySelectorAll("#paleta tr:first-child td");
const TEXTO_PINCEL = document.querySelector("#pincel");

let numeroLineas = 30;
let numeroColumnas = 30;
let anchoCelda = 10;
let altoCelda = 10;
let colores = ["color1"];
let contadorClicks = 0; // Esta es una forma más arcaica de hacer lo mismo que con "pincelActivado"

function pintar() {
  const CELDAS = document.querySelectorAll("#tablaNueva td");
  let pincelActivado = false;

  CELDAS.forEach((celda) => {
    celda.addEventListener(
      "click",
      () => {
        if (colores.length == 0) {
          celda.className = "";
        } else {
          celda.classList.add(colores[colores.length - 1]);
        }

        contadorClicks++;
        pincelActivado = !pincelActivado;
      },
      false
    );

    celda.addEventListener(
      "mouseover",
      () => {
        if (pincelActivado && contadorClicks == 1) { // Primero haz el evento y luego ya harás las comprobaciones
          celda.className = "";

          if (colores.length > 0) {
            celda.classList.add(colores[colores.length - 1]);
          }
        } else {
          pincelActivado = false;
          contadorClicks = 0;
        }
      },
      false
    );
  });
}

COLORES_PALETA.forEach((color) => {
  color.addEventListener(
    "click",
    () => {
      COLORES_PALETA.forEach((color) => {
        color.classList.remove("seleccionado");
      });

      if (
        COLORES_PALETA[COLORES_PALETA.length - 1].className === color.className
      ) {
        TEXTO_PINCEL.innerHTML = "PINCEL DESACTIVADO";
        colores = [];
      } else {
        TEXTO_PINCEL.innerHTML = "PINCEL ACTIVADO";
        colores.push(color.className);
      }

      color.classList.add("seleccionado");
    },
    false
  );
});

function crearZonaDibujo() {
  let tabla = document.createElement("table");
  tabla.classList.add("tablaCreada");
  tabla.id = "tablaNueva";

  for (let i = 1; i <= numeroLineas; i++) {
    let fila = document.createElement("tr");

    fila.classList.add("tablaCreada");

    for (let j = 1; j <= numeroColumnas; j++) {
      let celda = document.createElement("td");

      celda.style.width = anchoCelda + "px";
      celda.style.height = altoCelda + "px";
      celda.classList.add("tablaCreada");

      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  ZONA_DIBUJO.appendChild(tabla);

  pintar();
}

crearZonaDibujo();
