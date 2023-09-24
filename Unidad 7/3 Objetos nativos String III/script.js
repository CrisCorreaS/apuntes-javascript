/*
    Los métodos más importantes que deberías conocer para seguir trabajando con cadenas son:

    -Métodos para saber si una cadena incluye, empieza o termina con otra.
    -Métodos para concatenar una cadena o repetirla tantas veces como necesitemos.
    -Métodos de extracción de subcadenas dentro de una cadena.
    -Métodos para cambiar una cadena a mayúsculas o minúsculas.
    -Y un par de métodos especiales.
*/

// INCLUYE, EMPIEZA O TERMINA
// includes(<cadena>) -> devuelve true si la cadena incluye el parámetro
var daw = "Desarrollo de Aplicaciones Web";
var dam = "Desarrollo de Aplicaciones Multiplataforma";
var asir = "Administración de 'Sistemas Informáticos' en Red";

alert("¿Incluye 'Aplicaciones' daw? " + daw.includes("Aplicaciones")); //true

//startsWith(<cadena>) -> devuelve true si la cadena empieza con el parámetro
alert("¿Empieza daw con la palabra 'Aplicaciones'? " + daw.startsWith("Aplicaciones")); //false
alert("¿Empieza daw con la palabra 'Desarrollo'? " + daw.startsWith("Desarrollo")); //true

//endsWith(<cadena>) -> devuelve true si la cadena finaliza con el parámetro
alert("Termina daw con la palabra 'Web'? " + daw.endsWith("Web")); //true
alert("Termina daw con la palabra 'Aplicaciones Web'? " + daw.endsWith("Aplicaciones Web")); //true


//CONCATENACIÓN Y REPETICIÓN
//concat(<cadena>) -> concatena el parámetro a la cadena: cadena + parámetro 
alert("Concatena daw con dam \n" + daw.concat(dam)); //Desarrollo de Aplicaciones WebDesarrollo de Aplicaciones Multiplataforma

//repeat(<número>) -> repite la cadena el número de veces que aparece como parámetro
alert("Repetir daw tres veces: " + daw.repeat(3)); //Desarrollo de Aplicaciones WebDesarrollo de Aplicaciones WebDesarrollo de Aplicaciones Web


//EXTRACCIÓN
//slice(<posición inicial>, <posición final>) -> devuelve la cadena comprendida entre ambas posiciones
alert(
  "La cadena que hay entre el caracter 4 y el 10 en la cadena dam es: " + dam.slice(4, 10)); //rrollo
alert("El primer caracter de la cadena dam es: " + dam.slice(0, 1)); //D

//slice(<posición inicial>) -> devuelve la cadena comprendida desde la posición inicial hasta el fin de la cadena. Si ponemos -1 nos da el último caracter de la cadena
alert("La cadena que hay desde el caracter 4 en la cadena dam es: " + dam.slice(4)); //rrollo de Aplicaciones Multiplataforma
alert("El último caracter de la cadena dam es: " + dam.slice(-1)); //a

//substring(<posición inicial>, <posición final>) -> devuelve la cadena comprendida entre ambas posiciones
//Funciona como slice() pero si le ponemos -1 no devuelve el último caracter de la cadena
alert("La cadena que hay desde el caracter 8 hasta el 15 es : " + daw.substring(8, 15)); //lo de A

//substr(<posición inicial>, <número de caracteres>) -> devuelve la cadena comprendida desde la posición inicial hasta cumplir el número de caracteres
//Es una variable de substring()
alert("La cadena de 5 caracteres que hay a partir del caracter 7 de daw es: " + daw.substr(7, 5)); //llo d

//split(<caracter>, [<número de veces>]) -> divide la cadena en un array de subcadenas separadas por el caracter del primer parámetro. Si no se pone parámetro, separa cada una de las letras
alert("La cadena daw separada por espacios es: " + daw.split(" ")); //Desarrollo,de,Aplicaciones,Web
alert("Las dos primeras palabras de daw son: " + daw.split(" ", 2)); //Desarrollo,de

//trim(<cadena>) -> extrae los caracteres de la cadena eliminando los espacios del principio y del final.
alert("La cadena sin espacios quedaría: \n" + "        Hola, caracola       ".trim()); //Hola, caracola


//MAYÚSCULAS Y MINÚSCULAS
//toLowerCase() -> devuelve la cadena en minúsculas:
alert(daw.toLowerCase()); //desarrollo de aplicaciones web

//toUpperCase() -> devuelve la cadena en mayúsculas:
alert(daw.toUpperCase()); //DESARROLLO DE APLICACIONES WEB


//MÉTODOS ESPECIALES
//toString() -> devuelve el valor del objeto String
//valueOf() -> devuelve el valor primitivo del objeto