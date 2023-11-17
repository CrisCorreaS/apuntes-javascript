const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cont = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if(isMatch){
    disableCards();
    cont ++;
    document.getElementById("aciertos").innerHTML = "Número de aciertos: " + cont;
  } else{
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));


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
