/*
    En esta lección vamos a profundizar en algunos métodos que nos van a servir muchísimo para trabajar con este tipo de datos: los métodos de búsqueda en cadenas:
        -charAt()
        -charCodeAt()
        -fromCharCode()
        -indexOf()
        -lastIndexOf()
        -search()
        -match()

    Y además, el método de comparación localeCompare().
*/

//MÉTODOS
//BÚSQUEDA:
//CharAt(<num>) -> devuelve el caracter de una posición del 0 al x
//                  0123456789...
var holaCaracola = "¡Hola caracola!"; //Tiene 14 caracteres
alert("El caracter 6 de ¡Hola caracola! es " + holaCaracola.charAt(6)); //Devuelve c
alert("El caracter 10 de ¡Hola caracola! es " + holaCaracola.charAt(10)); //Devuelve c
alert("El caracter 14 de ¡Hola caracola! es " + holaCaracola.charAt(14)); //Devuelve !
alert("El caracter 25 de ¡Hola caracola! es " + holaCaracola.charAt(25)); //Devuelve un espacio en blanco -> Esto significa que no hay un caracter 25 en la cadena

//indexOf(<caracter>) -> devuelve la primera posición de un caracter en una cadena
alert("La primera aparición de la letra 'a' es: " + holaCaracola.indexOf("c")); //Devuelve 6
alert("La primera aparición de la letra 'p' es: " + holaCaracola.indexOf("p")); //Devuelve -1 -> Esto significa que no hay una p en la cadena

//lastIndexOf(<caracter>) -> devuelve la última posición de un caracter en una cadena
alert("La última aparición de la letra 'a' es: " + holaCaracola.lastIndexOf("c")); //Devuelve 10
alert("La última aparición de la letra 'p' es: " + holaCaracola.lastIndexOf("p")); //Devuelve -1 -> Esto significa que no hay una p en la cadena

//search(<cadena o regExp>) -> busca una cadena o expresión regular en otra cadena. Devuelve un número de la posición
alert("Busca la cadena 'caracola' en la variable holaCaracola: " + holaCaracola.search("caracola")); //Devuelve 6 que es donde empieza "caracola"
alert("Busca la cadena 'hola' en la variable holaCaracola: " + holaCaracola.search("hola")); //Devuelve -1 -> Esto significa que no hay un "hola" en "¡Hola caracola!" ya que distingue entre mayúsculas y minúsculas. hola != Hola

//match(<expresión regular>) -> busca una expresión regular en otra cadena


//COMPARACIÓN
//localeCompare(<cadena>) -> devuelve -1 (la cadena buscada va después), 0 (las dos cadenas son iguales) o 1 (la cadena buscada va antes)
var daw = "Desarrollo de Aplicaciones Web";
var dam = "Desarrollo de Aplicaciones Multiplataforma";
var asir = "Administración de 'Sistemas Informáticos' en Red";
alert("¿Es daw menor que dam? \n Resultado: " + daw.localeCompare(dam)); //Compara daw con dam y devuelve 1 -> daw va después que dam porque la "M" de Multiplataforma va antes que la "W" de Web
alert("¿Es asir menor que dam? \n Resultado: " + asir.localeCompare(dam)); //Compara asir con dam y devuelve -1 -> asir va antes que dam porque la "A" de Administración va antes que la "D" de Desarrollo
alert("¿Es daw menor que daw? \n Resultado: " + daw.localeCompare(daw)); //Compara daw consigo misma y devuelve 0 -> son cadenas iguales
