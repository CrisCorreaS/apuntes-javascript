// Esto es como el script_separado.js pero haciendo los imports juntos
import * as todo from "./funciones.js"

// Ahora tenemos que poner todo. funciones, constantes... Si no, no funciona porque da un error

// const saludo1 = cadenaMayuscula("¡Hola, caracola!"); -> Si lo ponemos así da un error -> Uncaught ReferenceError: cadenaMayuscula is not defined
const saludo2 = todo.cadenaMayuscula("¡Hola, caracola!"); // Ahora si funciona
alert(saludo2); 

alert(
  `Hay tres tipos de IVA: general: ${todo.IVAGENERAL}, reducido: ${todo.IVAREDUCIDO} y superreducido: ${todo.IVASUPERREDUCIDO}`
); // Hay tres tipos de IVA: general: 0.21, reducido: 0.1 y superreducido: 0.04