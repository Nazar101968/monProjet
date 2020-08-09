var me;
me = "seral";
console.log("me est égale : " + me);

var meDeux = "seral";
console.log("meDeux Deux est égale : " + meDeux);

var bool = true;
console.log("bool est égale : " + bool);

var myNumber = 12;
console.log("myNumber est égal à : " + myNumber);

var nothing = null;
console.log("nothing est égal à : " + nothing);

var notANumber = 7 * "Lutffy";
console.log("notNumber est égal à : " + notANumber);

var array = ["Luttfy", "Moi", "Lui", "Eux"];
console.log("array est égal à : " + array);

var tableux = new Array("A", "B", "C", "D");
console.log("tableau est égal à : " + tableux);

var objet = {
  Firstname: "Luttfy",
  Age: 23
};
console.log("objet est égal à : " + objet);

var objetDeux = {
  Firstname: "Mahmood",
  Age: 41,
};
console.log(objetDeux);
var arrayDeux = ["E", "F", "G", "H"];
arrayDeux.push(objetDeux);
console.log("objet est égal à : " + arrayDeux);

var objetTrois = {
  Firstname: "Usagi",
  Age: 30,
};
console.log(objetTrois);
var arrayTrois = ["I", "J", "K", objetTrois, "L"];
console.log("arrayTrois est égal à : " + arrayTrois);
var age = 34;

var name = "Nazar";
console.log("je m'appelle " + name + "et j'ai " + age + " ans");
// Une autre façon de l'affichage
console.log(`je m'appelle ${name} et j'ai ${age}  ans`);

var dataType = "Nadoka";
dataType = 34;
dataType = {
  Firstname: "Luttfy",
  Age: 40,
};
dataType = true;
console.log("Typeof dataType est égale : " + typeof dataType);

// undifined
console.log(x);
var x = "naruto";

var x = "Lutffy";
x += "Mudoka";
console.log(x);

var firstName = "Sasuke";
var lastName = "Uchiwa";
var x;
x = firstName;
x = firstName + " " + lastName;
console.log(x);

var x = `${firstName} ${lastName}`;
console.log(x);

var x, elle, lui, moi, toi;
lui = "naruta";
elle = "elle";
moi = "moi";
var x = `${lui} ${elle} ${moi}`;
console.log(x);
