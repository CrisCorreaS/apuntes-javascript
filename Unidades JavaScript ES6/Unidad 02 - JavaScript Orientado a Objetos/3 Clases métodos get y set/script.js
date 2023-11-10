/*
Los métodos get() y set() se utilizan para asignar y extraer atributos de un objeto.

Es muy importante tener en cuenta que el nombre de los guetters y de los setters no puede ser el mismo que el de la propiedad porque se produciría un bucle infinito:
    Al acceder a la propiedad invocaríamos al método que a su vez accede a la propiedad que invoca al método... y así sucesivamente, creando un bucle infinito
Por esto, muchos desarrolladores utilizan el guión bajo para nombrear la propiedad
*/

window.addEventListener("load", function(){
    class Telefono{
        constructor(marca){
            this._marca = marca; // Ahora ponemos en el this. la propiedad con un guión bajo
        }

        //Getter:
        get marca() {
            return this._marca;
        }

        //Setter:
        set marca(marcaPropiedad){
            this._marca = marcaPropiedad;
        }
    }

    //Objetos:
    let miTelefono = new Telefono("Google");

    //Getter y Setter
    miTelefono.marca = "iPhone"; //Usamos un setter aquí
    this.alert("Mi teléfono es un " + miTelefono.marca); //Mi teléfono es un iPhone -> Usamos 
    
}, true);