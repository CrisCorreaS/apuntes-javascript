const SETUP = document.querySelector("#setup");
const PUNCH_LINE = document.querySelector("#punchline");
const NUEVA = document.querySelector("i");
const CONTAR_BROMAS = document.querySelector("#contador");

let bromas = [];
let contador = 0;

function showBroma() {
  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.open("GET", "https://official-joke-api.appspot.com/jokes/random", true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let bromasJSON = xhr.response;
      bromas.push({ setup: bromasJSON.setup, punchline: bromasJSON.punchline });

      SETUP.innerHTML = "";
      PUNCH_LINE.innerHTML = "";
      CONTAR_BROMAS.innerHTML = "";

      SETUP.innerHTML = bromas[contador].setup;
      PUNCH_LINE.innerHTML = bromas[contador].punchline;
      CONTAR_BROMAS.innerHTML = "Broma número " + (contador + 1);

      contador++;
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", showBroma, false);
NUEVA.addEventListener("click", showBroma, false);