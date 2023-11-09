/*
SET:
Es un objeto que permite almacenar valores ÚNICOS de cualquier tipo, incluidos valores primitivos, referencias a objetos, etc
Para considerar dos objetos iguales, debe cumplirse la igualdad estricta (===) con la excepción el 0 positivo y el 0 negativo los cuales se consideran iguales y el NaN positivo y el NaN negativo que también son considerados iguales

SINTAXIS: new Set([iterable])
iterable -> debe ser un array o cualquier otro objeto iterable. Sus elementos se añadirán a
*/

let provincias = new Set(["Palencia", "Burgos", "Soria", "Burgos", "Palencia"]);
let numeros = new Set([1, 5, 7, 2, 5, 1, 1, 5, 2, 7, 1]);
let mezcla = new Set([2, "ET", "mi casa"]);

//PROPIEDADES
//size -> tamaño del set
console.log(`El número de provincias NO repetidas es ${provincias.size}`); // 3 -> Son Palencia, Burgos y Soria ya que luego se repiten Burgos y Palencia pero no cuentan
console.log(`El número de números NO repetidos es ${numeros.size}`); // 4 -> Son 1, 5, 7 y 2 ya que luego se vuelven a repetir todos los números
console.log(`El número de tipos de mezcla NO repetidos es ${ mezcla.size }`); // 3 -> Son 2, ET y mi casa


// MÉTODOS
// has() -> comprueba si el set contiene un elemento. Devuelve un boolean
console.log(`¿Está el elemento 2 en números? ${numeros.has(2)}`); // true
console.log(`¿Está el elemento 4 en números? ${numeros.has(4)}`); // false
console.log(`¿Está el elemento "mi casa" en mezcla? ${mezcla.has("mi casa")}`); // true


// delete()-> borra un elemento del set
numeros.delete(2);
console.log(`¿Está el elemento 2 en números? ${numeros.has(2)}`); // false


// add() -> añade un elemento al set
provincias.add("Segovia"); // nueva
provincias.add("Burgos"); // repetida
console.log(`El número de provincias NO repetidas es ${provincias.size}`); // 4 -> Son Palencia, Burgos, Soria y Segovia


// Outro
console.log(`El número de tipos de mezcla NO repetidos es ${ mezcla.size }`); // 3 -> Son 2, ET y mi casa
let codigos = { 34: "Spain", 33: "France" };

mezcla.add(codigos);
console.log(`El número de tipos de mezcla NO repetidos es ${ mezcla.size }`); // 4 -> Son 2, ET, mi casa y codigos

mezcla.add({ 34: "Spain", 33: "France" });
console.log(`El número de tipos de mezcla NO repetidos es ${ mezcla.size }`); // 5 -> Son 2, ET, mi casa, codigos y { 34: "Spain", 33: "France" } -> No es lo mismo añadir un objeto con pares clave-valor, que añadir sus clave-valor a pelo, así que el Set sí que los diferencia


// clear() -> elimina todos los elementos de un objeto Set
mezcla.clear();
console.log(`El número de tipos de mezcla NO repetidos es ${ mezcla.size }`); // 0



/*
WEAKSET: son similares a los Set pero incorporan una serie de diferencias:
  - Solo acepta colecciones de objetos
  - La referencia a las claves es debil: si no hay otras referencias al objeto que actúan como clave, el recolector de basura (garbage collector) podría liberarlo
  - Dispone de tres métodos unicamente: add(), delete() y has()
*/