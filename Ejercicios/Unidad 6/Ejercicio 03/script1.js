/*
El formulario del ejercicio 5.5:
  <form id="formDisco">
    <label for="name" id="nombre">Nombre del disco</label>
    <input type="text" id="name" placeholder="Nombre del disco" maxlength="20" pattern="^[\s\S]{1,20}$" required />
    <br />
    <label for="group" id="grupo">Grupo o cantante</label>
    <input type="text" id="group" placeholder="Grupo o cantante" maxlength="20" pattern="^[\s\S]{1,20}$" required />
    <br />
    <label for="ano" id="year">Año de publicación</label>
    <input type="number" id="ano" placeholder="Año de publicación" maxlength="4" min="0" max="2023" />
    <br />
    <label for="type">Tipo de música</label>
    <select id="type" placeholder="Tipo de música">
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="punk">Punk</option>
        <option value="indie">Indie</option>
    </select>
    <br />
    <label for="localization" id="localizacion">Localización</label>
    <input type="number" id="localization" placeholder="Localización" pattern="^(|[\d]+)$" />
    <br />
    <label for="lent">Prestado</label>
    <input type="checkbox" id="lent" placeholder="Prestado" /><br /><br />
    <button type="submit" id="enviar">Añadir Disco</button>
  </form>
*/

import Disco from "./disco.js";

const DIV_FORM = document.getElementById("divForm");

let discos = [];

