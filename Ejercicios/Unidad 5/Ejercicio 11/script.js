const BOTON = document.getElementById("miBoton");

BOTON.addEventListener("mouseover", function () {
  // Genera una nueva posición aleatoria para el botón
  let nuevaPosicionTop = Math.floor(Math.random() * window.innerHeight);
  let nuevaPosicionLeft = Math.floor(Math.random() * window.innerWidth);

  // Aplica la nueva posición al botón
  BOTON.style.position = "absolute";
  BOTON.style.top = nuevaPosicionTop + "px";
  BOTON.style.left = nuevaPosicionLeft + "px";
});
