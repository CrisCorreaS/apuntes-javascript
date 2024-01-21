/* 
Pasamos a ver otro de los objetos más importantes del lenguaje Javascript: el objeto Array. En el curso de Javascript trabajamos con objetos y, concretamente, vimos cómo funcionaba el objeto Array.
Nuevamente Javascript ES6 incorpora una serie de métodos al objeto global Array que debemos conocer:

Veremos cómo funcionan:
  - .findIndex() -> devuelve el índice del array del primer elemento que cumple con una condición. Es similar a indexOf pero debemos pasar como argumento una función flecha y detecta el tipo de dato NaN.
  - .find() -> similar al anterior pero en lugar de devolver la posición, devuelve el valor del elemento. También se le pasa una función flecha.
  - .fill() -> crea un array de un tamaño determinado e inicializa su contenido.
  - .copyWithin() -> copia los elementos que están entre los índices de inicio y fin a partir de una posición.

Además, conoceremos los iteradores con los que podemos trabajar junto con los Arrays:
  - Object.keys -> devuelve un iterador con los elementos del array en orden. En la especificación de ES5, si el argumento no es un objeto primitivo da error; en ES6 se transforma a objeto.
  - Object.values -> devuelve un iterador con los valores del array en orden.
  - Object.entries -> devuelve un iterador con los pares del array en orden.

Además, trabajaremos con métodos estáticos, como son:
  - Array.from() -> permite convertir a arrays los elementos iterables y los pseudoarrays. Podemos crear arrays a partir de Maps, Sets, Strings, iterables obtenidos a partir de array.keys().
  - Array.of() -> crea un array con aquellos elementos que recibe como argumento.

Por último, veremos que son los agujeros en los arrays, elementos que no existen pero ocupan posiciones, y en la representación clásica de un array se indican con comas que separan dichos elementos inexistentes.

NUEVOS MÉTODOS DEL OBJETO ARRAY 
*/

// findIndex() -> devuelve el índice del array (la posición) del primer elemento que cumple con una condición (función flecha)
// Es similar a indexOf(), pero hay que pasar como argumento una función flecha; permite detectar NaN
// SINTAXIS: let posicion = miArray.findIndex(x => condicion_x);

const array = [1, 5, NaN, 7];
console.log(`${array.findIndex(x => Number.isNaN(x))}`); // 2 -> Devuelve la posición 2 del array la cual es NaN
console.log(`${array.findIndex(x => x > 5)}`); // 3 -> Devuelve la posición 3 del array la cual es 7
console.log(`${array.findIndex(x => x >= 5)}`); // 1 -> Devuelve la primera posición en donde el valor es mayor o igual a 5, en este caso es la posición 1 que es igual a 5
console.log(`${array.findIndex(x => x >= 6)}`); // 3 -> Devuelve la primera posición en donde el valor es mayor o igual a 6, en este caso es la posición 3 que es igual a 7
console.log(`${array.findIndex(x => x === 5)}`); // 1 -> Devuelve la posición 1 del array la cual es 5
console.log(`${array.findIndex(x => x == "1")}`); // 0 -> Devuelve la posición 0 del array la cual es 1



// find()-> similar al anterior pero en lugar de devolver la posición, devuelve el valor del elemento
// También hay que pasarle una función flecha
console.log(`${array.find(x => Number.isNaN(x))}`); // NaN
console.log(`${array.find(x => x > 5)}`); // 7
console.log(`${array.find(x => x >= 5)}`); // 5
console.log(`${array.find(x => x >= 6)}`); // 7
console.log(`${array.find(x => x === 5)}`); // 5
console.log(`${array.find(x => x == "1")}`); // 1



// fill() -> crea u array de un tamaño determinado e inicializa su contenido
// SINTAXIS: const array = new Array(tamaño | valores_elementos).fill(valor[, incicio, fin]);
const array2 = new Array(5).fill("x"); //Creamos un Array de 5 elementos "x"
console.log(array2); // Array(5)["x", "x", "x", "x", "x"];

