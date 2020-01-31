$(document).ready(function() {
  console.log("Funcionando");

  // Mover elemento por la pagina
  $(".elemento").draggable();

  // Redimensionar
  $(".elemento").resizable();

  // Seleccionar y ordenarelementos
  // $(".lista-seleccionable").selectable();
  $(".lista-seleccionable").sortable({
    update: (event, ui) => {
      console.log("Ha cambiado la lista, UI: ", ui);
    }
  });

  // Drop
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: () => {
      console.log("Has soltado algo dentro del area");
    }
  });

  // Efectos
  $("#mostrar").click(function(e) {
    e.preventDefault();
    // $(".caja-efectos").toggle("explode");
    // $(".caja-efectos").toggle("blind");
    // $(".caja-efectos").toggle("drop");
    // $(".caja-efectos").toggle("fold");
    // $(".caja-efectos").toggle("puff");
    // $(".caja-efectos").toggle("scale");
    $(".caja-efectos").toggle("shake", 2000);
  });

  // Tooltip
  $(document).tooltip();

  // Dialog
  $("#lanzar-popup").click(function(e) {
    e.preventDefault();

    $("#popup").dialog();
  });

  // Datepicker
  $("#calendario").datepicker();

  // Tabs
  $("#pestanas").tabs();
});
