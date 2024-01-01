const TRAGAPERRAS = document.getElementsByTagName("h1");
const IMAGENES = document.querySelectorAll("img");
const VICTORIAS = document.getElementById("winCount");
const GANANCIAS = document.getElementById("ganancias");
const CALCULAR = document.getElementById("calcula");

let rutaImagenes = ["img/cereza.webp", "img/pina.webp", "img/platano.webp"];
let rutaDolar = "img/dolar.webp";
let victorias = localStorage.getItem("victorias") || 0;
let ganancias = localStorage.getItem("ganancias") || 0;
let clickFoto = 0;

// Título
TRAGAPERRAS[0].addEventListener("click", () => {
  IMAGENES.forEach((imagen) => {
    imagen.src = rutaDolar;
  });

  rutaImgsRandom = [];
  clickFoto = 0;
});

IMAGENES.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    /* Para el src, no podemos hacer (imagen.src == "img/dolar.webp") para ver si tiene esa dirección, tenemos que mirar si imagen.src incluye "img/dolar.webp" porque el navegador, interpreta imagen.src como "http://127.0.0.1:5501/Ejercicios/Extra/ej4/img/dolar.webp"
      -> También hay que tener cuidado con las "ñ" porque si ponemos imagen.src = "img/piña.webp", el navegador interpreta "http://127.0.0.1:5501/Ejercicios/Extra/ej4/img/pi%C3%B1a.webp", por lo que no se puede hacer bien el includes() con "piña.webp" porque el navegador lo interpreta como "pi%C3%B1a.webp"
    */
    if (imagen.src.includes(rutaDolar)) {
      clickFoto++;
    }

    let frutaElegida =
      rutaImagenes[Math.floor(Math.random() * rutaImagenes.length)];

    if (clickFoto <= 3 && clickFoto > 0 && imagen.src.includes(rutaDolar)) {
      imagen.src = frutaElegida;
    }

    // Para verificar si la ruta es la misma, se puede crear un array de las imágenes y comprobar si todas las imágenes cumplen una condición con el método .every()
    let frutasIguales = Array.from(IMAGENES).every((imagen) => {
      return imagen.src.includes(frutaElegida); // el método every() necesita una función que devuelva un valor, así que es imperativo poner un return en la función dentro del every()
    });

    if (frutasIguales) {
      victorias++;
      ganancias = parseInt(ganancias);

      switch (frutaElegida) {
        case "img/cereza.webp":
          ganancias += 5;
          break;
        case "img/platano.webp":
          ganancias += 10;
          break;
        case "img/pina.webp":
          ganancias += 20;
          break;
      }

      localStorage.setItem("victorias", victorias);
      localStorage.setItem("ganancias", ganancias);

      VICTORIAS.innerHTML = victorias;
    }
  });
});

CALCULAR.addEventListener("click", () => {
  GANANCIAS.innerHTML = ganancias;
});
