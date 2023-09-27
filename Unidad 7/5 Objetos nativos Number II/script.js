/*
En esta lección seguiremos profundizando con este tipo de dato que da mucho de sí:
    -Conoceremos las propiedades del objeto: MAX_VALUE, MIN_VALUE, NEGATIVE_INFINITY, POSITIVE_INFINITY y NaN.
    -Aprenderemos cómo definir el número máximo de cifras y de decimales con .toFixed() y .toPrecision() y cómo representar en exponencial con .toExponential()  
    -Veremos cómo devolver un valor primitivo y una cadena a partir de un número con .valueOf() y .toString() y cómo devolver el valor numérico de una variable con el propio Number().
    -Uno de los métodos estrella que utilizaremos cientos de veces al capturar un número por teclado: el método que nos permite parsear una cadena a entero, .parseInt() (o a decimal, con .parseFloat()).
*/

//PROPIEDADES DE LOS OBJETOS NUMBER
//Maximo -> nos permite sacar el valor máximo que puede tener un número en Javascript
var maximo = Number.MAX_VALUE;
alert("Valor máximo = " + maximo);//1.7976e+308

//Minimo -> nos permite sacar el valor más pequeño que puede almacenar un número en Javascript
var minimo = Number.MIN_VALUE;
alert("Valor mínimo = " + minimo);//5e-324

//INFINITOS: Hay dos, el NEGATIVE_INFINITY y el POSITIVE_INFINITY
var negInf = Number.NEGATIVE_INFINITY;
var posInf = Number.POSITIVE_INFINITY;
alert("Infinito negativo = " + negInf + ", e infinito positivo = " + posInf); // -Infinity e Infinity

//Propiedad no numérica
var numnan = Number.NaN;
alert("NaN = " + numnan);//NaN


//MÉTODOS:
//toFixed(<num decimales>) -> nos devuelve una cadena con el número específico de decimales indicado
var x = 9.876532;
alert(x.toFixed(0)); //10 -> Redondea el 9.8... a 10
alert(x.toFixed(3)); //9.877 -> El cinco lo redondea para arriba, entonces 9.876532 = 9.877
alert(x.toFixed(10)); //9.8765320000 -> Si ponemos más decimales en toFixed() de los que hay, añade ceros

//toPrecision([<num cifras>]) -> devuelve una cadena con el número específico de cifras indicado
var y = 9.8765;
alert(y.toPrecision()); //9.8765 -> Si no ponemos nada, nos muestra el número como tal
alert(y.toPrecision(2)); //9.9 -> Si ponemos dos cifras redondea
alert(y.toPrecision(6)); //9.87650 -> Si ponemos más cifras, añade ceros

//toExponential([<num decimales>]) -> devuelve una cadena con el número redondeado a notación científica, se le puede poner el número de decimales para redondear
var z = 123456789;
alert(y.toExponential()); //9.8765e+0 -> Devuelve el número en notación científica
alert(y.toExponential(2)); //9.88e+0 -> Devuelve el número con dos decimales en notación científica
alert(z.toExponential(3)); //1.234e+8

//valueOf() -> devuelve el valor primitivo de un objeto
//toString() -> devuelve un número en formato cadena
var j = 123;
alert(j.toString()); //"123"
alert((123).toString()); //Es lo mismo que el de antes
alert((123 + 7).toString()); //130 -> Hace la suma y luego el resultado lo pasa a string

//MÉTODOS GLOBALES PARA CONVERTIR VARIABLES EN NÚMEROS:
//Number() -> devuelve el valor numérico de una variable
alert(Number(true)); //Devuelve 1
alert(Number(false)); //Devuelve 0
alert(Number(new Date())); //Devuelve el número de milisegundos desde el día 1/1/1970
alert(Number("10")); //Devuelve el número de la cadena si la cadena está compuesta por números
alert(Number("casa")); //Devuelve NaN

//parseInt() / parseFloat() -> devuelve el valor numérico de una variable
alert(parseInt("10.6")); //Devuelve 10 -> Devuelve el número de la cadena si la cadena está compuesta por números
alert(parseFloat("10.6")); //Devuelve 10.6
alert(parseInt("10")); //Devuelve 10
alert(parseFloat("10")); //Devuelve 10 -> No pone el 10.0 como en Java
alert(parseInt("10 20")); //Devuelve 10 -> Si es una cadena que empieza con un número, devuelve solo el primer número, incluso si son varios números entre espacios
alert(parseInt("10 casa")); //Devuelve 10 -> Igual que el anterior
alert(parseInt("10casa")); //Devuelve 10
alert(parseInt("casa 10")); //Devuelve NaN

