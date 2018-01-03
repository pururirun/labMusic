$(document).ready(function(){
 
 for(i=0; i<concertData.length;i++){
  $(".row-concert").append("<div class='col-lg-3'><div class='thumbnail modal-click'>"+concertData[i].photo+"<div class='caption'><h3>"+concertData[i].name+"</h3><p>"+concertData[i].date+"</p><p></p></div></div></div>");
 }

$(".modal-click").click(function(){ //al hacer click en el contenedor de las fotos
  $("#myModal").modal(); //iniciando el modal desde javascript
  var thisPhoto = $(this).children("img").attr("alt"); // guardamos la variable del Alt de la foto al hacer click
  for(i=0 ; i< concertData.length; i++){ //recorremos la data
    if (thisPhoto == concertData[i].name) { // si el alt de la foto es igual al nombre entonces...
      $(".modal-titles").empty(); //borramos el titulo anterior
      $(".modal-bodys").empty();
      $(".modal-titles").html(concertData[i].name); // agregamos el nuevo nombre
      $(".modal-bodys").append(concertData[i].photo+"<h4>Lugar :"+concertData[i].place+"</h4>");
     
    };

};



});

$(".btn-enter-user").click(function(){
  $('#modalLogin').modal('toggle'); 
  $(".joinHeader").toggleClass("hidden");
  $(".carousel-hidden").toggleClass("hidden");
  $(".concert").toggleClass("hidden");
  $(".userHeader").toggleClass("hidden");
  $(".backgroundUser").toggleClass("hidden");
  $(".artist").toggleClass("hidden");
  $(".disc").toggleClass("hidden");

});

});