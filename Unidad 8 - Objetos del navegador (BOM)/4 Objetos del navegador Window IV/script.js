/*
Llegamos a la última lección que trata sobre el objeto window, y en esta ocasión trabajaremos con una serie de métodos muy interesantes que nos permitirán ejecutar código asociado a instrucciones de tiempo.

Concretamente hay tres métodos:
    -setTimeout(): en el que indicamos la función que queremos ejecutar y el tiempo que tiene que transcurrir (en milisegundos) antes de que ésta se ejecute.
    -clearTimeout(): si los métodos setTimeout() y setInterval() los asignamos a una variable, a clearTimeout() podemos pasarle esa variable para detener su ejecución.
    -setInterval(): con los mismos parámetros que setTimeout, en este caso repite una función cada vez que transcurre el intervalo de tiempo en milisegundos indicado.
*/

//MÉTODOS PARA GESTIONAR INSTRUCCIONES TEMPORIZADAS
/*
EVENTOS DE TIEMPO:
    -El objeto window permite ejecutar código en intervalos de tiempo
    -Hay tres métodos: setTimeout(), clearTimeout() y setInterval()
*/

//setTimeout(<funcion>, <milisegundos>) -> Se indica cuantos segundos tienen que pasar antes de que la función indicada en el primer parámetro se ejecute
function saludar() {
    alert("Hola");
}
//Lo miramos en el html esta parte


//clearTimeout(<variable timeout>) -> Si asignamos un setTimeout a una variable podemos detener su ejecución con clearTimeout()

//setInterval(<funcion>, <milisegundos>) -> Repite una función cada intervalo de tiempo (ms)
var intervalo = setInterval(reloj, 1000);

function reloj() {
    var fecha = new Date(); //Fecha actual
    document.getElementById("segundos").innerHTML = fecha.getSeconds();
}