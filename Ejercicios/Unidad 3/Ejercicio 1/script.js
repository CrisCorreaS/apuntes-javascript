//Cristina Correa

let hoy = new Date();
let milisegundosHoy = hoy.getTime();

let finDeCurso = new Date(2024,6,22);
let milisegundosFinDeCurso = finDeCurso.getTime();

let milisegundosTotales = milisegundosFinDeCurso - milisegundosHoy;

if (milisegundosTotales < 0) {
  alert("Esa fecha ya ha pasado");
} else if ((milisegundosTotales == 0)) {
  alert("Fin de curso es hoy!!");
} else {
  let diasTotales = milisegundosTotales / (1000*60*60*24);
  alert("Faltan " + Math.round(diasTotales) + " días para el 25 de Junio");
}
