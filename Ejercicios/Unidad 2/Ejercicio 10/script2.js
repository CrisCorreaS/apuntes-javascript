let jugadora = prompt("Por favor, introduce el nombre de la jugadora");

const jugadorasConvocadas = [ //Array de jugadoras convocadas
  "Luisa",
  "Maria",
  "Carlota",
  "Ana",
  "Martina",
  "Claudia",
];

if (jugadorasConvocadas.includes(jugadora)) { //Usamos el método includes() de los arrays que devuelve un boolean
  alert(jugadora + " está convocada");
} else {
  alert(jugadora + " no está convocada");
}
