/* 
El objeto nativo Math tiene propiedades y métodos para constantes y funciones matemáticas. En esta lección veremos las propiedades y tres de los métodos más utilizados.

***Se diferencia de los demás objetos nativos en que no puede editarse, es decir, los métodos y propiedades del objeto nativo Math son estáticos.

Veremos Math.PI, que contiene el número Pi; veremos la utilidad del método Math.random(), que genera números aleatorios; y Math.max() junto con Math.min() que seleccionan el mayor o menor de una lista de valores.
*/

/* CARACTERÍSTICAS:
    -Permite realizar operaciones matemáticas
    -No es un constructor: NO usamos var x = new Math();
    -Ejemplo: var pi = Math.PI; var raiz = Math.sqrt(36);
    -Todas las propiedades tienen que ir en mayúscula
*/

//PROPIEDADES:
// E = Número e
var e = Math.E;
alert("El número e = " + e);

// LN2 = Logaritmo neperiano de 2
var ln2 = Math.LN2;
alert("El logaritmo neperiano de 2 = " + ln2);

// LN10 = Lograritmo neperiano de 10
var ln10 = Math.LN10;
alert("El logaritmo neperiano de 10 = " + ln10);

// LOG2E = Logaritmo de 2e
var log2e = Math.LOG2E;
alert("El logaritmo de 2e = " + log2e);

// LOG10E = Logaritmo de 10e
var log10e = Math.LOG10E;
alert("El logaritmo de 10e = " + log10e);

// PI = número pi
var pi = Math.PI;
alert("El número pi = " + pi);

// SQRT1_2 = Raíz cuadrada de un medio
var sqrt1_2 = Math.SQRT1_2;
alert("La raíz cuadrada de un medio = " + sqrt1_2);

// SQRT2 = Raíz cuadrada de dos
var sqrt2 = Math.SQRT2;
alert("La raíz cuadrada de dos = " + sqrt2);



//MÉTODOS MÁS COMUNES:
//random() -> devuelve un número aleatorio entre 0 y 1 (tanto int como float)
alert("Número aleatorio entre 0 y 1 = " + Math.random());

//max(<lista de valores>) -> devuelve el número de la lista más alto
//min(<lista de valores>) -> devuelve el número de la lista más bajo
alert("Número más alto ente 91, 22, 88, 45, 6 y 73 es " + Math.max(91, 22, 88, 45, 6, 73));
alert("Número más bajo ente 91, 22, 88, 45, 6 y 73 es " + Math.min(91, 22, 88, 45, 6, 73));
