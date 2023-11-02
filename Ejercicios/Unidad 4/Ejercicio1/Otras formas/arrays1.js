//Cristina Correa

let paises = ["España", "Portugal", "Andorra", "Francia", "Italia", "Malta"];

// a- Mostrar el número de elementos del array.
document.getElementById("numeroPaises").innerHTML = ("El número de países es: " + paises.length);

// b- Mostrar todos los elementos del array.
document.getElementById("elementosArray").innerHTML = ("Los elementos del array son: " + paises.toString());

// c- Muestra los elementos del array en sentido inverso.
let paisesInversos = paises.reverse();
document.getElementById("elementosArrayInversos").innerHTML = ("Los elementos del array al revés son: " + paisesInversos.toString());


// d- Muestra los elementos del array ordenados alfabéticamente.
document.getElementById("elementosArrayOrdenados").innerHTML = ("Los elementos del array ordenados alfabéticamente son: " + paises.sort());


// e- Añadir un elemento solicitado al usuario al principio del array.
document.getElementById("formAñadirPaisPrincipio").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const inputValue = document.getElementById("myInputAñadirPaisPrincipio").value; // Obtiene el valor del campo de entrada
  paises.unshift(inputValue);
  document.getElementById("elementoAñadirPrincipio").innerHTML = ("Los elementos del array con " + inputValue + " son: " + paises.toString());
});

// f- Añadir un elemento solicitado al usuario al final del array.
document.getElementById("formAñadirPaisFinal").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const inputValue = document.getElementById("myInputAñadirPaisFinal").value; // Obtiene el valor del campo de entrada
  paises.push(inputValue);
  document.getElementById("elementoAñadirFinal").innerHTML = ("Los elementos del array con " + inputValue + " son: " + paises.toString());
});

// g- Borrar un elemento al principio del array  (y decir cuál se ha borrado).
let primerElemento = paises.shift();
document.getElementById("elementoBorrarPrincipio").innerHTML = ("Se ha extraido " + primerElemento +" del array. La lista actualizada es la siguiente: " + paises.toString());

// h- Borrar un elemento al final del array (y decir cuál se ha borrado).
let ultimoElemento = paises.pop();
document.getElementById("elementoBorrarFinal").innerHTML = ("Se ha extraido " + ultimoElemento +" del array. La lista actualizada es la siguiente: " + paises.toString());

// i- Muestra el elemento que se encuentra en una posición que el usuario indica.
document.getElementById("formBuscarElementoSegunPosicion").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const inputValue = document.getElementById("myInputBuscarElementoSegunPosicion").value; // Obtiene el valor del campo de entrada
  let posicion = parseInt(inputValue);  
  if(posicion<=paises.length){
    document.getElementById("elementoBuscarSegunPosicion").innerHTML = ("El elemento en la posición " + inputValue + " es: " + paises[posicion]);
  } else{
    document.getElementById("elementoBuscarSegunPosicion").innerHTML = ("No existe un elemento en la posición " + inputValue);
  }
  
});

// j- Muestra la posición en la que se encuentra un elemento que le indica el usuario.
document.getElementById("formBuscarPosicionSegunElemento").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const inputValue = document.getElementById("myInputBuscarPosicionSegunElemento").value; // Obtiene el valor del campo de entrada
  if(paises.indexOf(inputValue)>=0){
    document.getElementById("posicionBuscarSegunElemento").innerHTML = ("La posición del elemento " + inputValue + " es la posición " + paises.indexOf(inputValue));
  } else{
    document.getElementById("posicionBuscarSegunElemento").innerHTML = ("El elemento " + inputValue + " no está en el array");
  }
});