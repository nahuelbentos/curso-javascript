"use strict";

// Language
if (typeof Storage !== "undefined") {
  console.log("Localstorage disponible");
} else {
  console.log("Incompatible con Localstorage");
}

window.addEventListener("load", () => {
  // Guardar datos
  localStorage.setItem("titulo", "Curso de JavaScript de Udemy");

  // Recuperar elemento

  console.log(localStorage.getItem("titulo"));
  document.querySelector("#peliculas").innerHTML = localStorage.getItem(
    "titulo"
  );

  // Guardar objetos

  var usuario = {
    nombre: "Nahuel Bentos",
    email: "nahuelbentosgnocchi@gmail.com",
    web: "fb.com/nahuelbentos"
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
});

// Recuperar objeto

console.log(localStorage.getItem("usuario"));

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

// Remover objeto
localStorage.removeItem("usuario");

// Limpiar local storage
localStorage.clear();
