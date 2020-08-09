// RAPPEL ---->

var leNomDeMaVariable = "la valeur de ma variable"; // Déclarer une variable (pour la réutiliser plus tard)

var elementHtml = document.querySelector("body"); // document fait réference au document HTML (tout ce qui est compris entre les balise <html>)
// getElementById est une fonction prédéfinis par Javascript qui permet de ciblé un element html grace à son id

var elementHtml = document.querySelector("section button");
elementHtml.addEventListener("click", function () {
  //   document.getElementById("todoList");
  var input = document.querySelector("section input");
  //   console.log(input.value);
  var list = document.querySelector("section ul");
  var newLi = document.createElement("li");
  newLi.innerText = input.value;
  console.log(list);
  list.appendChild(newLi);
  input.value = null;
});

// var button = document.querySelector('section button');
// button.onclick = function getValue() {
//     // Sélectionner l'élément input et récupérer sa valeur
//     var input = document.querySelector('input').value;
//     //cible UL pour creer nouveau li
//     var ul = document.getElementById('todoList');
//     var newLi = document.createElement('li');
//     newLi.innerText = input.value;
//     console.log(ul);
//     ul.appendChild(newLi);
//     input.value = null;
// });

// Il existe plein d'autres méthode pour ciblé nos element html en js (getElementById, getElementsByTagName, etc...) allez voir la doc !

// onclick, onmouseover, onload, etc.. :
// sont des evenement prédefinis que l'on peut utiliser sur des elements html et qui prenne en paramettre un attribut 'event'
// Pour pouvoir utiliser ces evenement on utilise la fonction -->
// <-- addEventListener("nomDeMonEvent", function(event) { code a executer }) sur un element html qu'on a au préalable ciblé

// elementHtml.innerText = 'texte a insérer dans l\'element html ciblé au préalable'; --> innerText pour insérer du texte
// elementHtml.innerHTML = '<p>balise html a insérer dans l\'element html ciblé au préalable</p>'; --> innerHTML pour insérer des balises html
