"use script";
var numero = 444;
var texto1 = "   Bienvenido al curso de JavaScript de Victor Robles   ";
var texto2 = "es muy buen curso";

//Funciones de busqueda
var busqueda = texto1.indexOf("curso");
console.log("1)busqueda: ", busqueda);

busqueda = texto1.match("curso");
console.log("2)busqueda: ", busqueda);

busqueda = texto1.substr(14, 5);
console.log("3)busqueda: ", busqueda);

busqueda = texto1.charAt(44);
console.log("4)busqueda: ", busqueda);

busqueda = texto1.includes("JavaScript");
console.log("5)busqueda: ", busqueda);

//Reemplazar

var replace = texto1.replace("JavaScript", "Angular");
console.log("6)replace: ", replace);

var slice = texto1.slice(14);
console.log("7)slice: ", slice);

var split = texto1.split();
console.log("8)split: ", split);

split = texto1.split(" ");
console.log("9)split: ", split);

var trim = texto1.trim();
console.log("10)trim: ", trim);
