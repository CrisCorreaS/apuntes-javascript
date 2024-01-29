const FETCH_DOM = document.querySelector("#fetch");
const LISTA = document.querySelector("#lista");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => {
    console.log(respuesta);

    /*
      Cuando no hay errores, el objeto de la respuesta tiene un parámetro "ok" que devuelve
      "true", pero cuando los hay, devuelve "false".

      Sabiendo eso, a continuación con un operador elvis, vamos a hacer que si la respuesta
      en su parámetro "ok" es "true", nos de la respuesta ya pasada a json, y si es "false", 
      creamos una promesa que con el método "reject()" y dentro la propia respuesta, lo cual
      rechaza la promesa del fetch (todo el objeto de la respuesta). Al hacer "Promise.reject(respuesta)",
      en automático se va a ejecutar el "catch()" del error.

      Esto hace que cuando tenemos un error, se pueda manipular correctamente
    */
    return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
  })
  .then((respuestaJSON) => {
    console.log(respuestaJSON);
  })
  .catch((error) => {
    console.log("Se ha producido el siguiente error: " + error);
  })
  .finally(() => {
    console.log(
      "Esto se ejecutará independientemente del respultado de la Promesa Fetch"
    );
  });

/*
SI NO MANIPULAMOS BIEN EL ERROR (sin la promise), EL catch() DEVUELVE LO SIGUIENTE:
  GET https://jsonplaceholder.typicode.com/user 404 (Not Found)
  ----------------------------------------------------------------------------------------
  Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/user', redirected: false, status: 404, ok: false, …}
    body: ReadableStream
    bodyUsed: true
    headers: Headers {}
    ok: false
    redirected: false
    status: 404
    statusText: ""
    type: "cors"
    url: "https://jsonplaceholder.typicode.com/user"
    [[Prototype]]: Response
  -----------------------------------------------------------------------------------------
  {}
  -----------------------------------------------------------------------------------------
  Esto se ejecutará independientemente del respultado de la Promesa Fetch
  -----------------------------------------------------------------------------------------

SE MANIPULAMOS BIEN EL ERROR (con la promise), EL catch() DEVUELVE:
  GET https://jsonplaceholder.typicode.com/user 404 (Not Found)
  ----------------------------------------------------------------------------------------
  Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/user', redirected: false, status: 404, ok: false, …}
    body: ReadableStream
    bodyUsed: true
    headers: Headers {}
    ok: false
    redirected: false
    status: 404
    statusText: ""
    type: "cors"
    url: "https://jsonplaceholder.typicode.com/user"
    [[Prototype]]: Response
  -----------------------------------------------------------------------------------------
->Se ha producido el siguiente error: [object Response] -> Es el control del error que hemos hecho en el catch
  -----------------------------------------------------------------------------------------
  Esto se ejecutará independientemente del respultado de la Promesa Fetch
  -----------------------------------------------------------------------------------------
*/

// Más simple
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.ok ? res.json() : Promise.reject(res);
  })
  .then((json) => {
    console.log(json);

    json.forEach(element => {
      const li = document.createElement("li");

      li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
      LISTA.appendChild(li);
    });
  })
  .catch((err) => {
    console.log(err);

    let message = err.statusText || "Ocurrió un error";

    FETCH_DOM.innerHTML = `Error ${err.status}: ${message}`;
  })
  .finally(() => {
    console.log(
      "Esto se ejecutará independientemente del respultado de la Promesa Fetch"
    );
  });
