"use strict";

//Arrays

var nombre = "Nahuel Bentos";
var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["la verdad duele", "la vida es bella", "Gran torino"];

// ordenar un array
peliculas.sort();

// revertir el orden de un array
peliculas.reverse();
var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);

// Añadir un elemento al array.
do {
  elemento = prompt("Introduce tu pelicula:");
  peliculas.push(elemento);
} while (elemento != "salir");
peliculas.pop();

var indice = peliculas.indexOf("Gran torino");
console.log(indice);

// remover con un indice.
if (indice > -1) {
  peliculas.splice(indice, 1);
}

//  convertir array a string

var peliculas_string = peliculas.join();
console.log(peliculas_string);

// Convertir string en array

var cadena = "elemento 1, elemento 2, elemento 3";
var cadena_array = cadena.split(", ");
