// FETCH SIN ERROR
fetch("https://jsonplaceholder.typicode.com/users", {
  // Aquí van las cabeceras
  method: "GET", // GET ya está por defecto
  /* 
    Como fetch trabaja con promesas, la resultante de fetch nos la va a dar el método "then()"
    y para capturar el código de error, nos va a dar el método "catch()". Si independientemente
    de que se ejecute en mi código o no, yo necesito que cierto código se resuelva (ej: que desaparezca
    un elemento), podemos usar el método "finally()"

    Al principio, la primera respuesta nos la va a dar como un objeto que no podemos manipular
    textualmente, tenemos que convertirla a otro formato (json, xml, texto...), para poder gestionarla

    - El método "then()" recibe una respuesta
    - El método "catch()" recibe un error
    - El método "finally()" ejecuta un mensaje
  */
})
  .then((respuesta) => {
    console.log(respuesta);
  })
  /*
    -> then() -> devuelve un objeto al que hay que darle formato:

    Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}

    Desplegado:
      Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}
      body: (...)
      bodyUsed: true
      headers: Headers {}
      ok: true -> Esto es como el readyState del xhr
      redirected: false
      status: 200
      statusText: ""
      type: "cors"
      url: "https://jsonplaceholder.typicode.com/users"
      [[Prototype]]: Response
  */
  .catch((error) => {
    console.log(error);
  })
  // Todo fue bien así que no hay error
  .finally(() => {
    console.log(
      "Esto se ejecutará independientemente del respultado de la Promesa Fetch"
    );
  });
  /*
    -> finally() -> devuelve el resultado de la función, en este caso:

    Esto se ejecutará independientemente del respultado de la Promesa Fetch
  */



// FETCH CON ERROR
fetch("https://jsonplaceholder.typicode.com/user", {}) // Ponemos la url mal con "users" sin "s"
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  })
  /*
    -> catch() -> devuelve un objeto que tiene la información del error
    
      Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/user', redirected: false, status: 404, ok: false, …}
      
      Desplegado: 
        body: (...)
        bodyUsed: false
        headers: Headers {}
        ok: false -> Esto está a false
        redirected: false
        status: 404
        statusText: ""
        type: "cors"
        url: "https://jsonplaceholder.typicode.com/user"
        [[Prototype]]: 
        Response


      Aparte de que también da el siguiente error:
        script.js:61 GET https://jsonplaceholder.typicode.com/user 404 (Not Found)
  */
  .finally(() => {
    console.log(
      "Esto se ejecutará independientemente del respultado de la Promesa Fetch"
    );
  });
  /*
    -> finally() -> devuelve el resultado de la función independientemente del error, en este caso:

    Esto se ejecutará independientemente del respultado de la Promesa Fetch
  */
