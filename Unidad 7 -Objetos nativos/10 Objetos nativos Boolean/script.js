/*
Los datos primitivos de tipo boolean permiten almacenar un valor verdadero (true) o falso (false). También existen los objetos nativos Boolean, que a diferencia de los anteriores, y como dice la palabra, son objetos.

En esta lección veremos en qué consiste la función Boolean y qué podemos hacer con ella.

Además, distinguiremos qué valores son considerados ciertos en este tipo de objetos y cuáles, por el contrario, son falsos.
*/

//Función Boolean() -> Le pasamos una variable o una expresión por paréntesis y nos devuelve si es true o false
alert(Boolean(10 > 9)); //true
alert(10 > 9); //true -> Las comparaciones también devuelven true o false sin la función

//Todos los valores reales son ciertos
alert("100 es " + Boolean(100)); //true -> Los int son reales
alert("3.4899 es " + Boolean(3.4899)); //true -> Los float son reales
alert("Hola es " + Boolean("Hola")); //true -> Los String son reales
alert("'false' es " + Boolean('false')); //true -> Los String son reales incluso si dentro va un false
alert("-15 es " + Boolean(-15)); //true -> Los números negativos son reales
alert("5 < 6 es " + Boolean(5 < 6)); //true -> Las expresiones que se cumplen son reales

//Todos los valores que no son reales son falsos
alert("5 > 6 es " + Boolean(5>6)); //false -> Las expresiones que no se cumplen no son reales
alert("0 es " + Boolean(0)); //false -> El 0 no es real
alert("-0 es " + Boolean(-0)); //false -> El -0 no es real
alert("undefined es " + Boolean(undefined)); //false -> El false no es real
alert("null es " + Boolean(null)); //false -> El null no es real
alert("false es " + Boolean(false)); //false -> El false no es real
alert("NaN es " + Boolean(NaN)); //false -> El Not a Number no es real

var g;
if (!g) {
    alert("La g no está definida");
}

var h;
if (h == undefined) {
    alert("La h no está definida");
}
