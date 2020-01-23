"use strict";

function sumame(num1, num2, sumaYMuestra, sumaPorDos) {
  let sumar = num1 + num2;

  sumaYMuestra(sumar);
  sumaPorDos(sumar);
}

sumame(
  5,
  7,
  dato => {
    console.log("la suma es ", dato);
  },
  dato => {
    console.log("la suma por dos es ", dato * 2);
  }
);
