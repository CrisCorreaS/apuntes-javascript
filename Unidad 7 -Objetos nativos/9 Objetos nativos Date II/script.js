/*
Vamos a ver cómo extraer toda la información que almacena un objeto Date. Es decir, cómo obtener los días, horas, minutos, segundos… de este tipo de datos. Y cómo modificarlos uno a uno.

Veremos, por tanto:
    -Métodos de tipo get: getDay(), getDate(), getMonth(), getFullYear(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime().
    -Métodos de tipo set: setDay(), setDate(), setMonth(), setFullYear(), setHours(), setMinutes(), setSeconds(), setMilliseconds(), setTime().
*/

//MÉTODOS DE TIPO GET -> Nos dejan extraer de una fecha algún campo en particular
var fecha = new Date("October 1, 2016 10:30:20");
alert(fecha.getDay()); //Devuelve el día de la semana: 6 = Sábado
alert(fecha.getDate()); //Devuelve el día del mes: 1
alert(fecha.getMonth()); //Devuelve el mes: 9
alert(fecha.getFullYear()); //Devuelve el año: 2016
alert(
  fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + ":" + fecha.getMilliseconds()
);//Nos da la hora, los minutos, los segundos y los milisegundos -> 10:30:20:0
alert("Milisegundos desde el 1/1/1970: " + fecha.getTime()); //1475310620000


// //MÉTODOS SET -> Modifican valores de la fecha
fecha.setDate(31); //Día 31
fecha.setMonth(11); //de Diciembre
fecha.setFullYear(2031); //de 2031
fecha.setHours(23); //A las 23h
fecha.setMinutes(59); //59 minutos
fecha.setSeconds(59); //59 segundos
fecha.setMilliseconds(59); //59 milisegundos
alert("La fecha es: " + fecha); //Wed Dec 31 2031 23:59:59 GMT+0100 (hora estándar de Europa central)

//setTime(<número de ms>) -> Fecha calculada en los milisegundos que han pasado desde el 1/1/1970
fecha.setTime(1464899784689); 
alert("La fecha calculada tras pasar 1464899784689 segundos es: " + fecha.toDateString()); // Thu Jun 02 2016


//Ejemplo de cálculo de horas
alert("Fecha antes: " + fecha.toUTCString());//Thu, 02 Jun 2016 20:36:24 GMT
fecha.setMonth(fecha.getMonth() + 3); //Añadirle tres meses a la fecha
alert("Fecha después de que se le añadieron 3 meses: " + fecha.toUTCString()); //Fri, 02 Sep 2016 20:36:24 GMT
