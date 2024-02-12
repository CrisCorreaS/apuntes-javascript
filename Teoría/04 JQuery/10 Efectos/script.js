/*
jQuery es una librería ideal para añadir efectos y animaciones a nuestros elementos HTML.
Para crear efectos, utilizaremos la siguiente sintaxis sobre el elemento o elementos elegidos:

  $(selector).efecto(velocidad)

Donde velocidad puede ser slow, fast, o expresada en un número de milisegundos.
Además, podemos crear nuestras propias velocidades con la siguiente sentencia donde muyRapido es el nombre que damos a nuestra velocidad:

  jQuery.fx.speeds.muyRapido = 50;

Pero veamos ahora otros efectos que podemos crear utilizando jQuery:
- .hide() -> oculta el elemento.
- .show() -> muestra el elemento.
- .toggle() -> muestra el elemento si está oculto y viceversa.
- .fadeIn() -> muestra un elemento con un fundido de entrada.
- .fadeOut() -> oculta un elemento con un fundido de salida.
- .fadeToggle() -> oculta un elemento con un fundido de salida si está visible o lo muestra con un fundido de entrada si está oculto.
- .fadeTo() -> realiza un fundido hasta una opacidad indicada con un parámetro numérico entre 0 y 1.
- .slideDown() -> muestra un elemento con un efecto de persiana de arriba a abajo.
- .slideUp() -> oculta un elemento con un efecto de persiana de abajo a arriba.
- .slideToggle() -> muestra u oculta un elemento con un efecto persiana en función de si está o no visible.
*/

$(document).ready(inicio);

function inicio() {
  // Sintaxis de efectos y animaciones
  // $.(<selector>).nombre_efecto(<velocidad>) -> la velocidad puede ser "fast", "slow" o el "nº de milisegundos"

  // Por defecto jQuery tiene el objeto (jQuery.fx.speeds) que almacena la velocidad de los objetos para "fast" y "slow", y esto se puede modificar, crear nuevas velocidades o simplemente usar el "nº de ms"
  // Creación de una nueva velocidad: muyRapido dura 50 ms
  jQuery.fx.speeds.muyRapido = 50;

  // EFECTOS DE MOSTRAR

  // Ocultar
  $("#ocultar").click(function () {
    // Se oculta el párrafo en 1500ms
    $("p").hide(1500);
  });

  // Mostrar
  $("#mostrar").click(function () {
    // Se muestra el párrafo directamente
    $("p").show();
  });

  // Toggle
  $("#toggle").click(function () {
    // Se muestra el párrafo si está oculto y se oculta si está mostrándose
    $("p").toggle();
  });

  // --------------------------------------------------------------------------------

  // EFECTOS DE FADE

  // FadeIn
  $("#fadeIn").click(function () {
    // Quita la opacidad de un selector
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

  // FadeOut
  $("#fadeOut").click(function () {
    // Devuelve la opacidad inicial de un selector
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });

  // FadeToggle
  $("#fadeToggle").click(function () {
    // Devuelve la opacidad inicial de un selector si no tiene o se la quita si la tiene
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });

  // FadeTo
  $("#fadeTo").click(function () {
    // Indica exactamente cómo va a ser ese "fade"
    // fadeTo(<velocidad>, <transparencia>) -> La transparencia va de 1 a 0
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.5);
    $("#div3").fadeTo("slow", 0.8);
  });

  //-------------------------------------------------------------------------------------------

  // EFECTOS DE SLIDE (persiana)

  // slideDown -> Baja la persiana
  $("#slideDown").click(function () {
    // Baja la persiana en el panel
    $("#panel").slideDown();
  });

  // slideUp -> Sube la persiana
  $("#slideUp").click(function () {
    // Sube la persiana en el panel
    $("#panel").slideUp();
  });

  // slideToggle 
  $("#slideToggle").click(function () {
    // Si la persiana está subida la baja y si está bajada, la sube
    $("#panel").slideToggle();
  });
  
}