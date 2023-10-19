/*
Como en todos los lenguajes de programación, los objetos tienen lo que se denominan propiedades de un objeto (en otros lenguajes llamados atributos), que no son más que sus características.

Hay varios modos de acceder a las propiedades de un objeto:
    objeto.propiedad
    objeto["propiedad"]
    objeto[expresión]
    // En este caso los paréntesis no son opcionales

Además, podemos recorrer todas las propiedades que tiene un objeto utilizando un bucle for in, algo que ya vimos en el apartado 4 de la Unidad 5.
No obstante, es posible añadir y borrar propiedades de un objeto en concreto de una manera tan sencilla como asignándole un valor en el primer caso, o utilizando la operación delete delante del objeto seguido de la propiedad a borrar.
*/

/*
SINTAXIS DE ACCESO A LOS ATRIBUTOS DE UN OBJETO (Sabiendo su nombre)
    1- nombreObjeto.atributo;
    2- nombreObjeto["atributo"];
    3- nombreObjeto[expresion] -> la expresión va a hacer referencia al atributo
*/

var persona1 = { nombre: "Cristina", apellido: "Correa", edad: 23 };

//1- nombreObjeto.atributo;
alert(persona1.nombre); //Cristina

//2- nombreObjeto["atributo"];
alert(persona1["apellido"]); //Correa

//3- nombreObjeto[expresion]
var expresion = "edad";
alert(persona1[expresion]); //23


/*
RECORRER LOS ATRIBUTOS DE UN OBJETO:
    for(<nombreVariable> in <nombreObjeto>){
        <nombreObjeto>[<nombreVariable>];
    }
*/

for (x in persona1) {
    alert(persona1[x]); //Recorre todos los atributos -> Cristina / Correa / 23
}

/*
AÑADIR UN ATRIBUTO A UN OBJETO
    <nombreObjeto>.<nombreNuevoAtributo> = <valorNuevoAtributo>;
*/
persona1.nacionalidad = "Española";
alert(persona1.nacionalidad); //Española


/*
BORRAR UN ATRIBUTO DE UN OBJETO:
    delete <nombreObjeto>.<nombreAtributo>;
*/

delete persona1.edad;
for (x in persona1) {
  alert(persona1[x]); //Recorre todos los atributos -> Cristina / Correa / Española
}