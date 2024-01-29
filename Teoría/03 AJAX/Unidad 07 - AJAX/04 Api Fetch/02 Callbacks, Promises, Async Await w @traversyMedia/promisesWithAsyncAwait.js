// Promises with Async and Await
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}


// Para que una función pueda usar "await" dentro, tiene que ser inicializada con un "async"
async function init() {
  await createPost({ title: "Post Three", body: "This is post three" }); // Esperamos a que esto se complete para poder hacer la siguiente línea de código 

  getPosts(); // esto no se ejecuta hasta que hayamos acabado con la línea de código con "await"
}

init();