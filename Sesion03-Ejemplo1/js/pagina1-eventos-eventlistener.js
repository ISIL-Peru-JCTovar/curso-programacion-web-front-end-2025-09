window.onload = function() {
  alert('ISIL: Pagina se carga.');
}

function colorearPanel() {
  var divPanel = document.getElementById("divPanel1");
  divPanel.style.backgroundColor = "#000000";
  divPanel.style.color = "#FFFFFF";
}

document.getElementById("divPanel1").addEventListener("mouseover", colorearPanel);

function descolorearPanel() {
  //Javascript DOM - Document Object Model
  var divPanel = document.getElementById("divPanel1"); //Funcion de JScript que me trae un objeto HTML por su ID
  divPanel.style.backgroundColor = "burlywood";
  divPanel.style.color = "#000000";
}

document.getElementById("divPanel1").addEventListener("mouseout", descolorearPanel);

/*
document.getElementById("tituloPrincipal").onclick = function() {
  alert('Saludos'); //Funcion de JScript
}
*/

const saludar = (nombre) => alert("Saludos " + nombre);
document.getElementById("tituloPrincipal").onclick = () => saludar('Juan Carlos');

var variableParaSaberSiEstanActivosLosEventos = true;

document.getElementById("btnAlgo").addEventListener("click", () => {
  if (variableParaSaberSiEstanActivosLosEventos) {
    document.getElementById("divPanel1").removeEventListener("mouseover", colorearPanel)
    document.getElementById("divPanel1").removeEventListener("mouseout", descolorearPanel);
    variableParaSaberSiEstanActivosLosEventos = false;
    document.getElementById("btnAlgo").innerHTML = "Activar Eventos a DivPanel1";
  } else {
    document.getElementById("divPanel1").addEventListener("mouseover", colorearPanel)
    document.getElementById("divPanel1").addEventListener("mouseout", descolorearPanel);
    variableParaSaberSiEstanActivosLosEventos = true;
    document.getElementById("btnAlgo").innerHTML = "Quitar Eventos a DivPanel1";
  }
})
