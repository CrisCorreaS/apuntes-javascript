// MÉTODOS QUE PERMITEN REDONDEAR
//round(<número>) -> redondeo al alza o a la baja según el número
var a = 4.3; //round() = 4; ceil = 5; floor = 4;
var b = 4.7; //round() = 5; ceil = 5; floor = 4;
var c = 4.5; //round() = 5; ceil = 5; floor = 4;

alert(
  "Redondeo round(): " + a + " = " + Math.round(a) + "; " + b + " = " + Math.round(b) + "; " + c + " = " + Math.round(c)
);

//ceil(<número>) -> redondea siempre al alza
alert(
  "Redondeo ceil(): " + a + " = " + Math.ceil(a) + "; " + b + " = " + Math.ceil(b) + "; " + c + " = " + Math.ceil(c)
);

//floor(<número>) -> redondea siempre a la baja
alert(
  "Redondeo floor: " + a + " = " + Math.floor(a) + "; " + b + " = " + Math.floor(b) + "; " + c + " = " + Math.floor(c)
);


//NÚMEROS ALEATORIOS:
//Número aleatorio entre 0 y 10
var aleatorio1 = Math.floor(Math.random() * 11);// devuelve un número entre 0 y 1 que es multiplicado por 11 y redondeado a la baja
var aleatorio2 = Math.round(Math.random() * 10);// devuelve un número entre 0 y 1 que es multiplicado por 10 y redondeado al número entero más cercano
alert("Primer número aleatorio entre 0 y 10 = " + aleatorio1);
alert("Segundo número aleatorio entre 0 y 10 = " + aleatorio1);


//OTROS MÉTODOS
//pow(<base>, <exponente>) -> devuelve el número base elevado al exponente, es decir, el valor de la potencia
alert("La potencia de 3 elevado al cuadrado es: " + Math.pow(3, 2));

//sqrt(<número>) -> devuelve la raíz cuadrada del número
alert("La raíz cuadrada de 36 es: " + Math.sqrt(36));

//abs(<número>) -> devuelve el valor absoluto de un número
alert("El valor absoluto de -5 es: " + Math.abs(-5) + "; y el de +5 es: " + Math.abs(+5));


//MÉTODOS TRIGONOMÉTRICOS
//sin() -> seno
//cos() -> coseno
//tan() -> tangente
//asin() -> arcoseno
//acos() -> arcocoseno
//atan -> arcotangente
//atan2 -> arcotangente dos