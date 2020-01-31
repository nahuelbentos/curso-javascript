"use strict";

window.addEventListener("load", () => {
  // Timers

  // Intervalo
  var intervalo = setInterval(() => {
    var encabezado = document.querySelector("h1");
    if (encabezado.style.fontSize === "50px") {
      document.querySelector("h1").style.fontSize = "30px";
    } else {
      document.querySelector("h1").style.fontSize = "50px";
    }
    console.log("Set interval ejecutando");
  }, 500);

  //   var timeout = setTimeout(() => {
  //     var encabezado = document.querySelector("h1");
  //     if (encabezado.style.fontSize === "50px") {
  //       document.querySelector("h1").style.fontSize = "30px";
  //     } else {
  //       document.querySelector("h1").style.fontSize = "50px";
  //     }
  //     console.log("Set timout ejecutando");
  //   }, 500);

  var stop = document.querySelector("#stop");
  stop.addEventListener("click", () => {
    alert("Intervalo terminado");
    clearInterval(intervalo);
  });
});
