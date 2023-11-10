//Cristina Correa Segade

function esNumero(variable){
  if (!isNaN(variable)){
    return 0; 
  } else { return -1; }
}

let respuesta = prompt(
  "Elige una de las opciones: \n 1- Potencia.  \n 2- Raíz. \n 3- Redondeo.  \n 4- Trigonometría"
);

if (respuesta > 0 && respuesta < 5) {
  if (respuesta == 1) {
    let x, y;

    do {
      x = parseFloat(prompt("Introduce la base de la potencia"));
      y = parseFloat(prompt("Introduce el exponente de la potencia"));
    } while (esNumero(x) === -1 || esNumero(y) === -1);
    
    let potencia = Math.pow(x, y);
    
    alert("La potencia de " + x + " elevado a " + y + " es: " + potencia);
  } else if (respuesta == 2) {
    let x = prompt("Introduce un número positivo");
    let xPositivo = Math.abs(x);
    let raiz = Math.sqrt(xPositivo);
    
    alert("La raíz de " + xPositivo + " es: " + raiz);
  } else if (respuesta == 3) {
    let x;

    do {
      x = parseFloat(prompt("Introduce un número decimal"));
    } while (esNumero(x) === -1);
    
    let xAlta = Math.ceil(x);
    let xBaja = Math.floor(x);
    let xRedondeo = Math.round(x);
    
    alert(
      "El redondeo al entero más próximo de " + x + " es: " + xRedondeo +
        "\n El redondeo de " + x +
        " al alta es: " + xAlta +
        "\n El redondeo de " + x + " a la baja es: " + xBaja
    );
  } else {
    let x; 

    do {
      x = prompt("Introduce el ángulo");
    } while (!(x >= 0 && x <= 360));
    
    let seno = Math.sin(x);
    let coseno = Math.cos(x);
    let tangente = Math.tan(x);
    
    alert(
      "El seno de " + x + " es: " + seno +
        "\n El coseno de " + x + " es: " + coseno +
        "\n La tangente de " + x + " es: " + tangente
    );
  }
} else {
  alert("No has elegido una opción válida");
}
