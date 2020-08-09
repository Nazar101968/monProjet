// 1. Créez un script qui affichera dans la console le message suivant :
// "Welcome !" suivi d’un retour à la ligne.

var text = "Welcome !";
console.log(text + "\n");

//  2. Créez une variable "helpers" à laquelle vous assignerez la valeur
// "Padawan" suivi d’un retour à la ligne, et affichez-la dans la console.

var helpers = "Padawan";
console.log(helpers + "\n");

// 3. Créez les variables "integer", "float", "string", "bool", "null", "array".
// Affectez les valeurs suivantes aux variables dont le nom correspond au type
// de la valeur : "true", "[]", "quarante-deux", "42", "NULL" et "42.42"

var int = 42;
var float = 42.42;
var str = "quarante-deux";
var bool = true;
var nan = null;
var tableau = [int, str];

console.log(int + "\n");
console.log(float + "\n");
console.log(str + "\n");
console.log(bool + "\n");
console.log(nan + "\n");
console.log(tableau + "\n");

// 4. Créez une constante que vous appellerez "CONSTANTE" et à laquelle vous
// assignerez la valeur "Je suis une constante".

const CONSTANTE = "Je suis une constante";

// 5. Créez un tableau que vous appellerez "my_array" qui contiendra 6 éléments
// qui seront de type (dans cet ordre) "string", "integer", "string", "float",
// "string" et "bool" et qui auront respectivement pour valeur : "aux", "42",
// "Gloire", "42.42", "Pangolins" et "true".

var my_array = ["aux", 4, "Gloire", 42.42, "Pangolins", true];

// 6. Créez une fonction nommée "print_something" qui affichera la chaîne de
// caractères "Something" suivi d’un retour a la ligne, ceci à chaque fois qu’elle
//  sera appelée.

function myFunction() {
  var myText =
    "Something suivi d'un retour à la ligne, ceci à chaque fois qu'elle sera appelée";
  console.log(myText + "\n");
}
myFunction();

// 7. Créez une fonction que vous appellerez "my_concat" qui prend deux paramètres.
//  La fonction devra afficher le premier paramètre suivi d’un espace suivi du
// second paramètre.

function my_contact() {
  var contact = ["Je m'appelle : ", "Nazar NAZARIAN"];
  for (i = 0; i < contact.length; i++) {
    console.log(contact[i] + " " + "\n");
  }
}
my_contact();

// 8. Créez une fonction "print_variable". Cette fonction devra afficher la
// chaîne de caractères suivante : "variable = [val]" où "[val]" est remplacé
// par la valeur de la variable passée en paramètre.

var myName = "Nazar";
console.log("mon prènom est :" + myName);
console.log("Les caractères du mon nom sont :");
function print_variable() {
  myName = "Nazarian";
  for (i = 0; i < myName.length; i++) {
    console.log(myName[i]);
  }
}

print_variable();

// 9. Créez une fonction "print_calls" qui ne prend aucun paramètre et qui
// affiche le nombre de fois qu’elle est appelée

function print_variable1() {
  var calls = ["call01", "call02", "call03", "call04", "call05"];
  for (i = 0; i < calls.length; i++) {
    console.log("0" + (i + 1) + " " + calls[i] + "\n");
  }
}
print_variable1();

// 10. Créez une fonction "say_my_name" qui prend en paramètre une chaine de
// caractères et qui affiche "My name is [name] !" où "[name]" est remplacé par
// la variable passée en paramètre. Il doit être possible d’appeler la fonction sans paramètre auquel cas elle affichera "My name is Toto !"

var variable = prompt("Please enter your name.");
var caraName = "";
function say_my_name() {
  for (i = 0; i < variable.length; i++) {
    caraName = caraName + variable[i];
  }
  console.log("My name is " + caraName);
}
say_my_name();

// 11. Créez une fonction anonyme qui prend en paramètre une variable de type
// string et qui retourne son équivalent avec la premiere lettre en majuscule.
// Vous devrez assigner cette fonction anonyme à une variable "func".

var func = prompt("Please enter your name.");
var upperName = "";
function say_my_name_uppercase() {
  for (i = 0; i < func.length; i++) {
    upperName = upperName + func[i].toUpperCase();
  }
  console.log("My name in uppercase is " + upperName);
}
say_my_name_uppercase();

// 12. Créez une fonction "array_key" qui devra retourner la valeur de l’élément
// du tableau situé à l’index "key".

function array_key() {
  tableauIndex = ["Zero", "One", "Two", "Three", "Four"];
  indexKey = prompt("Please enter Index Key of the table!!");
  console.log(tableauIndex[indexKey]);
}
array_key();

// 13. Créez une fonction "calc" qui prend en paramètre un type d’opération
// ("+", "*", "/", "%", "-") et deux entiers. La fonction retourne le résultat
// de l’opération en respectant l’ordre des paramètres

function operations(a, b) {
  mathOperation = prompt("Please enter the math operation!!");
  if (mathOperation == "+") {
    return a + b;
  } else if (mathOperation == "*") {
    return a * b;
  } else if (mathOperation == "/") {
    return a / b;
  } else if (mathOperation == "%") {
    return a % b;
  } else {
    return a - b;
  }
}
operations(5, 3);

// 14. Créez une fonction "spupof" qui prend en paramètre une chaine de caractères
// et qui affiche cette chaine en remplaçant chacun des caractères par le suivant
// dans l’ordre alphabétique (le "z" devient "a", le “a” devient “b”, etc..).

function spupof() {
  chainCaracteres = "abcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < chainCaracteres.length; i++) {
    console.log(
      "Le caractère " +
        chainCaracteres[i] +
        " devient " +
        chainCaracteres[i + 1]
    );
  }
}
spupof();
