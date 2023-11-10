/*
for...of es una sentencia que ejecuta un bloque de código para cada uno de los elementos de un objeto iterable como podría ser un String, Array, Map, Set y otros iterables definidos por el usuario
for...in itera sobre las propiedades de un objeto; pero for...of es específica para las colecciones y no para todos los objetos

SINTAXIS:
  for ("variable" of "iterable") {
    sentencia
  }
*/

// SOBRE UN ARRAY
let precios = [100, 250, 500];
for (let valor of precios) { // "valor" es la variable y "precios" el iterable 
    console.log(`Precio sin IVA: ${valor}`);
    valor *= 1.21;
    console.log(`Precio con IVA: ${valor}`);
}
/*
"valor" coge el valor de cada uno de los elementos del iterable

Precio sin IVA: 100
Precio con IVA: 121

Precio sin IVA: 250
Precio con IVA: 302.5

Precio sin IVA: 500
Precio con IVA: 605
*/



// SOBRE UNA CADENA/STRING
let cadena = "Hola, caracola";
for (let letra of cadena) { // "letra" toma el valor de cada letra que compone la cadena
    console.log(`${letra}`);
}
/*
H
o
l
a
,

c
a
r
a
c
o
l
a
*/



// SOBRE UN MAP
let matriculas = new Map([["ZA", "Zamora"], ["SA", "Salamanca"], ["VA", "Valladolid"]]);
for (let matricula of matriculas) { // "matricula" toma el valor de los pares clave-valor del array
    console.log(`${matricula}`);
}
/*
El resultado son Arrays de pares clave-valor
Array["ZA", "Zamora"]
Array["SA", "Salamanca"]
Array["VA", "Valladolid"]
*/

for (let [matricula, provincia] of matriculas) { // "matricula" toma el valor de los elementos clave (ZA, SA, VA) y "provincia" toma el valor de los elementos valor (Zamora, Salamanca, Valladolid)
    console.log(`${matricula}: ${provincia}`);
}
/*
El resultado son Strings
ZA: Zamora
SA: Salamanca
VA: Valladolid
*/



//SOBRE UN SET
let tiradasDado = new Set([1, 3, 6, 2, 1, 6, 6, 7, 3, 3, 9]);

for (let tirada of tiradasDado) { //"tirada" toma el valor de cada uno de los elementos del Set (sin repetidos)
    console.log(`${tirada}`); 
}
/*
1
3
6
2
7 
9
*/
