const CARTAS = document.querySelectorAll(".memory-card");
const CARTA_IMG = document.querySelectorAll(".front-face");
const SPAN = document.querySelectorAll(".mail");

let personas = [];
let contador = 0;

// Acceso y Gestión de los datos de la API
function cargarXML(xml) {
  let resultadosXML = xml.getElementsByTagName("results");

  for (let i = 0; i < resultadosXML.length - 1; i++) {
    let imagenesXML = resultadosXML[i].getElementsByTagName("picture")[0];
    let imagenXML = imagenesXML.getElementsByTagName("medium")[0].textContent;

    let persona = {
      imagen: imagenXML,
      mail: resultadosXML[i].getElementsByTagName("email")[0].textContent,
    };

    personas.push(persona);
  }

  gestionImagenes();
}

fetch("https://randomuser.me/api/?results=6&format=XML")
  .then((res) => {
    return res.ok ? res.text() : Promise.reject(res);
  })
  .then((resXML) => {
    let xml = new window.DOMParser().parseFromString(resXML, "text/xml");
    cargarXML(xml);
  })
  .catch((err) => {
    console.log("Ha habido un error " + err);
  });

function gestionImagenes() {
  CARTA_IMG.forEach((imagen) => {
    let tipoimagen = imagen.getAttribute("data-value");

    switch (tipoimagen) {
      case "0":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "1":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "2":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "3":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "4":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
      case "5":
        imagen.src = personas[Number.parseInt(tipoimagen)].imagen;
        break;
    }
    SPAN[contador].innerHTML = personas[Number.parseInt(tipoimagen)].mail;

    contador++;
  });
}

// Código del 5.6
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cont = 0;

function flipCard(e) {
  if (lockBoard) return;
  if (e.target.parentNode.firstElementChild === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = e.target.parentNode.firstElementChild;

    return;
  }

  secondCard = e.target.parentNode.firstElementChild;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.src === secondCard.src;

  if (isMatch) {
    disableCARTAS();
    cont++;
    document.getElementById("aciertos").innerHTML =
      "Número de aciertos: " + cont;
  } else {
    unflipCARTAS();
  }
}

function disableCARTAS() {
  firstCard.parentNode.removeEventListener("click", flipCard);
  secondCard.parentNode.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCARTAS() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.parentNode.classList.remove("flip");
    secondCard.parentNode.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  CARTAS.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

CARTAS.forEach((card) => card.addEventListener("click", flipCard));

// COOKIES:
let nombre = getCookie("nombre");
let visitas = getCookie("visitas");

if (!nombre) {
  nombre = prompt("Por favor, introduce tu nombre:");
  document.cookie = "nombre=" + nombre + ";";
}

if (!visitas) {
  visitas = 0;
} else {
  visitas++;
}

document.cookie = "visitas=" + visitas + ";";

alert("Hola " + nombre + ", has visitado esta página " + visitas + " veces.");

function getCookie(nombre) {
  let nom = nombre + "=";
  let array = document.cookie.split(/;/g);

  for (var i = 0; i < array.length; i++) {
    var c = array[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(nombre) == 0) {
      return c.substring(nom.length, c.length);
    }
  }
  return "";
}
