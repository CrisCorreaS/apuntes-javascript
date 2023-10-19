/*
    A diferencia de otros lenguajes de programación, en Javascript solo hay un tipo de datos numérico. Es decir, no hablamos de números enteros, dobles, en coma flotante… ¡todos los números se pueden representar con objetos de tipo Number!
    Vamos a ver varias operaciones con Number muy útiles:

    -Cómo cambiar de base entre números: pasar a binario, octal o hexadecimal.
    -Cómo representar el -infinito y el +infinito… 
    -Cómo comprobar si un dato es un número o no.
    -Cómo representar un número como un objeto y como un dato primitivo
*/

//OBJETOS NATIVOS NUMBER
/*
    CARACTERÍSTICAS:
    - En js solo hay un tipo de dato numérico, no hay int, float, double...
    - Podemos representar: 
            -Números enteros: 34, 12, 1253... 
            -Números decimales: 34.05, 3.1416, 6.666666667...
            -Números con notación científica: 123e4 = 123 * 10^4 = 1230000, 123e-4 = 123* 10^-4 = 0.0123...
            -Números en hexadecimal = 0xFF = 255, 0xA = 10, 0x2F = 47

*/

//CAMBIO DE BASE ENTRE NÚMEROS:
//toString(<base que usamos>) -> Para pasar números de una base a otra
var base10 = 128;
alert(base10 + " en binario es: " + base10.toString(2)); // 10000000 
alert(base10 + " en octal es: " + base10.toString(8)); // 200
alert(base10 + " en hexadecimal es: " + base10.toString(16)); // 80

//INFINITO Y -INFINITO
//Infinity y -Infinity
var inf = 2;
while (inf != Infinity) {
    alert(inf);
    inf *= inf;
}

var div1 = 2, div2 = 0;
alert("División 2 / 0 = " + 2 / 0); //Infinity
alert("División -2 / 0 = " + -2 / 0); //-Infinity
alert("TypeOf: " + (div1 / div2)); //Infinity

//NaN = NOT A NUMBER -> Lo obtenemos cuando queremos hacer una operación atípica como una división entre un número y un string
var atipico1 = 100 / "casa";
alert("100/'casa' = " + atipico1);//100/'casa' = NaN

//***Hay una excepción cuando ponemos una cadena con un número, porque lo reconoce como tal y hace la operación
var atipico2 = 100 / "10";
alert("100/'10' = " + atipico2);//100/'10' = 10

//Para saber si es o no NaN se usa un método: isNaN() -> Devuelve un boolean, si es un NaN es true y si no false
alert("¿Es un NaN la variable atipico1? " + isNaN(atipico1)); //true
alert("¿De qué tipo es atipico1? " + typeof(atipico1)); //number
alert("¿Es un NaN la variable atipico2? " + isNaN(atipico2)); //false

//NÚMEROS COMO OBJETOS
var num1 = 123;
var num2 = new Number(123);
var num3 = new Number(123);
alert("El número 1 es de tipo " + typeof (num1)); //number
alert("El número 2 es de tipo " + typeof (num2)); //object
alert("num1 == num2: " + (num1 == num2)); //true
alert("num1 === num2: " + (num1 === num2)); //false
alert("num3 === num2: " + (num3 === num2)); //false -> Aunque ambos sean objetos Number con el mismo valor. Es por eso que es mejor usar los primitivos en vez del objeto nativo Number
