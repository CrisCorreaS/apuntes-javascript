//Cristina Correa

class Cliente {
  constructor(nombre, localidad, cuota) {
    this.nombre = nombre;
    this.localidad = localidad;
    this.cuota = cuota;
  }
}

let clientes = [
  new Cliente("Laura", "Santander", 50),
  new Cliente("Álvaro", "Castro", 50),
  new Cliente("Igor", "Castro", 60),
  new Cliente("Ivan", "Santander", 40),
  new Cliente("Mónica", "Zamora", 30),
  new Cliente("Javi", "Bilbao", 30),
  new Cliente("David", "Bilbao", 50),
];

function mostrarTodos() {
  let tabla = document.getElementById("tablaClientes");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";
  clientes.forEach((cliente) => {
    let row = tabla.insertRow();
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
  let tabla = document.getElementById("tablaClientes");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>";
  clientesPorCuota.forEach((cliente) => {
    let row = tabla.insertRow();
    row.insertCell(0).innerHTML = cliente.nombre;
    row.insertCell(1).innerHTML = cliente.localidad;
    row.insertCell(2).innerHTML = cliente.cuota;
  });
}
