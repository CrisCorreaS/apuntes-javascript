/*
Los módulos son trozos de código que podemos escribir en ficheros independientes.
Pueden tener clases, funciones, objetos, datos primitivos...
Desde ES6 se incorporó esta característica explícitamente, aunque se podía hacer previamente con transpiladores como Babel.

Para indicar al navegador que un archivo JavaScript utiliza módulos necesitamos indicar en el html lo siguiente con la etiqueta <script>:
  <script src="miscritp.js" type="module"></script>
    
-> Para exportar una parte de un módulo utilizamos "export", de modo que le indicamos que se puede utilizar fuera
-> Para importar algo exportado por un módulo, utilizamos "import"

Una de las diferencias de declarar un script como "module" es que, si no indicamos que es un módulo, se ejecuta tantas veces moso lo indiquemos, mientras que al declarar como module, solamente se ejecuta una vez aunque lo indiquemos varias
*/

//Aquí vamos a hacer un import de una de las funciones y constantes de funciones.js
import { cadenaMayuscula } from "./funciones.js"; // CUIDADO!! NUNCA TE OLVIDES DE PONER EL TIPO DE ARCHIVO QUE ES (.js) Y EL ./
// Si no ponemos ./ al principio, nos da el siguiente error: Uncaught TypeError: Failed to resolve module specifier ".funciones.js". Relative references must start with either "/", "./", or "../".
import { IVAGENERAL, IVAREDUCIDO, IVASUPERREDUCIDO } from "./funciones.js";

const saludo = cadenaMayuscula("¡Hola, caracola!");
alert(saludo); // ¡HOLA, CARACOLA!

alert(
  `Hay tres tipos de IVA: general: ${IVAGENERAL}, reducido: ${IVAREDUCIDO} y superreducido: ${IVASUPERREDUCIDO}`
); // Hay tres tipos de IVA: general: 0.21, reducido: 0.1 y superreducido: 0.04

