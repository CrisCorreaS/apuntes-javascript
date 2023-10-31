/*
En el curso de Javascript I aprendimos cómo declarar variables utilizando la palabra reservada var, que hasta la aparición de ES6 era el único modo de declarar variables. Pero llegó let…

La versión de ES6 vino cargada con muchas mejoras, entre ellas el uso de "let", que a diferencia de la anterior, permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
Es decir, "var" define una variable global o local sin tener en cuenta el ámbito del bloque donde se declara; "let", por el contrario, sí tiene en cuenta este ámbito. ¡Pero no te preocupes, que esto lo veremos un poco más adelante!

La sintaxis de la declaración de variables con let es la siguiente:

let var1 [= valor1] [, var2 [= valor2]] [, ..., varN [= valorN]];
*/

/*
CREACIÓN DE VARIABLES CON LET
let -> declara una variable limitando su ámbito (scope) al bloque, declaración o exptresión donde se está usando

SINTAXIS:
let nombreVariable [= valor];

Podemos declarar independientemente del programa que estemos usando, variables con "var" o con "let" indistintamente en el mismo programa. Lo que pasa es que es recomendable seguir la misma tendencia y declarar todas las variables o con "var" o con "let". 
Es recomendable usar "let" antes que "var" 
*/

var persona1 = "Ada";
var persona1 = "Lovelace";
alert(persona1); //Lovelace -> devuelve "Lovelace" pero no "Ada". No da problemas declarar la variable dos veces

var persona2 = "Cristina"
persona2 = "Correa";
alert(persona2); //Correa -> es igual que en el ejemplo anterior

let persona3 = "Charles";
let persona3 = "Babbage";
alert(persona3); // Da un error de sintaxis (script.js:32  Uncaught SyntaxError: Identifier 'persona3' has already been declared)
//A diferencia de "var", con "let" no podemos redefinir dos veces la misma variable
