// Cristina Correa

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosicion);
} else {
  document.getElementById("geolocalizacion").innerHTML =
    "Geolocation is not supported by this browser.";
}

function showPosicion(position) {
    console.log("Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude);
}