const array3 = new Array("a", "b", "c", "d", "e", "f", "g");
array3.fill(null, 3, 5); // Va a poner null desde la posición 3 a la 5 exclusive
console.log(array3); // (7) ['a', 'b', 'c', null, null, 'f', 'g']



// copyWithin() -> copia los elementos que están entre los índices de inicio y de fin a partir de una posición
// SINTAXIS: miArray.copyWithin(posicion, inicio, fin = this.length);
//               0    1    2    3    4    5    6
const array4 = ["a", "b", "c", "d", "e", "f", "g"];
array4.copyWithin(2, 5, 7); // Copia a la posición 2 lo que hay en las posiciones 5 y 7 exclusive
console.log(array4); //(7) ['a', 'b', 'f', 'g', 'e', 'f', 'g'] -> sobreescribe el valor de la posición 2 por el de la 5 y el de la 3 por el de la 6

//               0    1    2    3    4    5    6
const array5 = ["a", "b", "c", "d", "e", "f", "g"];
array5.copyWithin(0, 2, 5); // Copia a la posición 0 lo que hay en las posiciones 2 y 5 exclusive
console.log(array5); //(7) ['c', 'd', 'e', 'd', 'e', 'f', 'g'] -> sobreescribe el valor de la posición 0 sobre el de la 2, el de la 1 sobre el de la 3 y el de la 2 sobre el de la 4



// Para recorrer un array podemos utilizar el for...of -> mirarlo en esta unidad en el apartado 4




// Iteradores
// Object.keys() -> devuelve un iterador con los elementos del array en orden
// En la especifiación ES5, si el argumento no es un objeto primitivo, da error
// En ES6 se transforma a objeto

// Object.values() -> devuelve un iterador con los valores del array en orden

// Object.entries() -> devuelve un iterador con los pares del array en orden
console.log(`ITERADORES: `);
const array6 = ["a", "b", "c", "d", "e", "f", "g"];

console.log(array6); // (7) [("a", "b", "c", "d", "e", "f", "g")];
console.log(Object.keys(array6)); // (7) ['0', '1', '2', '3', '4', '5', '6']
console.log(Object.values(array6)); // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(Object.entries(array6)); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)] -> 0 : (2) ['0', 'a'], 1 : (2) ['1', 'b'], 2 : (2) ['2', 'c'], 3 : (2) ['3', 'd'], 4 : (2) ['4', 'e'], 5 : (2) ['5', 'f'], 6 : (2) ['6', 'g']. length : 7



// MÉTODOS ESTÁTICOS
console.log("MÉTODOS ESTÁTICOS");

// Array.from() -> permite convertir a arrays los elementos iterables y pseudoarrays (array light)
// Podemos crear arrays a partir de Maps, Sets, Strings, iterables obtenidos a partir de array.keys(), etc
const pseudoarray = { length: 2, 0: "x", 1: "y" };

console.log(pseudoarray); // {0: 'x', 1: 'y', length: 2}
// for (let elemento of pseudoarray) {
//   console.log(elemento); // Uncaught TypeError: pseudoarray is not iterable
// }

const arrayNuevo = Array.from(pseudoarray);

for (const elemento2 of arrayNuevo) {
    console.log(elemento2); // x y
}



//Array.of() -> crea un array con aquellos elementos que recibe como argumento
const array7 = Array.of("Manzana", "Platano", "Pera");
console.log(array7); //(3) ['Manzana', 'Platano', 'Pera']



// AGUJEROS EN ARRAYS: elementos en arrays que no existen
const array8 = ["Manzana", "Platano", , , , "Pera"];
console.log(array8); // (6) ['Manzana', 'Platano', vacío × 3, 'Pera'] -> 0 : "Manzana", 1 : "Platano", 5 : "Pera". length : 6
