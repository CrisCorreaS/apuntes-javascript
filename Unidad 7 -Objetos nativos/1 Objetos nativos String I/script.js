/*
    Un objeto de tipo String representa una serie de caracteres dentro de una cadena. O lo que es lo mismo, en una variable de tipo cadena vamos a poder almacenar palabras, frases… cualquier cosa formada por caracteres alfanuméricos y simbólicos.
    En esta lección vamos a ver tres operaciones (llamémoslo así) esenciales en una cadena: la instanciación, la concatenación y la propiedad length.
        - Instanciación: o creación de un “ejemplar” de un objeto. Como ya vimos en la lección anterior, podemos hacerlo de dos maneras: o utilizando la palabra new o creando datos primitivos.
        - Concatenación: una operación propia de las cadenas que permite unir dos cadenas de texto en una.
        - Propiedades: en el caso de String podemos hablar de lenght, que nos permite conocer el número de caracteres de la cadena.
*/

//INSTANCIACIÓN:
var daw = "Desarrollo de aplicaciones web";
var dam = "Desarrollo de aplicaciones multiplataforma";
var asir = "Administración de 'Sistemas Informáticos' en Red"; // Poner comillas simples dentro de una cadena
var smr = 'Sistemas "Microinformáticos" y Redes'; // Poner comillas dobles dentro de una cadena -> Usamos el caracter de escape "\" y la comilla doble para que sí que se puedan usar y no den problemas: \"

alert(daw + "\n" + dam + "\n" + asir + "\n" + smr);

//CONCATENACIÓN DE CADENAS con el operador de asignación +=
var ciclos = new String("");

ciclos += "Hay 3 ciclos de Grado Superior: \n";
ciclos += daw + ", " + dam + " y " + asir + "\n \n";
ciclos += "Y un ciclo de Grado Medio: \n";
ciclos += smr;

alert(ciclos);

//PROPIEDADES:
//length: devuelve la longitud de una cadena -> devuelve un numérico
alert("La longitud de la cadena ciclos es = " + ciclos.length);