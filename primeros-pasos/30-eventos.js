"use strict";
window.addEventListener("load", () => {
  // Eventos del mouse

  var boton = document.querySelector("#boton");

  function cambiarColor() {
    let bg = boton.style.background;
    if (bg === "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }
  }

  // Click
  boton.addEventListener("click", () => cambiarColor());

  // Mouse over
  boton.addEventListener("mouseover", () => (boton.style.background = "#ccc"));

  // Mouse out
  boton.addEventListener("mouseout", () => (boton.style.background = "black"));

  // Eventos del teclado
  var input = document.querySelector("#campo_nombre");
  // Focus
  input.addEventListener("focus", () => console.log("focus"));
  // Blur
  input.addEventListener("blur", () => console.log("blur"));
  // Key down
  input.addEventListener("keydown", event => {
    console.log("keydown");
    console.log("Presionando la tecla: ", String.fromCharCode(event.keyCode));
  });
  // Key press
  input.addEventListener("keypress", event => {
    console.log("keypress");
    console.log(
      "Tecla presionada la tecla: ",
      String.fromCharCode(event.keyCode)
    );
  });

  // Key up
  input.addEventListener("keyup", event => {
    console.log("keyup");
    console.log("Tecla soltada la tecla: ", String.fromCharCode(event.keyCode));
  });
}); // End Load
