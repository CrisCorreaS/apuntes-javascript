/*
La desestructuración o destructuring es una interesantísima característica que se incorporó a Javascript en su versión ES6 con el objetivo de descomponer un array o un objeto en elementos independientes y asignarlos a variables o constantes en una única expresión.

Es decir, nos permite dividir un array o un objeto en trocitos y pasárselos a variables o constantes sin necesidad hacerlo de elemento a elemento en sentencias separadas.

Aunque en esta lección veremos la desestructuración básica de arrays y objetos, también podemos aplicarla a salida de funciones, utilizar expresiones regulares, etc.

A continuación veremos cómo trabajar con:
   - Desestructuración de arrays con asignación básica.
   - Desestructuración de arrays con asignación separada de la declaración.
   - Desestructuración de objetos con asignación básica.
   - Desestructuración de objetos asignando a nuevos nombres de variables.
   - Desestructuración de objetos con asignación sin declaración.

Veamos cada una de estas características en el siguiente vídeo:
*/

/*
DESTRUCTURING

Destructuring es un modo de extraer valores de datos almacenados en objetos y arrays, descomponiéndolos y asignándolos a un grupo de variables
Mediante patrones se pueden especificar cómo extraer los valores
*/

//Destructuring de arrays (asignación básica)
const galicia = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
const [c, lu, ou] = galicia;
const [coru, ouren, lug] = galicia; // El Destructuring se hace así pero hay que tener en cuenta que los valores se asignan según la posición

console.log(c); // A Coruña -> En la posición de "A Coruña", establecimos la variable "c"
console.log(ou); // Ourense -> En la posición de "Ourense", establecimos la variable "ou"
console.log(lu); // Lugo -> En la posición de "Lugo", establecimos la variable "lu"
// console.log(p); //Uncaught ReferenceError: p is not defined at script.js:32:13 -> No existe la "p" dentro de nuestra estructura de destructuring

console.log(coru); // A Coruña
console.log(ouren); // Lugo -> En la posición de "Lugo", establecimos la variable "ouren"
console.log(lug); // Ourense -> En la posición de "Ourense", establecimos la variable "lug"



//Destructuring de arrays (asignación separada de la declaración) -> haciendo la declaración separada de la asignación
let cc;
let ba;

[cc, ba = "Merida"] = ["Cáceres", "Badajoz"]; // A pesar de que le hemos preasignado a "ba" el valor "Mérida", le asignamos el valor "Badajoz" el cual se sobreescribe
console.log(cc); // Cáceres
console.log(ba); // Badajoz



//Destructuring de objetos (asignación básica)
const varios = { p: 11, q: true, r: "hola" };
const { p, r } = varios;

console.log(p); // 11 -> Los atributos de los objetos se reconocen, así que "p" será el "p" del Objeto varios
// console.log(q); // Uncaught ReferenceError: q is not defined at script.js:56:13 -> No había "q" en el destructuring, así que no está definido
console.log(r); // hola -> El valor de "r" de varios será asignado a "r"




//Destructuring de objetos (asignando a nuevos nombres de variables) -> Cuidado porque esta opción y la siguiente son muy parecidas pero hay grandes diferencias en el orden en el que lo pongamos
const objeto = { nombre: "Ada", apellido: "Lovecode" };

// Tomamos del objeto la propiedad llamada "nombre" y la asignamos a la variable "n"
const { nombre: n, apellido: a } = objeto; // "n" ha tomado el valor del atributo "nombre" y "a" ha tomado el valor del atributo "apellido"
console.log(`${n} ${a}`); // Ada Lovecode

// Tomamos del objeto el valor del nombre y del apellido
const { nombre, apellido } = objeto; // "nombre" toma el valor del atributo de "objeto" que se encuentra en primer lugar y "apellido" toma el valor del atributo en segundo lugar -> es la asignación básica
console.log(`${nombre} ${apellido}`); // Ada Lovecode



//Destructuring de objetos (asignación sin declaración)
let x;
let y;

({ x, y } = { x: 1, y: 2 }); //Es obligatorio el paréntesis con este tipo de asignación

console.log(x); // 1
console.log(y); // 2
