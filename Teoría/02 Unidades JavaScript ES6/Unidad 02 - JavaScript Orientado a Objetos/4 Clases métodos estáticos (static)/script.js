/*
Terminamos esta parte de clases viendo los métodos estáticos, para lo cual utilizamos la palabra reservada static.
Al igual que ocurre en otros lenguajes de programación, un método estático se llama directamente sin instanciar la clase (es decir, sin necesidad de crear un objeto). De hecho, si tratáramos de llamar a un método estático a partir de un objeto obtendríamos un error.
Este tipo de métodos se utilizan sobre todo para crear funciones de utilidad en una aplicación.

Para crear un método estático no hay más que utilizar la siguiente sintaxis:

    static nombreMetodo (parametros) { //código }

Utilizamos "static" para definir un método estático en una clase
Al igual que en otros lenguajes de programación, un método estático se llama diréctamente sin instanciar la clase (de hecho, no puede hacerse mediante una instancia de clase)
Se suelen utilizar para crear funciones útiles en una aplicación
No es necesario crear un objeto para llamar a un método estático
Debería de hacerse una única funcionalidad en cada método siguiendo el principio de responsabilidad única
*/

window.addEventListener("load", function(){
    class Rectangulo{
        constructor(x, y){
            this._x = x;
            this._y = y;
        }

        static area (a, b){
            return a * b;
        }

        static perimetro (a, b){
            return a * 2 + b * 2;
        }
    }

    let rectangulo = new Rectangulo(2, 3);

    //No funcionan porque no se puede usar el objeto
    alert(rectangulo.area(2,3)); //Da un error: Uncaught TypeError: rectangulo.area is not a function
    alert(rectangulo.perimetro(2, 3)); //Da un error: Uncaught TypeError: rectangulo.perimetro is not a function

    //Funciona porque se usa la clase
    alert(Rectangulo.area(2, 3)); //6
    alert(Rectangulo.perimetro(2, 3)); //10
}, true);