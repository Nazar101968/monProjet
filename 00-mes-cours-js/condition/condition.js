var iLoveJavascript = true;
if (iLoveJavascript) {
  console.log(`Alors tu vas progresser très vite`);
} else {
  console.log(`Alors ça va être très comliqu" pour toi...`);
}
var nombre = "1";
if (nombre == 1) {
  // it compaire only value
  console.log("OK");
} else {
  console.log("NO");
}

var nombre = "1";
if (nombre === 1) {
  // it compaire the type and value
  console.log("OK");
} else {
  console.log("NO");
}

var chiffre = 3;
var nombre = 55;
if (chiffre < 3 && nombre == 55) {
  console.log("OK");
} else {
  console.log("NO");
}

var chiffre = 3;
var nombre = 55;
if (chiffre < 3 || nombre == 55) {
  console.log("OK");
} else {
  console.log("NO");
}

var chiffre = 3;
var nombre = 55;
var mot = "camion";
if (chiffre < 3 || (nombre == 55 && mot == "camion")) {
  console.log("OK");
} else {
  console.log("NO");
}

let timeIs = "19.3";
if (timeIs >= 0 && timeIs <= 6) {
  console.log(`il est ${timeIs}h tu as vue l'heure qu'il est !!!`);
} else if (timeIs >= 6 && timeIs <= 12) {
  console.log(`il est ${timeIs}h c'est encore le matin !!!`);
} else if (timeIs >= 12 && timeIs <= 14) {
  console.log(`il est ${timeIs}h A table !!!`);
} else if (timeIs >= 14 && timeIs <= 17) {
  console.log(`il est ${timeIs}h c'est l'après midi !!!`);
} else if (timeIs >= 17 && timeIs <= 20) {
  console.log(`il est ${timeIs}h bonne soirée!!!`);
} else if (timeIs >= 20 && timeIs <= 23) {
  console.log(`il est ${timeIs}h bonne nuit!!!`);
} else {
  console.log(`HEURE INVALIDE`);
}

var response = true;
console.log(response == true ? `Ok c'est bon` : `Désolé c'est pas bon`);
// second way
var response = "camion";
const newLocal = `Désolé c'est pas bon`;
console.log(response == true ? `Ok c'est bon` : newLocal);

let sum = 100;
let paymenMethod = `espece`;
switch (paymenMethod) {
  case `espece`:
    console.log(`Vous souhaitez payer la somme de ${sum} en ${paymenMethod}`);
    break;
  case `carte`:
    console.log(`Vous souhaitez payer la somme de ${sum} en ${paymenMethod}`);
    break;
  case `cheque`:
    console.log(`Vous souhaitez payer la somme de ${sum} en ${paymenMethod}`);
    break;
  default:
    console.log(`Veuillez selectionner un mode de paiement SVP !!!`);
    break;
}





