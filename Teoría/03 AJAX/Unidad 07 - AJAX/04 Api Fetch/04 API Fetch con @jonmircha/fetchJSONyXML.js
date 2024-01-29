// FETCH CON JSON
fetch("https://jsonplaceholder.typicode.com/users", {})
  .then((respuesta) => {
    console.log(respuesta);
    return respuesta;
  })
  /*
    Volvamos con el then():
      -> then() -> devuelve un objeto al que hay que darle formato:

      Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}

      Desplegado:
        Response
          body: ReadableStream
            locked: false
            [[Prototype]]: ReadableStream
            cancel: ƒ cancel()
            getReader: ƒ getReader()
            locked: false
            pipeThrough: ƒ pipeThrough()
            pipeTo: ƒ pipeTo()
            tee: ƒ tee()
            constructor: ƒ ReadableStream()
            Symbol(Symbol.toStringTag): "ReadableStream"
            get locked: ƒ locked()
            [[Prototype]]: Object
          bodyUsed: false
          headers: Headers {}
          ok: true
          redirected: false
          status: 200
          statusText: ""
          type: "cors"
          url: "https://jsonplaceholder.typicode.com/users"
          [[Prototype]]: Response

    El body si le damos a más info, vamos a ver que es un ReadableStream, por lo que hay que
    convertirlo a un formato normal que podamos utilizar. Por lo que creamos otro "then()" y
    la convertimos en un formato válido
  */
  .then((respuestaReadable) => {
    let respuestaJSON = respuestaReadable.json(); // Ahora la respuesta tiene formato JSON
    // let respuestaTexto = respuestaReadable.text(); -> Ahora la respuesta tiene formato de texto, este es un paso previo para el xml
    // let respuestaFormatoNoTexto = respuestaReadable.blob(); -> Ahora la respuesta tiene formato para aquello que no es texto como las imágees data uri

    return respuestaJSON;
  })
  /*
    Ahora el siguiente "then()" sí que va a tener una respuesta en formato JSON
  */
  .then((respuestaJSON) => {
    console.log(respuestaJSON);
  })
  /*
  El resultado es el siguiente:

    Array(10)
      0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
      1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
      2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}
      3: {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …}
      4: {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}
      5: {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …}
      6: {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …}
      7: {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}
      8: {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}
      9: {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}
      length: 10
      [[Prototype]]: Array(0)
  */
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Esto se ejecutará independientemente del respultado de la Promesa Fetch"
    );
  });


// FETCH CON XML
fetch("https://randomuser.me/api/?results=6&format=XML")
  .then((respuestaReadable) => {
    return respuestaReadable;
  })
  .then((respuestaTexto) => {
    return respuestaTexto.text();
  })
  .then((respuestaXML) => {
    new window.DOMParser().parseFromString(respuestaXML, "text/xml");
    console.log(respuestaXML);
  })
  /*
    <?xml version="1.0" encoding="UTF-8"?>
    <user>
      <results>
        <gender>male</gender>
        <name>
          <title>Mr</title>
          <first>Valdemar</first>
          <last>Nielsen</last>
        </name>
        <location>
          <street>
            <number>1682</number>
            <name>Lyngbyvej</name>
          </street>
          <city>Aarhus N</city>
        ...
  */
  .catch((error) => {
    console.log("Ha ocurrido un error: " + error);
  });
