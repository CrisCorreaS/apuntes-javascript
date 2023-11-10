//Cristina Correa Segade

function ejecutar(){
    let opcion= document.getElementById("opcion").value;
 switch(opcion){
 case "1": 
       potencia(); 
       break;
 case "2": 
       raiz(); 
       break;
 case "3": 
       redondeo(); 
       break;
 case "4": 
       trigonometria(); 
       break;
 default: alert("Has introducido mal la opción") ;break;
 }
 
 }
 function potencia(){
    let base = prompt("Introduce la base");
    let exponente = prompt("Introduce el exponente");
    let resultado= Math.pow(base,exponente);
    alert("La potencia de "+base+" elevado a "+exponente+" es:"+ resultado);
 }
 function raiz(){
    let numero=prompt("Introduce un número");
    let resultado= Math.sqrt(numero);
    alert("La raiz cuadrada de "+numero+" es:"+ resultado);
 }
 function redondeo(){
    let numero=prompt("Introduce un número decimal");
    let resultado= Math.round(numero);
    alert("El redondeo de "+numero+" es:"+ resultado);
 }
 function trigonometria(){
    let angulo=prompt("Introduce un angulo");
    let seno= Math.sin(angulo);
    let coseno= Math.cos(angulo);
    let tangente= Math.tan(angulo);
    alert("El angulo "+angulo+" tiene un seno de: "+ seno+ " tiene un coseno de: "+ coseno+" tiene una tangente de: "+ tangente);
 }