'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
  titulo: 'Batman vs Superman',
  year: 2017,
  pais: 'Estados Unidos'
}

var peliculas = [{
  titulo: 'El secreto de sus ojos',
  year: 2007,
  pais: 'Argentina'
},
pelicula]

window.addEventListener('load', () => {
var div_peliculas = document.querySelector("#peliculas");
for (const index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
    div_peliculas.append(p);
  
}
})