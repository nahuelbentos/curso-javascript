"use strict";

//Arrays

var nombre = "Nahuel Bentos";
var nombres = ["Nahuel Bentos", "Rita Iglesias"];

var lenguajes = new Array("PHP", "JS", "GO", "Java");
console.log(nombres);
console.log(lenguajes);

var elemento = parseInt(prompt("Que elemento del array quieres??", 0));

if (elemento < nombres.length) {
  alert("El usuario seleccionado es : " + nombres[elemento]);
} else {
  alert("Introduce el numero correcto menor que " + nombres.length);
}

document.write("<ul>");
// lenguajes.forEach((elemento, index, data) => {
//   document.write(
//     "<li>" + index + "- " + elemento + "- " + data + "- " + "</li>"
//   );
// });

for (const lenguaje of lenguajes) {
  document.write("<li>" + lenguaje + "</li>");
}

document.write("</ul>");

// Busquedas

var precios = [10, 20, 30, 50, 80, 12];

var busqueda = lenguajes.find(lenguaje => lenguaje === "PHP");
console.log(busqueda);
var busqueda = lenguajes.findIndex(lenguaje => lenguaje === "JS");
console.log(busqueda);

var busquedaPrecio = precios.some(precio => precio >= 20);

console.log(busquedaPrecio);

var busquedaPrecio = precios.filter(precio => precio >= 20);
console.log(busquedaPrecio);
