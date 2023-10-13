/*
Como siempre digo, Javascript es un lenguaje súper permisivo. Por eso los arrays en Javascript no pueden ser menos. Y es que en un mismo array podemos incluir todo tipo de datos: cadenas, números, objetos…

A la hora de crear un array podemos hacerlo de dos maneras: con corchetes o con la palabra new (no aconsejado). Y a la hora de acceder a los elementos que contiene, podemos hacerlo utilizando los corchetes y, en su interior, el número de la posición empezando por cero.

También podemos hacer otras operaciones básicas como recorrer el array desde el primer al último elemento, procesando los valores uno a uno o mediante instrucciones de visualización de datos (alert, console.log, etc.).

E incluso, cómo no, podemos utilizar el método lenght(), que nos permite conocer la longitud del array.
*/

/*
ARRAY -> Estructura de datos estática

CARACTERÍSTICAS DE LOS ARRAYS
    -Almacenan objetos o elementos en una lista -> Guarda en una misma variable múltiples variables
    -Guarda valores primitivos, objetos... 
    -Se referencian con un índice numérico a diferencia de otros objetos
        ->Un objeto se referencia con un nombre
    -Se pueden almacenar diferentes tipos de datos en un mismo array
    -Los valores del array van del 0 a x

CREAR UN ARRAY
    1.- La manera recomendada:
        -Escribimos var o let
        -Escribimos el nombre del array
        -Igualamos
        -Abrimos corchetes y escribimos los valores separados por comas

            var <nombreArray> = [<valor1>, <valor2>, <valor3>...];

    2.- La manera no recomendada -> Usando el constructor Array(). Puede dar error en algunos navegadores
        -Escribimos var o let
        -Escribimos el nombre del array
        -Igualamos
        -Escribimos la palabra new
        -Luego va el constructor Array en donde abrimos paréntesis y ponemos los valores separados por comas

            var <nombreArray> = new Array(<valor1>, <valor2>, <valor3>...);
*/

//Creación Array manera recomendada
var animales1 = ["Perro", "Gato", "Hamster"];

//Creación Array con el constructor Array()
var animales2 = new Array("Perro", "Gato", "Hamster");


// ACCESO A ELEMENTOS DE UN ARRAY:
// nombreArray[<indiceElemento>] -> El primer elemento es 0
alert(animales1[0]); //Perro
alert(animales1[1]); //Gato
alert(animales1[2]); //Hamster
alert(animales1[3]); //Undefined

var miAnimal = animales2[0];
alert(miAnimal);//Perro

//MOSTRAR TODO EL ARRAY
//Utilizando instrucciones de mostrar (alert(), document.write()...)
alert(animales1);// Perro,Gato,Hamster

//Es mejor usar un toString() a la hora de mostrar los arrays
alert(animales2).toString();// Perro,Gato,Hamster


//PROPIEDADES ARRAY
//Length -> Devuelve el número de elementos (cuenta el 0)
alert("La longitud de mi array animales es " + animales1.length); //3

//Mostrar los valores del array uno a uno:
document.write("<ul>Todos los elementos del Array son: ");
for (var i = 0; i < animales1.length; i++){
    document.write("<li>" + animales1[i] + "</li>");
}
document.write("</ul>");

