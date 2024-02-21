$(() => { // DOMContentLoaded
  $("button")
    .css("background", "#09f")
    .css("border", "#fff")
    .css({
      padding: "16px",
      borderRadius: "4px",
      color: "white",
      fontFamily: "Arial",
    })
    .on("click", () => { // Poner eventos
      alert("Hello world");
    });

  // Recorrer varios elementos y editarlos
  $("li").each((index, el) => {
    if (index == 0) {
      $(el).css("color", "blue");
    } else if (index == 1) {
      $(el).css("color", "green");
    } else if (index == 2) {
      $(el).css("color", "red");
    }
  });
});
