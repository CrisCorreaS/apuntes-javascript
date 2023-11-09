/*
NUEVOS MÉTODOS GLOBALES DEL OBJETO NUMBER
Son métodos que se han incorporado a los objetos globales Number o Math
Antes formaban parte d elos objetos definidos por el usuario
*/


// Number.isInteger(numero) -> devuelve true si es entero (positivo o negativo) y false en caso contrario
console.log(`¿1.5 es entero? ${Number.isInteger(1.5)}`); // false -> no es un número entero, es decimal (float)



// Number.isNaN(numero) -> comprueba si un valor contiene NaN. Cambia mucho si ponemos isNaN() sin Number, ya que entonces comprueba que lo que hay no sea un número. En los dos únicos casos en los que coinciden es cuando es un número o un String de un número
console.log(`Con Number -> "NaN": ${Number.isNaN("NaN")}`); // Con Number -> "NaN": false
console.log(`Con Number -> NaN: ${Number.isNaN(NaN)}`); // Con Number -> NaN: true
console.log(`Con Number -> undefined: ${Number.isNaN(undefined)}`); // Con Number -> undefined: false
console.log(`Con Number -> "pepe": ${Number.isNaN("pepe")}`); // Con Number -> "pepe": false
console.log(`Con Number -> {} (objeto vacío): ${Number.isNaN({})}`); // Con Number -> {} (objeto vacío): false
console.log(`Con Number -> "13": ${Number.isNaN("13")}`); // Con Number -> "13": false
console.log(`Con Number -> 13: ${Number.isNaN(13)}`); // Con Number -> 13: false

console.log(`Sin Number -> "NaN": ${isNaN("NaN")}`); // Sin Number -> "NaN": true | Con number: false
console.log(`Sin Number -> NaN: ${isNaN(NaN)}`); // Sin Number -> NaN: true | Con number: true
console.log(`Sin Number -> undefined: ${isNaN(undefined)}`); // Sin Number -> undefined: true | Con number: false
console.log(`Sin Number -> "pepe": ${isNaN("pepe")}`); // Sin Number -> "pepe": true | Con number: false
console.log(`Sin Number -> {} (objeto vacío): ${isNaN({})}`); // Sin Number -> {} (objeto vacío): true | Con number: false
console.log(`Sin Number -> "13": ${isNaN("13")}`); // Sin Number -> "13": false | Con number: false
console.log(`Sin Number -> 13: ${isNaN(13)}`); // Sin Number -> 13: false | Con number: false



// Number.isSafeInteger(numero) -> devuelve true si el número se encuentra dentro del rando de 53 bits (si un integer está dentro de ese rango es seguro), que determina que no hay pérdida de precisión. 
// También se definen las constantes: Number.MAX_SAFE_INTEGER y Number.MIN_SAFE_INTEGER
console.log(`¿Es seguro el número 9999999? ${Number.isSafeInteger(9999999)}`); // true
console.log(`¿Es seguro el número 99999999999999999? ${Number.isSafeInteger(99999999999999999)}`); // false
console.log(`El mayor entero seguro es ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log(`El menor entero seguro es ${Number.MIN_SAFE_INTEGER}`); // -9007199254740991



// FUNCIONAN IGUAL QUE LAS FUNCIONES GLOBALES
// Number.isFinite(numero) -> comprueba si un número es finito
// Number.parseInt(numero) / parseInt(numero) -> Pasa cualquier número o número en String a un entero. Se puede usar con o sin Number
// Number.parseFloat(numero) / parseFloat(numero) -> Pasa cualquier número o número en String a un decimal. Se puede usar con o sin Number

let num1 = 100;
console.log(`¿El 100 es finito? ${Number.isFinite(num1)}`); // true

let num2 = Infinity;
console.log(`¿El Infinity es finito? ${Number.isFinite(num2)}`); // false

let str1 = "123";
console.log(`La cadena 123 parseada a Int es: ${Number.parseInt(str1)}`); // 123

let str2 = "123.456";
console.log(`La cadena 123.456 parseada a Int es: ${parseInt(str2)}`); // 123

let str3 = "123";
console.log(`La cadena 123 parseada a Float es: ${Number.parseFloat(str3)}`); // 123

let str4 = "123.456";
console.log(`La cadena 123.456 parseada a Float es: ${Number.parseFloat(str4)}`); // 123.456

let str5 = "123.456abc";
console.log(`La cadena 123.456abc parseada a Float es: ${parseFloat(str5)}`); // 123.456