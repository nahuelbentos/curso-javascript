"use strict";

//DOM - Document Object Model

function cambiaColor(color) {
  caja.style.background = color;
}
//Conseguir elementos con un ID concreto

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde JS";

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "cajaClass";

console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");
var contenido = todosLosDivs[2].textContent;

// todosLosDivs.forEach((valor, indice) => {
for (const valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent === "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
  }
}
console.log(contenido);

//Conseguir elementos por su clase className
var divsRojos = document.getElementsByClassName("rojo");
for (const div in divsRojos) {
  if (divsRojos[div].className === "rojo") {
    //   if (divsRojos.hasOwnProperty(div)) {
    divsRojos[div].style.background = "red";
  }
}
