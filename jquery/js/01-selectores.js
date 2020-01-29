


  console.log("Estamos listos ya sabesssss!!!");

  // Selector de ID
  $("#rojo")
    .css("background","red")
    .css("color"," white");
  $("#azul")
    .css("background", "blue")
    .css("color", " white");

  $("#verde")
    .css("background", "green")
    .css("color", " white");

  // Selector de clases
  
  var mi_clase = $(".zebra").css("padding", "5px");
  //Esto no funciona con arrow functions. Pierde la referencia
  
  $(".sin_borde").click( function() {
    console.log("hago click acá");
    $(this).addClass("zebra");
  })
  
  // Selector de etiquetas

  var parrafos = $("p").css('cursor', 'pointer');

  parrafos.click(function () {
    var _self = $(this);
    console.log("hago click acá");
    if (!_self.hasClass("grande")) {
      _self.addClass("grande");
    } else {
      _self.removeClass("grande");

    }
  })

  // Selectores de atributo

  $('[title="Google"]').css("background", "#ccc");
  $('[title="Facebook"]').css("background", "blue");

  // Otros

  // $('p, a').addClass('margen-superior');
  var busqueda = $("#caja").find(".resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
  console.log(busqueda);
});