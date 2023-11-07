/*
El objeto Map es una de las nuevas incorporaciones a la versión de Javascript ES6.
Se caracteriza porque almacena pares clave-valor y que cualquier valor puede ser utilizado tanto como clave o valor.

Su sintaxis es similar a la de otros objetos de Javascript: tenemos que utilizar la palabra reservada new y a continuación, entre paréntesis, un iterable:
    new Map([iterable])

En esta lección conoceremos, en primer lugar, la propiedad más importante:
   - size: permite conocer el tamaño del Map.

Y además, veremos el funcionamiento de una serie de métodos:
   - get(clave): devuelve el valor asociado a una clave, o undefined si no tiene ninguno.
   - set (clave, valor): establece un valor para una clave.
   - has(clave): devuelve true o false si existe un valor asociado a la clave en el Map.
   - delete(clave): elimina los valores asociados a una clave pasada por parámetro.
   - clear(): elimina todos los elementos del objeto Map.

Por último, conoceremos los tres iteradores propios de Map:
   - values: iterador con los valores para cada elemento de Map en orden de inserción.
   - keys: iterador con las claves para cada elemento de Map en orden de inserción.
   - entries: iterador con los pares clave-valor para cada elemento de Map en orden de inserción.

Y por si fuera poco, conoceremos WeakMap, una variante de Map con algunas pequeñas diferencias.
En vídeos posteriores veremos cómo recorrer un Map utilizando la nueva estructura de control de ES6 for…of.
*/

/*
MAP:
Es un objeto que almacena pares clave-valor. Podemos utilizar objetos o valores primitivos

Objetos y Maps son similares en cuanto a funcionamiento (tienes asociadas claves a valores)
    - Las claves de un objeto con Strings y Symbols; las de un Map pueden ser de cualquier tipo
    - Para saber el tamaño de un Map utilizamos la propiedad size; en un objeto hay que hacerlo manualmente, recorrer el objeto, etc
    - Map es iterable; para iterar Object necesitamos primero las claves para iterar sobre él
    - Un Object tiene prototipo; claves por defecto en un Map pueden colisionar con las de un objeto

SINTAXIS: new Map([iterable])
    - iterable -> debe ser un array o cualquier otro objeto iterable con elementos clave-valor
*/

//SINTAXIS: new Map([iterable])
let codigosPostales = new Map([[49, "Zamora"], [37, "Salamanca"], [47, "Valladolid"]]);
let matriculas = new Map([["ZA", "Zamora"], ["SA", "Salamanca"], ["VA", "Valladolid"]]);


// PROPIEDADES
// size -> Tamaño del Map (coge cada uno de los pares clave-valor)
console.log(codigosPostales.size); //3
console.log(matriculas.size); //3


//MÉTODOS
//get() -> devuelve el valor asociado a una clave (o undefined si no hay ninguno)
console.log(codigosPostales.get(49)); // Zamora
console.log(codigosPostales.get(47)); // Valladolid
console.log(codigosPostales.get(43)); // undefined -> No hay un par de clave-valor con la clave = 43

//set() -> establece un valor asociado a una clave (lo sobreescribe)
codigosPostales.set(47, "Pucela");
console.log(codigosPostales.get(47)); // Pucela

//has() -> comprueba si el mapa constiene un elemento indicado por su clave o no. Devuelve un boolean
console.log(codigosPostales.has(47)); // true
console.log(matriculas.has(47)); // false
console.log(matriculas.has("ZA")); // true

//delete() -> elimina un elemento indicado por su clave
matriculas.delete("ZA");
console.log(matriculas.has("ZA")); // false

//clear() -> elimina todos los elementos de un objeto Map
codigosPostales.clear();
console.log(`Tamaño de códigos postales: ${codigosPostales.size}`); // Tamaño de códigos postales: 0


//ITERADORES:
//keys() -> devuelve un iterador con las claves del mapa ordenadas
//values() -> devuelve un iterador con los valores del mapa ordenados
//entries() -> devuelve un tierador con los pares clave-valor del mapa ordenados
let itClaves = matriculas.keys();
let itValores = matriculas.values();
let itPares = matriculas.entries();

console.log(itClaves.next().value); // SA -> Devuelve la primera clave -> mirar cómo trabajar con iteradores
console.log(itClaves.next().value); // VA -> Devuelve la segunda clave -> next hace que se recorra de uno en uno los valores del iterador
console.log(itClaves.next().value); // undefined -> Devuelve la tercera clave, pero este no está definido
console.log(itClaves.next().value); // undefined -> Devuelve la cuarta clave, pero este no está definido

console.log(itValores.next().value); // Salamanca -> Devuelve el primer valor
console.log(itValores.next().value); // Valladolid -> Devuelve el segundo valor
console.log(itValores.next().value); // undefined -> Devuelve el tercer valor y este no está definido

console.log(itPares.next().value); // (2) ['SA', 'Salamanca'] -> Devuelve el primer par clave-valor
console.log(itPares.next().value); // (2) ['VA', 'Valladolid'] -> Devuelve el segundo par clave-valor
console.log(itPares.next().value); // undefined -> Devuelve el tercer par clave-valor y este no está definido



/*
WEAKMAP: son similares a los Maps pero incorporan una serie de diferencias:
    - Solo acepta objetos como claves
    - La referencia a las claves es debil: si no hay otras referencias al objeto que estamos utilizando como clave, el garbage collector podría cargárselo 
    - No dispone de propiedades ni elementos relacionados con más de un elemento a la vez (no podemos trabajar con los iteradores)
    - No podemos iterarlo con un bucle for of
*/