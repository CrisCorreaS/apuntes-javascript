// Cristina Correa
const mousePositionElement = document.getElementById("mouse-position");

document.addEventListener("mousemove", function (event) {
  let x = event.clientX; // Coordenada X del ratón
  let y = event.clientY; // Coordenada Y del ratón

  // Actualiza el contenido del elemento con las nuevas coordenadas
  mousePositionElement.textContent = `Posición del ratón: X: ${x}, Y: ${y}`;
});
