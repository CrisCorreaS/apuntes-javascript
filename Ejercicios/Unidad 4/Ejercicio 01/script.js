// Cristina Correa

import * as arrays from "./arrays.js";

let paises = ["España", "Portugal", "Andorra", "Francia", "Italia", "Malta"];

window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("salida");

    document.getElementById("b1").addEventListener("click",ejecuta,true);
}

function ejecuta() {
    let menuOpcion = document.getElementById("opcion").value;
    let salida = document.getElementById("salida");

    switch (menuOpcion) {
        case "1":
            salida.innerHTML = `Numero de paises: ${arrays.mostrarNumeroElementos(paises)}`;
            break;
        case "2":
            salida.innerHTML = `Los paises son: ${arrays.mostrarElementos(paises)}`;
            break;
        case "3":
            salida.innerHTML = `Los paises en sentido inverso son: ${arrays.mostrarInversos(paises)}`;
            break;
        case "4":
            salida.innerHTML = `Los paises ordenados alfabéticamente son: ${arrays.mostrarOrdenados(paises)}`;
            break;
        case "5":
            let elementoAddPrincipio = prompt("Escribe el pais que quieras añadir al inicio de la lista de paises");
            salida.innerHTML = "Se ha añadido " + elementoAddPrincipio + ` al principio de la lista de paises: ${arrays.addPrincipio(paises,elementoAddPrincipio)}`;
            break;
        case "6":
            let elementoAddFinal = prompt("Escribe el pais que quieras añadir al final de la lista de paises");
            salida.innerHTML = "Se ha añadido " + elementoAddFinal + ` al final de la lista de paises: ${arrays.addFinal(paises,elementoAddFinal)}`;
            break;
        case "7":
            salida.innerHTML = "Se ha borrado " + paises[0] + ` al inicio de la lista de paises: ${arrays.deletePrincipio(paises)}`;
            break;
        case "8":
            salida.innerHTML = "Se ha borrado " + paises[paises.length] + ` al final de la lista de paises: ${arrays.deleteFinal(paises)}`;
            break;
        case "9":
            let posicion = prompt("Escribe la posición del pais que estás buscando");
            salida.innerHTML = "El país número " + posicion + ` es: ${arrays.mostrarPaisSegunPosicion(paises,posicion)}`;
            break;
        case "10":
            let pais = prompt("Escribe el país que estás buscando");
            salida.innerHTML = "El país " + pais + ` está en la posición: ${arrays.mostrarPosicionSegunPais(paises,pais)}`;
            break;
        default:
            salida.innerHTML = "Has escrito mal la opción";
            break;
    }
}