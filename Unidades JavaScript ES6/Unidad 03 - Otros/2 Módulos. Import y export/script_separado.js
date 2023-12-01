/*
Una buena práctica en programación es la modularización, que consiste en dividir programas en pequeños módulos independientes que pueden ser importados cuando se les necesita. Hasta hace unos años, en Javascript únicamente se podía implementar esta funcionalidad dividiendo los programas en pequeños scripts; sin embargo, dado que Javascript ahora se utiliza en muchos contextos y se integra con diferentes frameworks y librerías, el uso de módulos ofrece mejoras significativas.
En primer lugar, hay que entender la diferencia entre usar scripts y módulos:
  - Un archivo con módulos debe ser cargado en un servidor; de lo contrario obtendrás un error de CORS como consecuencia de los requisitos de seguridad del módulo de Javascript.
  - Los módulos utilizan automáticamente modo estricto o strict mode.
  - Los módulos se ejecutan una única vez aunque se haga referencia a ellos en varias etiquetas <script>.
  - Las características de un módulo no están disponibles a nivel global: solamente se puede acceder a las funciones importadas en el script en el que se importan.

En cuanto a la sintaxis, hay que tener en cuenta tres sentencias clave.

En el HTML debemos indicar que el archivo Javascript va a importar módulos de la siguiente manera (de lo contrario obtendremos un error):

  <script src="archivo.js" type="module"></script>

Por otro lado, en los archivos Javascript debemos indicar, en función del archivo que sea:
  - "import" en el archivo que va a importar los elementos y hace referencia a los elementos que van a importarse
        import {elementos_separados_por_comas} from "ruta"; 

  - "export" en el archivo (módulo) del que se van a exportar los elementos, y hace referencia a los elementos que pueden exportarse. Precede a function, var, let, const, y clases.
        export definicion_de_funcion_variable_constante_o_clase;
        export {elementos_separados_por_comas}; 

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

