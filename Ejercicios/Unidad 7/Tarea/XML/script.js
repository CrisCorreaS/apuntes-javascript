let SELECT_FROM = document.querySelector("#from");
let SELECT_TO = document.querySelector("#to");

let monedas = [];


function cargarXML(xml) {
  let documentoXML = xml.responseXML;
  let resultadosXML = documentoXML.getElementsByTagName("Rate");

  for (let i = 0; i < resultadosXML.length; i++) {
    let iTxt = i.toString();

    switch (iTxt) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "6":
      case "7":
    
        let moneda = {
          siglas: resultadosXML[i].getElementsByTagName("Code")[0].textContent,
          precio: resultadosXML[i].getElementsByTagName("Ask")[0].textContent,
        };

        monedas.push(moneda);
    }
  };


  // Crear Selects
  let i = 1;
  
    monedas.forEach((moneda) => {
      let opcion = documentoXML.createElement("option");
      let textoOpcion = documentoXML.createTextNode(moneda.siglas);
      

      opcion.value = i;

      opcion.appendChild(textoOpcion);
      SELECT_FROM.appendChild(opcion);
      SELECT_TO.appendChild(opcion);

      i++;
    });

}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    cargarXML(this);
  }
};
xhr.open(
  "GET",
  "https://api.nbp.pl/api/exchangerates/tables/c/?format=xml", // Cuidado con poner lo del formato xml esprofeso
  true
);
xhr.send();
