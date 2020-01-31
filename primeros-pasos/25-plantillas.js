"use strict";

//Plantillas de texto

var nombre = prompt("Ingrese nombre: ");
var apellido = prompt("Ingrese apellido: ");

var texto = `
    <h1>Hola que tal</h1> 
    <h2>Mi nombre es: ${nombre} </h2>
    <h2>Mi apellido es: ${apellido} </h2>
 `;

document.write(texto);
