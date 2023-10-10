//Cristina Correa

function devolverNombreOrdenador() {
  let nombreOrdenador = document.getElementById("nombreOrdenador").value;
  let letra = nombreOrdenador.charAt(nombreOrdenador.length - 1);
  let xxx = nombreOrdenador.replace(/DOC|025P|letra/, "");
  switch (letra) {
    case "A":
      alert("A → 10.42.68." + xxx);
      break;
    case "B":
      alert("B → 10.42.69." + xxx);
      break;
    case "C":
      alert("C → 10.52.178." + xxx);
      break;
  }
}
