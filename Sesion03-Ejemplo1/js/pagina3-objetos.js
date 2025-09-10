var personas = [];  //Arreglo (listas) en Javascript

//Objeto en JavaScript
var pers1 = {
  nombre: "Kerly",
  edad: 30,
  saludar: function() {
    alert("Hola, soy " + this.nombre);
  }
};

//Agregar un objeto al arreglo
personas.push(pers1);

//Objeto en Javascript
var pers2 = new Object();
pers2.nombre = "Pablo";
pers2.edad = 31;
pers2.saludar = function() {
                  alert("Hola, soy " + this.nombre);
                };

//Agregar un objeto al arreglo
personas.push(pers2);

//Objeto en Javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
                  alert("Hola, soy " + this.nombre);
                };
}
var pers3 = new Persona("Gladys", 29);

//Agregar un objeto al arreglo
personas.push(pers3);

personas.push({ nombre: "Carlos", edad: 28 });
personas.push({ nombre: "Rodrigo", edad: 32 });

window.onload = function() {
  //Limpiar el panel
  var divPanel1 = document.getElementById("divPanel1");
  //divPanel1.innerHTML = "";
  //Agregar los elementos nuevamente
  for (var i = 0; i < personas.length; i++) {
    //-- Recuperar las personas por cada elemento del arreglo
    var persona = personas[i];
    //-- Crear un div vacio (tipo tarjeta) dentro de la div Panel
    var tarjeta = document.createElement("div");
    tarjeta.id = "tarjeta";
    //-- Crear un div de detalles de la persona dentro de la div tarjeta
    var detalles1 = document.createElement("div");
    detalles1.textContent = "Nombres: ";
    tarjeta.appendChild(detalles1);
    var detalles2 = document.createElement("div");
    detalles2.textContent = persona.nombre;
    detalles2.addEventListener("click", persona.saludar);
    tarjeta.appendChild(detalles2);
    var detalles3 = document.createElement("div");
    detalles3.textContent = "Edad: ";
    tarjeta.appendChild(detalles3);
    var detalles4 = document.createElement("div");
    detalles4.textContent = persona.edad;
    tarjeta.appendChild(detalles4);
    //-- Agregar el div tarjeta al div Panel
    divPanel1.appendChild(tarjeta);

  }
}