function crearFormulario() {
  // Etiqueta formulario: <form id="formDisco">
  let formulario = document.createElement("form");

  formulario.id = "formDisco";

  // Etiqueta label del nombre: <label for="name" id="nombre">Nombre del disco</label>
  let labelNombre = document.createElement("label");
  let textoLabelNombre = document.createTextNode("Nombre del disco ");

  labelNombre.for = "name";
  labelNombre.id = "nombre";

  labelNombre.appendChild(textoLabelNombre);
  formulario.appendChild(labelNombre);

  // Etiqueta input del nombre: <input type="text" id="name" placeholder="Nombre del disco" maxlength="20" pattern="^[\s\S]{1,20}$" required />
  let inputNombre = document.createElement("input");

  inputNombre.type = "text";
  inputNombre.id = "name";
  inputNombre.placeholder = "Nombre del disco";
  inputNombre.maxLength = "20";
  inputNombre.pattern = "^[\s\S]{1,20}$";
  inputNombre.required = "true";

  formulario.appendChild(inputNombre);

  // Etiqueta <br>
  let brNombre = document.createElement("br");

  formulario.appendChild(brNombre);

  /* Etiqueta label del grupo: 
    <label id="grupo">Grupo o cantante
      <input type="text" id="group" placeholder="Grupo o cantante" maxlength="20" pattern="^[\s\S]{1,20}$" required />
    </label>
  */
  let labelGrupo = document.createElement("label");
  let textoLabelGrupo = document.createTextNode("Grupo o cantante ");
  let inputGrupo = document.createElement("input");

  inputGrupo.type = "text";
  inputGrupo.id = "group";
  inputGrupo.placeholder = "Grupo o cantante";
  inputNombre.maxLength = "20";
  inputNombre.pattern = "^[\s\S]{1,20}$";
  inputNombre.required = "true";
  labelGrupo.id = "grupo";

  labelGrupo.appendChild(textoLabelGrupo);
  labelGrupo.appendChild(inputGrupo);
  formulario.appendChild(labelGrupo);

  // Etiqueta <br>
  let brGrupo = document.createElement("br");

  formulario.appendChild(brGrupo);

  // Etiqueta label del año: <label for="ano" id="year">Año de publicación</label>
  let labelAno = document.createElement("label");
  let textoLabelAno = document.createTextNode("Año de publicación ");

  labelAno.for = "ano";
  labelAno.id = "year";

  labelAno.appendChild(textoLabelAno);
  formulario.appendChild(labelAno);

  // Etiqueta input del año: <input type="number" id="ano" placeholder="Año de publicación" maxlength="4" min="0" max="2023" />
  let inputAno = document.createElement("input");

  inputAno.type = "number";
  inputAno.id = "ano";
  inputAno.placeholder = "Año de publicación";
  inputAno.maxLength = "4";
  inputAno.min = "0";
  inputAno.max = "2023";

  formulario.appendChild(inputAno);

  // Etiqueta <br>
  let brAno = document.createElement("br");

  formulario.appendChild(brAno);

  // Etiqueta label del tipo de música: <label for="type">Tipo de música</label>
  let labelTipo = document.createElement("label");
  let textoLabelTipo = document.createTextNode("Tipo de música ");

  labelTipo.for = "type";

  labelTipo.appendChild(textoLabelTipo);
  formulario.appendChild(labelTipo);

  /* Etiqueta select del tipo de música
  <select id="type" placeholder="Tipo de música">
    <option value="rock">Rock</option>
    <option value="pop">Pop</option>
    <option value="punk">Punk</option>
    <option value="indie">Indie</option>
  </select>
  */
  let selectTipo = document.createElement("select");
  let textos = ["Rock", "Pop", "Punk", "Indie"];

  selectTipo.id = "type";
  selectTipo.placeholder = "Tipo de música";

  textos.forEach((texto) => {
    let opcion = document.createElement("option");
    opcion.value = texto.toLowerCase();

    let textoOpcion = document.createTextNode(texto);

    opcion.appendChild(textoOpcion);
    selectTipo.appendChild(opcion);
  });

  formulario.appendChild(selectTipo);

  /*
  Lo que ponemos en el bucle forEach, es literamente todo este código:

  let opcion1 = document.createElement("option");
  let opcion2 = document.createElement("option");
  let opcion3 = document.createElement("option");
  let opcion4 = document.createElement("option");
  opcion1.value = "rock";
  opcion2.value = "pop";
  opcion3.value = "punk";
  opcion4.value = "indie";

  let textoOpcion1 = document.createTextNode("Rock");
  let textoOpcion2 = document.createTextNode("Pop");
  let textoOpcion3 = document.createTextNode("Punk");
  let textoOpcion4 = document.createTextNode("Indie");
  
  opcion1.appendChild(textoOpcion1);
  opcion2.appendChild(textoOpcion2);
  opcion3.appendChild(textoOpcion3);
  opcion4.appendChild(textoOpcion4);
  selectTipo.appendChild(opcion1);
  selectTipo.appendChild(opcion2);
  selectTipo.appendChild(opcion3);
  selectTipo.appendChild(opcion4);
  */

  // Etiqueta <br>
  let brTipo = document.createElement("br");

  formulario.appendChild(brTipo);

  // Etiqueta label de la localización: <label for="localization" id="localizacion">Localización</label>
  let labelLocalizacion = document.createElement("label");
  let textoLabelLocalizacion = document.createTextNode("Localización ");

  labelLocalizacion.for = "localization";
  labelLocalizacion.id = "localizacion";

  labelLocalizacion.appendChild(textoLabelLocalizacion);
  formulario.appendChild(labelLocalizacion);

  // Etiqueta input de la localización: <input type="number" id="localization" placeholder="Localización" pattern="^(|[\d]+)$" />
  let inputLocalizacion = document.createElement("input");

  inputLocalizacion.type = "number";
  inputLocalizacion.id = "localization";
  inputLocalizacion.placeholder = "Localización";
  inputLocalizacion.pattern = "^(|[\d]+)$";

  formulario.appendChild(inputLocalizacion);

  // Etiqueta <br>
  let brLocalizacion = document.createElement("br");

  formulario.appendChild(brLocalizacion);

  // Etiqueta label de prestado: <label for="lent">Prestado</label>
  let labelPrestado = document.createElement("label");
  let textoLabelPrestado = document.createTextNode("Prestado ");

  labelPrestado.id = "lent";

  labelPrestado.appendChild(textoLabelPrestado);
  formulario.appendChild(labelPrestado);

  // Etiqueta input de prestado: <input type="checkbox" id="lent" placeholder="Prestado" />
  let inputPrestado = document.createElement("input");

  inputPrestado.type = "checkbox";
  inputPrestado.id = "lent";
  inputPrestado.placeholder = "Prestado";

  formulario.appendChild(inputPrestado);

  // Etiquetas <br>
  let brPrestado1 = document.createElement("br");
  let brPrestado2 = document.createElement("br");

  formulario.appendChild(brPrestado1);
  formulario.appendChild(brPrestado2);

  // Etiqueta button submit: <button type="submit" id="enviar">Añadir Disco</button>
  let buttonSubmit = document.createElement("button");
  let textoButtonSubmit = document.createTextNode("Añadir Disco ");

  buttonSubmit.type = "submit";
  buttonSubmit.id = "enviar";

  buttonSubmit.appendChild(textoButtonSubmit);
  formulario.appendChild(buttonSubmit);

  // Ponemos el formulario dentro de la etiqueta div
  DIV_FORM.appendChild(formulario);
  document.getElementById("enviar").addEventListener("click", mostrarDiscos, false);
}

crearFormulario();


function crearDisco(event) {
  event.preventDefault();

  let nombre = document.getElementById("name").value;
  let grupo = document.getElementById("group").value;
  let year = document.getElementById("ano").value;
  let tipo = document.getElementById("type").value;
  let localizacion = document.getElementById("localization").value;
  let prestado = document.getElementById("lent").checked;

  let disco = new Disco(nombre, grupo, year, tipo, localizacion, prestado);
  discos.push(disco);
}

function mostrarDiscos(e) {
  crearDisco(e);

  let cantidadDiscos = discos.length;
  let discoNuevo = discos[cantidadDiscos - 1];

  let tabla = `<table border="1"><tr><th>Posicion</th><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th><th>Prestado</th></tr>`;
  let discosOrdenados = discos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  let i = 0;

  discosOrdenados.forEach((disco) => {
    i++;
    let claseDisco = disco == discoNuevo ? "discoNuevo" : "discoViejo";

    tabla +=
      `<tr class='${claseDisco}'><td>` +
      i +
      `</td><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.year}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td></tr>`;
  });

  tabla += `</table>`;

  document.getElementById("discos").innerHTML = tabla;
}
