window.onload = function() {
  alert('ISIL: Pagina se carga.');
}

document.getElementById("divPanel1").onmouseover = function() {
  var divPanel = document.getElementById("divPanel1");
  divPanel.style.backgroundColor = "#000000";
  divPanel.style.color = "#FFFFFF";
}

document.getElementById("divPanel1").onmouseout = function() {
  //Javascript DOM - Document Object Model
  var divPanel = document.getElementById("divPanel1"); //Funcion de JScript que me trae un objeto HTML por su ID
  divPanel.style.backgroundColor = "burlywood";
  divPanel.style.color = "#000000";
}

/*
document.getElementById("tituloPrincipal").onclick = function() {
  alert('Saludos'); //Funcion de JScript
}
*/

const saludar = (nombre) => alert("Saludos " + nombre);
document.getElementById("tituloPrincipal").onclick = () => saludar('Juan Carlos');

