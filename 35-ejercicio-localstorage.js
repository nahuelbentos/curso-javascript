"use strict";

window.addEventListener("load", () => {
  var formulario = document.querySelector("#formPeliculas");

  formulario.addEventListener("submit", () => {
    var titulo = document.querySelector("#addPelicula").value;
    if (titulo.length > 1) {
      localStorage.setItem(titulo, titulo);
    }
  });

  var ul = document.querySelector("#peliculas-list");
  for (const i in localStorage) {
    console.log(localStorage[i]);
    var li = document.createElement("li");
    if (typeof localStorage[i] === "string") {
      li.append(localStorage[i]);
      ul.append(li);
    }
  }

  var formularioBorrar = document.querySelector("#formBorrarPeliculas");

  formularioBorrar.addEventListener("submit", () => {
    var titulo = document.querySelector("#borrarPelicula").value;
    if (titulo.length > 1) {
      localStorage.removeItem(titulo);
    }
  });
});
