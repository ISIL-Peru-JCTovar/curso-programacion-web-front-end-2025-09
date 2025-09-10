window.onload = function() {
  //Limpiar el panel
  var divPanel1 = document.getElementById("divPanel1");
  divPanel1.innerHTML = "";
  //Agregar los elementos nuevamente
  var numeros = 40;
  for (var i = 0; i < numeros; i++) {
    var random = Math.floor(Math.random()*numeros);
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML = "<div id='tarjeta'>" + (random) + "</div>";
    divPanel1.appendChild(tarjeta);
  }
}