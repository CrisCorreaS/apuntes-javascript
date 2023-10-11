//Cristina Correa

let miVentana;

function crearVentana() {
  miVentana = window.open("", "", "width = 500, height = 200");
  miVentana.document.write("<h1>Mi ventana</h1>");
  setTimeout(cerrarVentana, 3000);
}

function cerrarVentana() {
    miVentana.close();
}