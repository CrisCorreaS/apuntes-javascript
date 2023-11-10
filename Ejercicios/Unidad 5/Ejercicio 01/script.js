// Cristina Correa
const elementoRaton = document.getElementById("mouse-position");

document.addEventListener("mousemove", function (event) {
  let x = event.clientX; // Coordenada X del ratón
  let y = event.clientY; // Coordenada Y del ratón

  // Actualiza el contenido del elemento con las nuevas coordenadas
  elementoRaton.textContent = `Posición del ratón: X: ${x}, Y: ${y}`; // "textContent" es como "innerHTML" con la diferencia de que, "textContent" devuelve Strings de texto que no pueden ser interpretadas como html, pero el texto de "innerHTML" sí que puede ser interpretado como html
});
