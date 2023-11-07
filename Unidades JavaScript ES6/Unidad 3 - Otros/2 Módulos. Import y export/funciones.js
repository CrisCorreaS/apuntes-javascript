// Funciones que vamos a utilizar en el script
// Aquí es donde hay que hacer el "export" y en el script.js habrá que hacer el "import"

// Exportar constantes
const IVAGENERAL = 0.21;
const IVAREDUCIDO = 0.1;
const IVASUPERREDUCIDO = 0.04;

export { IVAGENERAL, IVAREDUCIDO, IVASUPERREDUCIDO }; // También se podría ir uno a uno haciendo export IVAGENERAL...

// Exportar funciones
export const cadenaMayuscula = str => str.toUpperCase(); // Pasa la cadena a mayúsculas

/*
DESGLOSEMOS:
const cadenaMayuscula = str => str.toUpperCase(); 

   - cadenaMayuscula = nombre de la función
   - str = parámetro que se le pasa a la función
   - str.toUpperCase() = lo que hace la función -> No lleva paréntesis porque solo es una línea

Es lo mismo que:

function cadenaMayuscula (str) {
    return str.toUpperCase();
}

o

const cadenaMayuscula = function (str) {
    return str.toUpperCase();
}
*/

/*
PASO A PASO DE CÓMO HACER QUE UNA FUNCIÓN ES5 SEA UNA ARROW FUNCTION

function cadenaMayuscula (str) {
    return str.toUpperCase();
}


1. - Pasamos el nombre de la función a una constante que iguale la función ahora anónima
const cadenaMayuscula = function (str) {
    return str.toUpperCase();
}

2. - Quitamos "function":
const cadenaMayuscula = (str) {
    return str.toUpperCase();
}

3. - Añadimos una fecha (=>) entre los parámetros y el abrir paréntesis
const cadenaMayuscula = (str) => {
    return str.toUpperCase();
}

4. - (OPCIONAL) Simplificamos el cuerpo de la función si solo tiene una línea quitándole el "return" y las llaves. Si tiene más de una línea no podemos quitar ni las llaves ni el "return"
const cadenaMayuscula = (str) => str.toUpperCase();
*/

/*
EJEMPLOS DE FUNCIONES ES5 CONVERTIDAS A ARROW FUNCTIONS:

function saludoCompleto(nombre, apellido) {
  var saludo = 'Hola';
  var nombreCompleto = nombre + ' ' + apellido;
  return saludo + ', ' + nombreCompleto + '!';
}

pasa a ser

const saludoCompleto = (nombre, apellido) => {
  var saludo = 'Hola';
  var nombreCompleto = nombre + ' ' + apellido;
  return saludo + ', ' + nombreCompleto + '!';
}
*/