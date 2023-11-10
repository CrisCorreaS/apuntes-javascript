// Cristina Correa

let paises = ["España", "Portugal", "Andorra", "Francia", "Italia", "Malta"];

let respuestaMostrar = prompt(
  "¿Qué quieres que te muestre?" +
    "\nA)El número de elementos del array" +
    "\nB)Todos los elementos del array" +
    "\nC)Los elementos del array en sentido inverso" +
    "\nD)Los elementos del array ordenados alfabéticamente"
);

switch (respuestaMostrar) {
  case "A":
  case "a":
    alert("El número de países es: " + paises.length);
    break;
  case "B":
  case "b":
    alert("Los elementos del array son: " + paises.toString());
    break;
  case "C":
  case "c":
    let paisesInversos = paises.reverse();
    alert("Los elementos del array al revés son: " + paisesInversos.toString());
    break;
  case "D":
  case "d":
    alert(
      "Los elementos del array ordenados alfabéticamente son: " + paises.sort()
    );
    break;
  default:
    alert("No has escrito bien la opción");
    break;
}


let respuestaAñadir = prompt(
  "¿Cómo quieres añadir elementos en el array?" +
    "\nA)Al principio del array" +
    "\nB)Al final del array"
);

let respuestaElementoAñadir = prompt(
  "Escribe el elemento que quieras añadir"
);

switch (respuestaAñadir) {
  case "A":
  case "a":
    paises.unshift(respuestaElementoAñadir);
    alert("Los elementos del array con " + respuestaElementoAñadir + " son: " + paises.toString());
    break;
  case "B":
  case "b":
    paises.push(respuestaElementoAñadir);
    alert("Los elementos del array con " + respuestaElementoAñadir + " son: " + paises.toString());
    break;
  default:
    alert("No has escrito bien la opción");
    break;
}


let respuestaBorrar = prompt(
    "¿Cómo quieres borrar el elemento en el array?" +
      "\nA)Al principio del array" +
      "\nB)Al final del array"
);

switch (respuestaBorrar) {
    case "A":
    case "a":
      let primerElemento = paises.shift();
      alert("Se ha extraido " + primerElemento +" del array. La lista actualizada es la siguiente: " + paises.toString());
      break;
    case "B":
    case "b":
      let ultimoElemento = paises.pop();
      alert("Se ha extraido " + ultimoElemento +" del array. La lista actualizada es la siguiente: " + paises.toString());
      break;
    default:
      alert("No has escrito bien la opción");
      break;
}
 

let respuestaBuscar = prompt(
    "¿Qué quieres encontrar en el array?" +
      "\nA)El elemento según su posición" +
      "\nB)La posición de un elemento"
);

switch (respuestaBuscar) {
    case "A":
    case "a":
      let respuestaPosicion = prompt(
        "Escribe la posición del elemento"
        );
      let posicion = Number.parseInt(respuestaPosicion);
      if(posicion <= paises.length){
        alert("El elemento en la posición " + respuestaPosicion + " es: " + paises[posicion]);
      } else{
        alert("No existe un elemento en la posición " + inputValue);
      }
      break;
    case "B":
    case "b":
      let respuestaElemento = prompt(
        "Escribe el elemento del que quieras saber su posición"
      );
      if(paises.indexOf(respuestaElemento) >= 0){
        alert("La posición del elemento " + respuestaElemento + " es la posición " + paises.indexOf(respuestaElemento));
      } else{
        alert("El elemento " + respuestaElemento + " no está en el array");
      }
      break;
    default:
      alert("No has escrito bien la opción");
      break;
}