/*
    Esta vez nos vamos a centrar únicamente en los objetos nativos y sus constructores integrados.
    Un constructor integrado nos permite definir un objeto del tipo que sea. En este caso, vamos a ver cómo definir los siguientes tipos de objetos nativos:
        - String
        - Number
        - Boolean
        - Array
        - Function
        - Date
        - Math
        - Object  

    En general, todos los objetos nativos utilizan la siguiente sintaxis para definirse:

        new <TipoObjetoNativo>([value]); 

    Hay una excepción con el objeto Math que veremos a continuación

    *Aunque es una manera totalmente válida de crear objetos, lo cierto es que no es recomendable utilizar la palabra new para definir números, cadenas o booleanos. 
    *Reduce la velocidad de ejecución, complica el código y puede producir resultados inesperados en las comparaciones de objetos
*/

//1. String
var x1 = new String(); //No utilizar
var y1 = "Hola"; //Utilizar -> Mejor siempre usar el tipo de dato primitivo

//2. Number
var x2 = new Number(); //No utilizar
var y2 = 568; //Utilizar -> Mejor siempre usar el tipo de dato primitivo

//3. Boolean
var x3 = new Boolean(); //No utilizar
var y3 = false; //Utilizar -> Mejor siempre usar el tipo de dato primitivo

//4. Array
var x4 = new Array(); //No utilizar
var y4 = [2.58, "Hola", true, 5e2]; //Utilizar

//5. RegExp
var x5 = new RegExp(); //No utilizar
var y5 = /()/; //Utilizar

//6. Function
var x6 = new Function(); //No utilizar
var y6 = function () { }; //Utilizar

//7. Date
var x7 = new Date();

//8. Math: no se puede declarar con "new" porque es un objeto global

//9. Object
var x8 = {};