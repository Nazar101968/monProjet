var number = [1, 2, 3, 4, 5];
var fruits = new Array("Banana", "Orange", "Apple", "Mango");
var objet = new Array(23, "Raffi", null, false, {
  FirstName: "Nazar",
  lastName: "Nazarian",
});

var result1 = number.length;
console.log(result1);

var result2 = Array.isArray(number);
console.log(result2);

fruits[2] = "Pomme";
console.log(fruits);

var result6 = fruits.indexOf("Pomme");
console.log(result6);

console.log(fruits[3]);

var result7 = fruits.includes("Pomme");
console.log(result7);

fruits.push("Citron");
console.log(fruits);

// pop - Removes from the End of an Array
// shift - Removes from the beginning of an Array
// splice - removes from a specific Array index
// filter - allows you to programatically remove elements from an Array
// unshift - Add beginning at the array

fruits.pop();
console.log(fruits);

fruits.unshift("Lemon", "Pineapple");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 0, "Abricot");
console.log(fruits);
fruits.splice(3, 3, "Concombre");
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children);

var fruits = [
  "banana",
  "Orange",
  "apple",
  "MANGO",
  "Banana",
  "lemon",
  "Pineapple",
  "BANNAN",
  "Apple",
  10,
  39,
  2,
  15,
  5,
  30,
  3,
  40,
];
fruits.sort();
// Sorts the elements of fruits
console.log(fruits);

var fruitsNumber1 = [10, 39, 2, 15, 5, 30, 3, 40];
function compareNumber(a, b) {
  return a - b;
}
result8 = fruitsNumber1.sort(compareNumber);
console.log(result8);
// to put assending the numbers from small to large

var fruitsNumber2 = [10, 39, 2, 15, 5, 30, 3, 40];
function compareNumber(a, b) {
  return a - b;
}
result8 = fruitsNumber2.sort(compareNumber).reverse();
console.log(result8);
// to put dessending the numbers from large to small


