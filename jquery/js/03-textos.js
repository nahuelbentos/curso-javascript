$(document).ready(function() {
  reloadLinks();
  $("#add_button")
    .removeAttr("disabled")
    .click(function(e) {
      e.preventDefault();
      var input = $("#add_link");
      var val = input.val();
      // $("#menu").html(`<a href="${val}"></a>`);
      $("#menu").append(`<li><a href="${val}"></a></li> `);
      // $("#menu").prepend(`<li><a href="${val}"></a></li> `);
      // $("#menu").before(`<li><a href="${val}"></a></li> `);
      // $("#menu").after(`<li><a href="${val}"></a></li> `);
      reloadLinks();
      input.val("");
    });
});

function reloadLinks() {
  $("a").each(function(index, element) {
    // element == this
    console.log("this: ", this);
    console.log("index: ", index);
    console.log("element: ", element);
    var _self = $(this);
    var enlace = _self.attr("href");
    _self.attr("target", "_blank");
    _self.text(enlace);
  });
}
