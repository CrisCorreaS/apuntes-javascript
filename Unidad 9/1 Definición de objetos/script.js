/*
En esta primera lección aprenderemos los tres modos de hacer una definición de objetos en Javascript: de manera simple usando un literal, con la palabra reservada new o como definición de objeto propio utilizando function. Además, aprenderemos para qué se utiliza la palabra this.
Veamos la sintaxis de los tres modos de los que os hablo:

    - El primero, utilizando un literal, tiene este aspecto:
        var nombreObjeto = {
            miembro1Nombre: miembro1Valor,
            miembro2Nombre: miembro2Valor,
            miembro3Nombre: miembro3Valor
        }
    
    - Otro modo de hacerlo es utilizando la palabra reservada new:
        var nombreObjeto = new Object();
    
    - Y por último, definiendo un constructor utilizando la palabra function. ¡Ojo! ¡No confundas los objetos con funciones!
        function NombreObjeto ([argumentos_si_los_hubiese]){
            this.atributo1 = argumento1;
            this.atributo2 = argumento2;
            this.atributo3 = argumento3;
        } 
*/

/*
1.- DEFINIR Y CREAR UN OBJETO SIMPLE (clase) UTILIZANDO UN LITERAL:
    -Escribimos var o let
    -Escribimos el nombre del objeto
    -Igualamos
    -Abrimos y cerramos llaves 
        --Ponemos los atributos, dos puntos y sus valores 
        --Enumeramos los atributos entre comas

    var nombreObjeto = {atributo1:"Primer Atributo", atributo2:1234, ...};
*/
var persona1 = { nombre: "Cristina", apellido: "Correa", edad: 23 };

/*
2.- DEFINIR Y CREAR UN OBJETO SIMPLE (clase) UTILIZANDO LA PALABRA new
    -Primera sentencia
        --Escribimos var o let
        --Escribimos el nombre del objeto
        --Igualamos
        --Usamos la palabra new
        --Escribimos Object() -> es un tipo de dato Objeto

        var nombreObjeto = new Object();
    
    -Segunda sentencia
        --Escribimos el nombre del objeto
        --Ponemos un punto
        --Escribimos el nombre del atributo
        --Igualamos
        --Asignamos el valor

        nombreObjeto.atributo1 = "Primer Atributo";
        nombreObjeto.atributo2 = "Segundo Atributo";
*/
var persona2 = new Object();
persona2.nombre = "Sushma";
persona2.apellido = "Padin";
persona2.edad = 22;

/*
3.- DEFINIR UN CONSTRUCTOR DE UN OBJETO, Y CREAR OBJETOS DEL TIPO CONSTRUIDO
-La más recomendable -> Los otros casos estaban limitados porque creaban un objeto simple (una clase), en vez de crear un objeto que luego pueda tener clases

    ->Primer paso: Creamos un tipo de objeto indicando los atributos
        -Escribimos la palabra reservada function
        -Escribimos el nombre del objeto
        -Abrimos paréntesis
        -Escribimos el nombre de los atributos y los enumeramos entre comas
        -Abrimos y cerramos llaves
            --Escribimos "this"
            --Escribimos el nombre de los atributos (por el que vamos a llamar luego a los atributos) -> Lo mejor es poner el mismo nombre
            --Igualamos al nombre de atributos que hayamos puesto como parámetros 
        
        function NombreObjeto (atributo1, atributo2, atributo3){
            this.atributo1 = atributo1;
            this.atributo2 = atributo2;
            this.atributo3 = atributo3;
        }

    ->Segundo paso: Creamos la clase 
        -Escribimos var o let
        -Escribimos el nombre de la clase
        -Igualamos
        -Usamos la palabra new
        -Escribimos el nombre del objeto() -> hacemos referencia al objeto ya creado
        -Abrimos paréntesis
            --Escribimos los valores de los atributos del objeto entre comas

        var nombreClase = new NombreObjeto("Primer Atributo", "Segundo Atributo", "Tercer Atributo");
*/

function Persona(nom, ape, ed) {
    this.nombre = nom;
    this.apellido = ape;
    this.edad = ed;
}

var persona3 = new Persona("José Manuel", "Carrera", 23);
var persona4 = new Persona("Aldan", "Creo", 22);

/* THIS
    -Hace referencia al propietario de la función que está invocándose
    -Hace referencia al objeto donde la función es un método
*/