// Cristina Correa

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
let intervalo; 

const saludo = () => {
  alert("Hola");
};

const intervaloSaludo = () => {
  intervalo = setInterval(saludo, 3000); // Tenemos que guardar la variable que guarde el setInterval para usarla en el clearInterval
};

boton1.addEventListener("click", intervaloSaludo, false); 

boton2.addEventListener(
  "click",
  () => {
    clearInterval(intervalo); 
  },
  false
);