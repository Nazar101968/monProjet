var val;
var person = {
  firstName: "Narudo",
  lastName: "Uzamaki",
  age: 25,
  email: "nazariannazar@yahoo.com",
  hobbies: ["Family", "Sport", "Coding", "Travel"],
  adresse: {
    city: "Konoha",
    state: "Région du feu",
  },
};
console.log(person);

console.log(person.firstName);

console.log(person.adresse.city);

console.log(person.firstName, person.lastName);
console.log(person.hobbies);

let myClasse = [
  {
    name: "Naruto",
    age: 25,
  },
  {
    name: "Kenshiro",
    age: 16,
  },
  {
    name: "Madoko",
    age: 39,
  },
  {
    name: "Usagi",
    age: 26,
  },
  {
    name: "Lutffy",
    age: 36,
  },
];

console.log(myClasse);
console.log(myClasse[2].name, myClasse[2].age);
console.log(myClasse[2].name + " " + myClasse[2].age);
