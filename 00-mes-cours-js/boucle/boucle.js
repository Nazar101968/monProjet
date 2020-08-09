// break statement
// continue statement

// for...of statement

// for statement
for (let i = 0; i < 10; i++) {
  console.log(`Je suis l'index ${i}`);
}

for (let i = 10; i > 0; i--) {
  console.log(`Je suis l'index ${i}`);
}

for (let i = 0; i < 10; i = i + 2) {
  console.log(`Je suis l'index ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i == 2) {
    console.log(`Je m'incrute`);
    break;
  }
  console.log(`Je suis l'index ${i}`);
}

// while statement
var n = 0;
while (n < 10) {
  n++;
  console.log(n);
}

var array = ["pomme", "cerises", "poire", "voiture", "camion"];
var n = 0;
while (n < array.length) {
  console.log(array[n]);
  n++;
}

var array = ["pomme", "cerises", "poire", "voiture", "camion"];
var n = array.length - 1;
while (n >= 0) {
  console.log(array[n]);
  n--;
}
//second way
var array = ["pomme", "cerises", "poire", "voiture", "camion"];
var n = array.length;
while (n >= 1) {
  n--;
  console.log(array[n]);
}
//third way
var array = ["pomme", "cerises", "poire", "voiture", "camion"];
var n = array.length;
while (n >= 0) {
  n--;
  if (n > -1) {
    console.log(array[n]);
  }
}

// do...while statement
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);

var y = 0;
do {
  console.log("jes suis l'élément " + y);
  y++;
} while (y < 10);
