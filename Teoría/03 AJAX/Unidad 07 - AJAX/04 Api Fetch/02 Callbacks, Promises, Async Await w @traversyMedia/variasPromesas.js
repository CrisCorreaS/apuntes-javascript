// Promise.all() -> Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// Es una forma de utilizar varias promesas juntas en un array en vez de hacer mil "then()" en el mismo código
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
/*
  Devuelve lo siguiente:
  Array(3)
    0: "Hello World"
    1: 10
    2: "Goodbye"
  length: 3
  [[Prototype]]: Array(0)
*/

/* 
Se puede hacer incluso cuando nos conectamos a una api con fetch, peeero, hay que hacer
un paso más porque con fetch, tenemos primero que dar formato a la respuesta y luego
coger su valor, por lo que primero tendríamos que formatear la primera respuesta del
fetch con un "then()"
*/
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

/*
Ahora devuelve:

(3) ['Hello World', 10, 'Goodbye'] -> El anterior
(4) ['Hello World', 10, 'Goodbye', Array(10)]
0: "Hello World"
1: 10
2: "Goodbye"
3: Array(10)
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
length: 4
[[Prototype]]: Array(0)
*/