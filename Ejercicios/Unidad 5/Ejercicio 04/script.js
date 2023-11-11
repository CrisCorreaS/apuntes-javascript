// Cristina Correa

let ARRAY = [4, 28, 42, 38, 16];
let copia_array = [...ARRAY];

document
  .getElementById("id")
  .addEventListener("mouseover", verMayorAMenor, false);
document.getElementById("id").addEventListener("mouseout", ver, false);

function verMayorAMenor() {
  copia_array.sort((a, b) => b - a);
  document.getElementById("resultado").innerHTML = copia_array.toString();
  document.getElementById("id").innerHTML = "Ver de mayor a menor";
}

function ver() {
  document.getElementById("resultado").innerHTML = `${ARRAY.toString()}`;
  document.getElementById("id").innerHTML = "Ver por orden de aparición";
}
