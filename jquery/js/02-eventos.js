$(document).ready(function() {
  // MouseOver y MouseOut

  var caja = $("#caja");
  /*
  caja.mouseover(function() {
    $(this).css("background", "red");
  });

  caja.mouseout(function() {
    $(this).css("background", "green");
  });
*/

  function cambiaRojo() {
    $(this).css("background", "red");
  }
  function cambiaVerde() {
    $(this).css("background", "green");
  }
  // Hover
  caja.hover(cambiaRojo, cambiaVerde);

  // Click, doble click

  caja.click(function() {
    $(this)
      .css("background", "grey")
      .css("color", "white");
  });

  caja.dblclick(function() {
    $(this)
      .css("background", "black")
      .css("color", "white");
  });

  // Focus y blur
  var nombre = $("#nombre");
  var datos = $("#datos");
  var sigueme = $("#sigueme");
  nombre.focus(function(e) {
    e.preventDefault();
    $(this).css("border", "2px solid green");
  });

  nombre.blur(function(e) {
    e.preventDefault();
    var _self = $(this);
    _self.css("border", "2px solid #ccc");
    datos.text(_self.val()).show();
  });

  // Mousedown y mouseup
  datos.mousedown(function() {
    $(this).css("border-color", "gray");
  });
  datos.mouseup(function() {
    $(this).css("border-color", "black");
  });

  $(document).mousemove(function(e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    console.log("e.clientX: ", e.clientX);
    console.log("e.clientY: ", e.clientY);
    sigueme.css("left", e.clientX);
    sigueme.css("top", e.clientY);
  });

  //   datos.mouseout(function () {

  //   });
});
