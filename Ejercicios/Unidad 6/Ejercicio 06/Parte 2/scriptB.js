const SPANS = document.querySelectorAll("#spanContainer span");
const SPANS_DOC = document.querySelectorAll("#fileSpanContainer span");
const PARRAFOS = document.getElementsByTagName("p");
const ENLACES = document.getElementsByTagName("a");
const FILE_RESULTS = document.getElementById("fileResults");

let i = 0;

function numParrafos(parrafos) {
  return parrafos.length;
}

function textoParrafo2(parrafos) {
  return parrafos[1].textContent;
}

function numEnlaces(enlaces) {
  return enlaces.length;
}

function direccionPrimerEnlace(enlaces) {
  return enlaces[0].href;
}

function direccionPenultimoEnlace(enlaces) {
  return enlaces[enlaces.length - 2].href;
}

function numEnlacesApuntandoMunicipio(enlaces) {
  let contadorEnlaces = 0;
  let regex = /\/wiki\/Municipio/;

  for (let j = 0; j < enlaces.length; j++) {
    if (regex.test(enlaces[j].href)) {
      contadorEnlaces++;
    }
  }

  return contadorEnlaces;
}

function numEnlacesPrimerParrafo(parrafos) {
  let enlacesPrimerParrafo = parrafos[0].getElementsByTagName("a"); // Cuidado porque aquí al principio puse let enlacesPrimerParrafo = parrafos[0].document.getElementsByTagName("a"); y está mal, de hecho da un error -> ncaught TypeError: Cannot read properties of undefined (reading 'getElementsByTagName')

  return enlacesPrimerParrafo.length;
}

SPANS.forEach((span) => {
  switch (i) {
    case 0:
      span.innerHTML =
        "<strong>El número de párrafos de la página: </strong>" +
        numParrafos(PARRAFOS);
      break;
    case 1:
      span.innerHTML =
        "<strong>El texto del segundo párrafo:</strong> " +
        textoParrafo2(PARRAFOS);
      break;
    case 2:
      span.innerHTML =
        "<strong>El número de enlaces de la página:</strong> " +
        numEnlaces(ENLACES);
      break;
    case 3:
      span.innerHTML =
        "<strong>La dirección del primer enlace:</strong> " +
        direccionPrimerEnlace(ENLACES);
      break;
    case 4:
      span.innerHTML =
        "<strong>La dirección del penúltimo enlace:</strong> " +
        direccionPenultimoEnlace(ENLACES);
      break;
    case 5:
      span.innerHTML =
        "<strong>El número de enlaces que apuntan a /wiki/Municipio:</strong> " +
        numEnlacesApuntandoMunicipio(ENLACES);
      break;
    case 6:
      span.innerHTML =
        "<strong>El número de enlaces del primer párrafo:</strong> " +
        numEnlacesPrimerParrafo(PARRAFOS);
      break;
  }

  i++;
});

function textoTodosParrafos(parrafos) {
  let textoTotal = "";
  for (j = 0; j < parrafos.length; j++) {
    textoTotal += parrafos[j].textContent;
  }

  console.log(textoTotal);
}

textoTodosParrafos(PARRAFOS);

document.getElementById("fileInput").addEventListener("change", function (e) {
  let file = e.target.files[0]; // Conseguimos el archivo que hemos seleccionado con el <input type="file" id="fileInput" />
  let fileReader = new FileReader(); // Creamos un objeto FileReader que permite que las aplicaciones web lean ficheros

  fileReader.onload = function (e) {
    // Una vez que leemos el archivo, actualizamos el contenido en el iframe
    let frame = document.getElementById("frame");
    frame.srcdoc = e.target.result;

    frame.onload = () => {
      // Acceemos al documento dentro del iframe
      let documento = frame.contentDocument || frame.contentWindow.document;

      let parrafosDocumento = documento.getElementsByTagName("p");
      let enlacesDocumento = documento.getElementsByTagName("a");
      let texto = "";

      texto +=
        "<p><strong>El número de párrafos de la página: </strong>" +
        numParrafos(parrafosDocumento) +
        "<br><strong>El texto del segundo párrafo: </strong> " +
        textoParrafo2(parrafosDocumento) +
        "<br><strong>El número de enlaces de la página: </strong> " +
        numEnlaces(enlacesDocumento) +
        "<br><strong>La dirección del primer enlace: </strong> " +
        direccionPrimerEnlace(enlacesDocumento) +
        "<br><strong>La dirección del penúltimo enlace: </strong> " +
        direccionPenultimoEnlace(enlacesDocumento) +
        "<br><strong>El número de enlaces que apuntan a /wiki/Municipio: </strong> " +
        numEnlacesApuntandoMunicipio(enlacesDocumento) +
        "<br><strong>El número de enlaces del primer párrafo: </strong>" +
        numEnlacesPrimerParrafo(parrafosDocumento); +"</p>";
      
      FILE_RESULTS.innerHTML = texto;
      
      textoTodosParrafos(parrafosDocumento);
    };
  };
  // Inicia la lectura del archivo como texto
  fileReader.readAsText(file);
});
