$(document).ready(function() {
  // Load
  // $("#datos").load("https://reqres.in/");

  // GET

  $.get("https://reqres.in/api/users", { page: 2 }, function(response) {
    response.data.forEach((element, index) => {
      $("#datos").append(
        `<p>Nombre: ${element.first_name}  ${element.last_name}</p>`
      );
    });
    console.log(response);
  });

  // POST

  $("#formulario").submit(function(e) {
    e.preventDefault();
    var formulario = $(this);
    var usuario = {
      name: $('input[name="name"').val(),
      web: $('input[name="web"').val()
    };
    console.log(usuario);
    // $.post(formulario.attr("action"), usuario, function(response) {
    //   console.log(response);
    // }).done(() => alert("Usuario añadido correctamente."));

    // AJAX
    $.ajax({
      type: "POST",
      url: formulario.attr("action"),
      data: usuario,
      beforeSend: function() {
        console.log("Enviando usuario...");
      },
      success: function(response) {
        console.log("Success: ", response);
      },
      error: function(err) {
        console.log("A ocurrido un error: ", err);
      },
      timeout: 1000,

      dataType: "json",
      contentType: "aplication/json",
      success: function(response) {}
    });

    return false;
  });
});
