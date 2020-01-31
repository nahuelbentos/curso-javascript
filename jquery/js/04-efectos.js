$(document).ready(function() {
  var caja = $("#caja");
  var mostrar = $("#mostrar");
  var ocultar = $("#ocultar");
  var todoEnUno = $("#todoEnUno");
  var animar = $("#animar");
  mostrar.hide();
  mostrar.click(function(e) {
    e.preventDefault();
    $(this).hide("normal");
    ocultar.show("normal");
    // caja.fadeIn("slow");
    caja.fadeTo("slow", 0.8);
  });
  ocultar.click(function(e) {
    e.preventDefault();
    $(this).hide("normal");
    mostrar.show("normal");
    // caja.fadeOut("slow");
    //   caja.fadeTo("slow", 0.2);
    caja.slideUp("slow", () => console.log("Cartel oculto"));
  });

  todoEnUno.click(function(e) {
    e.preventDefault();
    // caja.toggle("fast");
    // caja.slideToggle("fast");

    caja.fadeToggle("fast");
  });
  animar.click(function(e) {
    e.preventDefault();
    caja
      .animate(
        {
          marginLeft: "500px",
          fontSize: "40px",
          height: "110px"
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "900px",
          marginTop: "50px"
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "0px",
          marginLeft: "0px"
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginTop: "0px"
        },
        "slow"
      );
  });
});
