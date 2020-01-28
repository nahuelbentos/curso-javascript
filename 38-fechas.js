"use strict";

window.addEventListener("load", () => {
  var fecha = new Date();

  var year = fecha.getFullYear();
  var mes = fecha.getMonth();
  var dia = fecha.getDate();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes;
  var textoHora = `
  El año es: ${year}
  El mes es: ${mes}
  El día es: ${dia}
  `;
  console.log(textoHora);

  console.log(Math.ceil(Math.random() * 10000));
});
