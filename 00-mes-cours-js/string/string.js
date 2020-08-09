var phrase = "Le Email de Mes Ami : ";
var email = "nazariannazar@yahoo.com ";
var friends = "Nazar, Asmaa, Elodi, Maria est ";
console.log(phrase.length);

let concatination;
concatination = phrase.concat(friends, email);
console.log(concatination);

let majuscule;
majuscule = phrase.toUpperCase();
console.log(majuscule);

let miniscule;
miniscule = phrase.toLowerCase();
console.log(miniscule);

console.log("10" + 20); //concatene
console.log("10" * 20); //multiplie
console.log("10" - 20); //soustrait

// indexOff for email

console.log(email);
let method;
method = email.indexOf("@" && ".com");
if (method > 0) {
  console.log("Adresse mail VALIDE");
} else {
  console.log("Adresse mail INVALIDE");
}

console.log(method);
console.log(email.indexOf("@"));

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);
// expected output: "The index of the 2nd "dog" is 52"

const str = "Mozilla";
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"

const phrase1 = "The quick brown fox jumps over the lazy dog.";

const words = phrase1.split(" ");
console.log(words[3]);
// expected output: "fox"

const chars = phrase1.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = phrase1.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

const chars1 = friends.split(",", 2);
console.log(chars);

const chars2 = friends.split(",");
console.log(chars);

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

const regex = /dog/gi;

console.log(p.replace(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "foxs";
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
