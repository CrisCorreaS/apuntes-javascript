/*
En este script veremos un ejemplo en el que utilizaremos use strict para comprobar cómo funcionan los ámbitos tanto de bloque como de función, y cómo cambia el resultado si trabajamos con var o con let.

Recuerda que la expresión literal del modo estricto se define de la siguiente manera al comienzo de un script o una función:
"use strict";
*/

/*
ÁMBITO DE VARIABLES

El ámbito de una variable (scope) es la zona del programa en la que se define
Javascript define dos ámbitos para variables: local y global
Mediate "var" podemos definir como ámbito local el ámbito de una función
Con "let", por el contrario, podemos diferenciar también el ámbito de bloque


El ámbito de una variable es la zona del programa en la que la variable puede trabajar
Hasta la versión 5 de js, cuando hablábamos del ámbito de js, hablábamos de ámbito local y global.
Cuando incorporamos "let" a nuestro lenguaje de programación, en el ámbito local se incorpora un concepto nuevo que es el ámbito de bloque.
Un bloque de programación es tolo que está entre llaves ({}). Ej: bloque if, bloque while...
*/

//EJEMPLO 1:

//Trabajamos con let:
function ambito1() {
  ("use strict");
  let a = "Ámbito de función";
  if (true) {
    let a = "Ámbito de bloque";
    console.log("El ámbito del bloque 'a' es:" + a); //El ámbito del bloque 'a' es:Ámbito de bloque
  }
  console.log("El ámbito de función 'a' es " + a); //El ámbito de función 'a' es Ámbito de función
}

ambito1();


//Trabajamos con var:
function ambito2() {
  ("use strict");
  var a = "Ámbito de función";
  if (true) {
    var a = "Ámbito de bloque";
    console.log("El ámbito del bloque 'a' es:" + a); //El ámbito del bloque 'a' es:Ámbito de bloque
  }
  console.log("El ámbito de función 'a' es " + a); //El ámbito de función 'a' es Ámbito de bloque -> Aquí vuelve a ser ámbito de bloque en vez de ser ámbito de función como con let
}

ambito2();


//EJEMPLO 2:

//Trabajamos con var:
function ambito3() {
  ("use strict");
//   var a = "Ámbito de función"; -> si comentamos esto, aunque no haya variable "var a" dentro de la función pero sí dentro del if, va a pasar lo siguiente
  if (true) {
    var a = "Ámbito de bloque";
    console.log("El ámbito del bloque 'a' es:" + a); //El ámbito del bloque 'a' es:Ámbito de bloque
  }
  console.log("El ámbito de función 'a' es " + a); //El ámbito de función 'a' es Ámbito de bloque -> Aquí vuelve a ser ámbito de bloque en vez de ser ámbito de función como con let. Incluso si var está solo dentro del if
}

ambito3();

//Trabajamos con let:
function ambito4() {
  ("use strict");
//   let a = "Ámbito de función"; -> si comentamos esto, pero usamos let dentro del if, nos dará un error
  if (true) {
    let a = "Ámbito de bloque";
    console.log("El ámbito del bloque 'a' es:" + a); //El ámbito del bloque 'a' es:Ámbito de bloque
  }
  console.log("El ámbito de función 'a' es " + a); //Da un error: script.js:76  Uncaught ReferenceError: a is not defined at ambito4 
}
    
ambito4();