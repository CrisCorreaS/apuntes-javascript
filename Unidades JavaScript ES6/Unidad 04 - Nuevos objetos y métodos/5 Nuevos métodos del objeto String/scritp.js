// MÉTODOS NUEVOS DEL OBJETO STRING

const cadena = "¡Hola, caracola!";

// startsWith(cadena_busqueda[, posición]) -> devuelve true o false si la cadena comienza por el primer argumento indicado a partir del segundo argumento el cual es opcional, si no se indica el segundo argumento, es desde la primera posición de la cadena (0). De izquierda a derecha desde la posición
console.log(`cadena.startsWith("¡Hol"): ${cadena.startsWith("¡Hol")}`); // true
console.log(`cadena.startsWith("¡Hol", 2): ${cadena.startsWith("¡Hol", 2)}`); // false
console.log(`cadena.startsWith("ola", 2): ${cadena.startsWith("ola", 2)}`); // true
console.log(`cadena.startsWith(" caracola!", 6): ${cadena.startsWith(" caracola!", 6)}`); // true



// endsWith(cadena_busqueda[, posición]) -> devuelve true o false si la cadena acaba por el primer argumento indicado a partir del segundo argumento el cual es opcional, si no se indica el segundo argumento, es desde la posición de la cadena (segundo argumento) hasta el principio. De derecha a izquierda desde la posición
console.log(`cadena.endsWith("caracola!"): ${cadena.endsWith("caracola!")}`); // true
console.log(`cadena.endsWith("caracola!!"): ${cadena.endsWith("caracola!!")}`); // false
console.log(`cadena.endsWith("¡Hola, caracola!"): ${cadena.endsWith("¡Hola, caracola!")}`); // true
console.log(`cadena.endsWith(" caracola!", 6): ${cadena.endsWith(" caracola!", 6)}`); // false
console.log(`cadena.endsWith("¡Hola,", 6): ${cadena.endsWith("¡Hola,", 6)}`); // true
console.log(`cadena.endsWith("¡", 1): ${cadena.endsWith("¡", 1)}`); // true
console.log(`cadena.endsWith("¡Hola, car", 10): ${cadena.endsWith("¡Hola, car", 10)}`); // true



// includes(cadena_busqueda) -> devuelve true o false si la cadena contiene el texto pasado como argumento
console.log(`cadena.includes("caracola"): ${cadena.includes("caracola")}`); // true
console.log(`cadena.includes("!"): ${cadena.includes("!")}`); // true
console.log(`cadena.includes("¡!"): ${cadena.includes("¡!")}`); // false
console.log(`cadena.includes("C"): ${cadena.includes("C")}`); // false
console.log(`cadena.includes("Adios"): ${cadena.includes("Adios")}`); // false



// repeat(numero) -> devuelve una cadena repetida tantas veces como se indique en el argumento (número) pasado
console.log(`${cadena.repeat(5)}`); // ¡Hola, caracola!¡Hola, caracola!¡Hola, caracola!¡Hola, caracola!¡Hola, caracola!