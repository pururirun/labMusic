/* Inicio firebase registro e inicio*/
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE) //esto es para que se borre el usuario activo cada vez que inicio sesion
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });


function register(){
 var email = document.getElementById("email").value;
 var password= document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    verificar();
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
};
function verificar(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo");
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
};


function ingreso(){
  var email2 = document.getElementById("email2").value;
  var password2= document.getElementById("password2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;



});
};


function out(){
  firebase.auth().signOut().then(function(){
    console.log("saliendo..")
    $(document).ready(function(){

  $('#modalLogin').modal('toggle');
  $(".post-music").toggleClass("hidden");
  $(".joinHeader").toggleClass("hidden");
  $(".carousel-hidden").toggleClass("hidden");
  $(".concert").toggleClass("hidden");
  $(".userHeader").toggleClass("hidden");
  $(".backgroundUser").toggleClass("hidden");
  $(".artist").toggleClass("hidden");
  $(".disc").toggleClass("hidden");
  $(".listening").toggleClass("hidden");
  var name= $("#name-user").val();
  $("#name-user").html(name);
  $("#user-name-perfil").html(name);

$(".heart").click(function(){
  $(this).toggleClass("red-toggle");


});
});
  })
  .catch(function(error){
 console.log(error);
  })
};


function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("existe usuario activo");
    // User is signed in.
    var user= user;
  if(user.emailVerified){


  $('#modalLogin').modal('toggle');
  $(".post-music").toggleClass("hidden");
  $(".joinHeader").toggleClass("hidden");
  $(".carousel-hidden").toggleClass("hidden");
  $(".concert").toggleClass("hidden");
  $(".userHeader").toggleClass("hidden");
  $(".backgroundUser").toggleClass("hidden");
  $(".artist").toggleClass("hidden");
  $(".disc").toggleClass("hidden");
  $(".listening").toggleClass("hidden");
  var name= $("#name-user").val();
  $("#name-user1").html(name);
  $("#user-name-perfil").html(name);

$(".heart").click(function(){
  $(this).toggleClass("red-toggle");
});
};

    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    //
    console.log("No existe usuario activo");
  }
});



}
observador();


/*final firebase*/



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



});
var idPin=0;

$(document).ready(function(){

});

function savePin(){
  var titulo = $("#tituloInput").val();
  var descripcion = $("#descripcionInput").val();
  var url = $("#urlInput").val();
  var name= $("#name-user").val();
  $("#descripcionInput").val("");
  $("#urlInput").val("");
  $("#name-user").val("");



  $("#pines").append("<div class='pin col-lg-6 col-lg-offset-3'><img class='user-comment' src='assets/images/raccoon.jpg'><h2 class='name-comment'>"+name+"</h2><h4 class='hour-comment'>"+new Date().toLocaleTimeString()+"</h4><p>"+descripcion+"<a href='#' class='thumbnail'><img src='"+url+"'></a></p><span class='fa fa-heart heart2'></span><span class='fa fa-trash'></span></div>")
    //este es el frente

  $(".heart2").click(function(){
  $(this).toggleClass("red-toggle");
});
   $(".fa-trash").click(function(){
  $(this).parent().remove();
});

};




//Splash

$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(100);
   }, 3000);
});
