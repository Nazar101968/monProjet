window.onload = function () {
  // --------------------- STEP 1 ---------------------
  // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
  // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
  // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->
  var buttons = document.getElementsByClassName("square-button-empty");

  //  We can do in the form of "for()"
  // ---------------------------------
  //  for (var i = 0; i<buttons.length; i++){
  //      buttons[i].addEventListener("click", function(){

  //      });
  //  }

  var loginForm = document.getElementsByClassName("connexion-form");
  var registerForm = document.getElementsByClassName("register-form");

  buttons[0].addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  });
  buttons[1].addEventListener("click", function () {
    registernForm.style.display = "none";
    loginForm.style.display = "flex";
  });

  // --------------------- STEP 2 -------------------------
  // Quand on clique sur le button pour submit le formulaire d'incription :
  //  1. récuperer la valeur de tout les champs de formulaires
  //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
  //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)
  //  4. vérifier que le password et sa confirmation correspondent
  //  5. en cas d'erreur les afficher au clients


  var squareButtons = document.getElementsByClassName('square-button');
var errors = document.querySelector('.errors');

  squareButtons[1].addEventListener("click", function(){
      var inputs = registerForm.getElementsByClassName('form-control');
      if (inputs[0].value.length < 5){
          errors.style.display = "initial";
          setTimeout(function(){

              errors.style.display= "none";
          } 3000);
      }
  })
};
