const OPCION = document.querySelector("#opcion");
const ENVIAR = document.querySelector("#enviar");
const TABLA = document.querySelector("#tablaClientes");

let clientes = [];

function obtenerDatosJSON(callback) {
  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.open("GET", "file/cliente.json", true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      let clientesJSON = xhr.response;
      clientes = [...clientesJSON];
      callback(); 
    } else {
      console.log("Error al cargar el archivo:", xhr.statusText);
    }
  };
  xhr.send(null);
}

function ejecutar() {
  obtenerDatosJSON(() => {
    let menuOpcion = OPCION.value;

    switch (menuOpcion) {
      case "1":
        mostrarTodos();
        break;
      case "2":
        mostrarPorLocalidad();
        break;
      case "3":
        mostrarPorCuota();
        break;
      default:
        alert("Has introducido mal la opción");
        break;
    }
  });
}

function mostrarTodos() {
  TABLA.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";
  clientes.forEach((cliente) => {
    let row = TABLA.insertRow();
    row.insertCell(0).innerHTML = cliente.nombre;
    row.insertCell(1).innerHTML = cliente.localidad;
    row.insertCell(2).innerHTML = cliente.cuota;
  });
}

function mostrarPorLocalidad() {
  let localidad = prompt("Introduce la localidad");
  let clientesPorLocalidad = clientes.filter(
    (cliente) => cliente.localidad === localidad
  );
  let tabla = document.getElementById("tablaClientes");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Cuota</th></tr>";
  clientesPorLocalidad.forEach((cliente) => {
    let row = tabla.insertRow();
    row.insertCell(0).innerHTML = cliente.nombre;
    row.insertCell(1).innerHTML = cliente.cuota;
  });
}

function mostrarPorCuota() {
  let cuotaMinima = Number(prompt("Introduce la cuota mínima"));
  let clientesPorCuota = clientes.filter(
    (cliente) => cliente.cuota > cuotaMinima
  );
  TABLA.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";
  clientesPorCuota.forEach((cliente) => {
    let row = TABLA.insertRow();

    row.insertCell(0).innerHTML = cliente.nombre;
    row.insertCell(1).innerHTML = cliente.localidad;
    row.insertCell(2).innerHTML = cliente.cuota;
  });
}

ENVIAR.addEventListener("click", ejecutar, true);
