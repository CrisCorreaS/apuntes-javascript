/*
El objeto nativo Date se utiliza para trabajar con fechas. Entender que está formado por milisegundos desde el día 1 de enero de 1970 y tener que formatearlo siempre que queremos mostrarlo es un poco rollo.

En primer lugar, hay que entender todos los modos de crear un objeto date. Aquí tenéis varios modos:
    -new Date()
    -new Date(milisegundos)
    -new Date(cadenaFecha)
    -new Date(año_num,mes_num,dia_num [,hor_num,min_num,seg_num,mils_num])

Claro está, dependiendo de lo que introduzcamos entre paréntesis podemos obtener objetos con la fecha actual, con fechas elegidas por nosotros, con fechas formateadas a nuestro gusto…

Así que en esta lección veremos las siguientes cuestiones:

Cómo crear un objeto date con la fecha actual.
Crear fechas con cadenas como parámetro.
Crear fechas con milisegundos como parámetro.
Crear fechas con números como parámetros.
Visualizar fechas con diferentes formatos: toString, toUTCString, toDateString.
*/

/* 
CARACTERÍSTICAS DEL OBJETO DATE:
    -Los meses empiezan en 0. 0 = Enero, 1 = Febrero, 2 = Marzo...
    -Los días de la semana empiezan en 0 y por el domingo: 0 = Domingo, 1 = Lunes, 2 = Martes...
    -No se pueden poner los días y meses inferiores a 10 sin el cero delante -> 1 NO, 01 sí
*/

//Creación de fecha actual:
var actual = new Date();
alert(actual); //Sat Sep 30 2023 18:07:16 GMT+0200 (hora de verano de Europa central)

//Creación de fechas pasándole como parámetro una cadena
//En los paréntesis ponemos la cadena con la fecha que queramos pasar siempre teniendo en cuenta los formatos que se pueden utilizar
var d1 = new Date("Wed Mar 25 2015 09:23:45 GMT +0100 (W. Europe Standard Time)"); //Ignora si el día de la semana (Wed) está mal o los paréntesis (W. Europe Standard Time)
alert(d1); //Wed Mar 25 2015 09:23:45 GMT+0100 (hora estándar de Europa central)

var d2 = new Date("October 12, 2016 10:30:00");
alert(d2); //Wed Oct 12 2016 10:30:00 GMT+0200 (hora de verano de Europa central)

var d3 = new Date("January 25 2015");
alert(d3); //Sun Jan 25 2015 00:00:00 GMT+0100 (hora estándar de Europa central)

var d4 = new Date("Jan 25 2015");
alert(d4); //Sun Jan 25 2015 00:00:00 GMT+0100 (hora estándar de Europa central)

var d5 = new Date("25 Jan 2015");
alert(d5); //Sun Jan 25 2015 00:00:00 GMT+0100 (hora estándar de Europa central)


//Podemos utilizar comas porque se ignoran
var d6 = new Date("2019-05-12T12:34:25"); //año, mes, día y hora
alert(d6); //Sun May 12 2019 12:34:25 GMT+0200 (hora de verano de Europa central)

var d7 = new Date("2019-05-12"); //año, mes y día (YYYY-MM-DD)
alert(d7); //Sun May 12 2019 02:00:00 GMT+0200 (hora de verano de Europa central)

var d8 = new Date("2022/06/16"); //año, mes y día (YYYY/MM/DD)
alert(d8); //Thu Jun 16 2022 00:00:00 GMT+0200 (hora de verano de Europa central)

var d9 = new Date("2016-05"); //El día se sustituye por 1 -> 1 del 05 del 2016
alert(d9); //Sun May 01 2016 02:00:00 GMT+0200 (hora de verano de Europa central)

var d10 = new Date("2016"); //El día y el mes se sustituyen por 1 -> 1 del 01 del 2016
alert(d10); //Fri Jan 01 2016 01:00:00 GMT+0100 (hora estándar de Europa central)


//CREACIÓN DE FECHA CON MILISEGUNDOS
var datems = new Date(86400000);
alert("Fecha en milisegundos = " + datems); //Fri Jan 02 1970 01:00:00 GMT+0100 (hora estándar de Europa central)

//CREACIÓN DE FECHAS CON NÚMEROS
//Hay dos formas: 
//La larga donde se pone -> año, mes, día, hora, minutos, segundos
//La corta donde se pone -> año, mes, día
var fechaLarga = new Date(2015, 11, 10, 14, 30, 25);
var fechaCorta = new Date(2015, 11, 10)

alert("Fecha larga " + fechaLarga + " Fecha corta: " + fechaCorta);


//VISUALIZAR FECHAS:
var fecha = new Date();
alert("Fecha: " + fecha); //Fecha: Sat Sep 30 2023 19:09:22 GMT+0200 (hora de verano de Europa central)
alert("toString: " + fecha.toString()); //toString: Sat Sep 30 2023 19:09:22 GMT+0200 (hora de verano de Europa central)
alert("toUTCString: " + fecha.toUTCString()); //toUTCString: Sat, 30 Sep 2023 17:09:22 GMT
alert("toDateString: " + fecha.toDateString()); //toDateString: Sat Sep 30 2023