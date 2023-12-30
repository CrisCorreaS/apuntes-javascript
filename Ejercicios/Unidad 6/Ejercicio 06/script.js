const SPANS = document.querySelectorAll("span");

let i = 0;
let resultados = [];
let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");

function numParrafos() {
  resultados.push(parrafos.length);
}

function textoParrafo2() {
  resultados.push(parrafos[1].textContent);
}

function numEnlaces() {
  resultados.push(enlaces.length);
}

function direccionPrimerEnlace() {
  resultados.push(enlaces[0].href);
}

function direccionPenultimoEnlace() {
  resultados.push(enlaces[enlaces.length - 2].href);
}

function numEnlacesApuntandoMunicipio() {
  let contadorEnlaces = 0;
  let regex = /\/wiki\/Municipio/;

  for (let j = 0; j < enlaces.length; j++) {
    if (regex.test(enlaces[j].href)) {
      contadorEnlaces++;
    }
  }

  resultados.push(contadorEnlaces);
}

function numEnlacesPrimerParrafo() {
  let enlacesPrimerParrafo = parrafos[0].getElementsByTagName("a"); // Cuidado porque aquí al principio puse let enlacesPrimerParrafo = parrafos[0].document.getElementsByTagName("a"); y está mal, de hecho da un error -> ncaught TypeError: Cannot read properties of undefined (reading 'getElementsByTagName')

  resultados.push(enlacesPrimerParrafo.length);
}

SPANS.forEach((span) => {
  switch (i) {
    case 0:
      numParrafos();
      span.innerHTML =
        "<strong>El número de párrafos de la página: </strong>" + resultados[i];
      break;
    case 1:
      textoParrafo2();
      span.innerHTML =
        "<strong>El texto del segundo párrafo:</strong> " + resultados[i];
      break;
    case 2:
      numEnlaces();
      span.innerHTML =
        "<strong>El número de enlaces de la página:</strong> " + resultados[i];
      break;
    case 3:
      direccionPrimerEnlace();
      span.innerHTML =
        "<strong>La dirección del primer enlace:</strong> " + resultados[i];
      break;
    case 4:
      direccionPenultimoEnlace();
      span.innerHTML =
        "<strong>La dirección del penúltimo enlace:</strong> " + resultados[i];
      break;
    case 5:
      numEnlacesApuntandoMunicipio();
      span.innerHTML =
        "<strong>El número de enlaces que apuntan a /wiki/Municipio:</strong> " +
        resultados[i];
      break;
    case 6:
      numEnlacesPrimerParrafo();
      span.innerHTML =
        "<strong>El número de enlaces del primer párrafo:</strong> " +
        resultados[i];
      break;
  }

  i++;
});

function textoTodosParrafos() {
  let textoTotal = "";
  for (j = 0; j < parrafos.length; j++) {
    textoTotal += parrafos[j].textContent;
  }

  console.log(textoTotal);
}

textoTodosParrafos();

document.getElementById("fileInput").addEventListener("change", function (e) {
  let file = e.target.files[0];
  let reader = new FileReader();

  reader.onload = function (e) {
    let frame = document.getElementById("frame");

    frame.contentWindow.document.open();
    frame.contentWindow.document.write(e.target.result);
    frame.contentWindow.document.close();

    let paragraphs = frame.contentWindow.document.getElementsByTagName("p");
    let links = frame.contentWindow.document.getElementsByTagName("a");
    let div = frame.contentWindow.document.getElementById("fileSpanContainer");
    let spanFile = div.getElementsByTagName("span");
    let resultadosFile = [];
    let k = 0;

    spanFile.forEach((span) => {
      switch (k) {
        case 0:
          resultadosFile.push(paragraphs.length);

          span.innerHTML =
            "<strong>El número de párrafos de la página del archivo es: </strong>" +
            resultadosFile[k];
          break;
        case 1:
          resultadosFile.push(paragraphs[1].textContent);

          span.innerHTML =
            "<strong>El texto del segundo párrafo de la página del archivo es:</strong> " +
            resultadosFile[k];
          break;
        case 2:
          resultadosFile.push(links.length);

          span.innerHTML =
            "<strong>El número de enlaces de la página del archivo es:</strong> " +
            resultadosFile[k];
          break;
        case 3:
          resultadosFile.push(links[0].href);

          span.innerHTML =
            "<strong>La dirección del primer enlace de la página del archivo es:</strong> " +
            resultadosFile[k];
          break;
        case 4:
          resultadosFile.push(links[links.length - 2].href);

          span.innerHTML =
            "<strong>La dirección del penúltimo enlace de la página del archivo es:</strong> " +
            resultadosFile[k];
          break;
        case 5:
          let contadorEnlaces = 0;
          let regex = /\/wiki\/Municipio/;

          for (let l = 0; l < links.length; l++) {
            if (regex.test(links[l].href)) {
              contadorEnlaces++;
            }
          }

          resultadosFile.push(contadorEnlaces);

          span.innerHTML =
            "<strong>El número de enlaces que apuntan a /wiki/Municipio de la página del archivo es:</strong> " +
            resultadosFile[k];
          break;
        case 6:
          let enlacesPrimerParrafo = paragraphs[0].getElementsByTagName("a"); 

          resultadosFile.push(enlacesPrimerParrafo.length);

          span.innerHTML =
            "<strong>El número de enlaces del primer párrafo de la página del archivo es:</strong> " +
            resultadosFile[k];
          break;
      }

      k++;
    });
    let textoTotal = "Los párrafos del documento";
    
    for (j = 0; j < paragraphs.length; j++) {
      textoTotal += paragraphs[j].textContent;
    }

    console.log(textoTotal);
  };

  reader.readAsText(file);
});
