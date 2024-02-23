
$(document).ready(function () {
    $("#botonn").click(function () {
      alert("Mensaje enviado...");
    });
  });


$(document).ready(function(){
    $(".card-title").click(function(){
      $(".card-text").toggle();
    });
});

$(document).ready(function(){
    $("h2").dblclick(function(){
      $(this).addClass("cambioamarillo");
    });
});