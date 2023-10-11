// Cristina Correa

let miVentana;
let movimiento;

function crearVentana() {
  miVentana = window.open("", "", "width=500, height=200");
  moverVentana();
}

function pararVentana() {
  clearInterval(movimiento);
}

function eliminarVentana() {
  miVentana.close();
}

function moverVentana() {
  let x = 0;
  let y = 0;
  let direccionX = 10;
  let direccionY = 10;

  movimiento = setInterval(function () {
    if (
      (x + 500 > window.outerWidth || x < 0) &&
      (y + 200 > window.outerHeight || y < 0)
    ) {
      direccionX = -direccionX;
      direccionY = -direccionY;
    }
    x = x + direccionX;
    y = y + direccionY;
    miVentana.moveTo(x, y);
  }, 100);
}
