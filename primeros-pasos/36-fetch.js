"use strict";

// Fetch y peticiones a servicios / apis rest
window.addEventListener("load", () => {
  var div_usuarios = document.querySelector("#usuarios");
  var div_janet = document.querySelector("#janet");
  var usuarios = [];
  getUsuarios()
    .then(data => data.json())
    .then(users => {
      listadoUsuarios(users.data);
      return getJanet();
    })
    .then(data => data.json())
    .then(user => {
      mostrarJanet(user.data);
      return getInfo();
    })
    .then(profesor => {
      console.log("profesor: ", profesor);
    })
    .catch(error => {
      alert("Error en las peticiones: ", error);
      console.log(error);
    });

  function getUsuarios() {
    return fetch("https://reqres.in/api/users");
  }

  function getJanet() {
    return fetch("https://reqres.in/api/users/2");
  }

  function getInfo() {
    var profesor = {
      nombre: "Nahuel",
      apellido: "Bentos",
      url: "fb.com/nahuelbentos"
    };
    return new Promise((resolve, reject) => {
      var profesor_string = JSON.stringify(profesor);

      if (typeof profesor_string !== "string") {
        return reject("error");
      }

      return resolve(profesor_string);
    });
  }
  function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
      let nombre = document.createElement("h3");
      nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;
      div_usuarios.appendChild(nombre);
      document.querySelector(".loading").style.display = "none";
    });
  }

  function mostrarJanet(usuario) {
    let nombre = document.createElement("h4");
    let avatar = document.createElement("img");
    nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
    avatar.src = usuario.avatar;
    avatar.width = "100";

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    document.querySelector("#janet .loading").style.display = "none";
  }
});
