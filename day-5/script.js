//how to declare an array
// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits[10]); //undefined

// console.log(fruits);

// //how to change an array element
// fruits[0] = "Kiwi";
// console.log(fruits);

// //how to find the length of an array
// console.log(fruits.length);

// document.getElementById("demo").innerHTML = fruits[1];

// //loop through an array
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//Basic Array Methods

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Pineapple"); //add element to the end
// console.log(fruits);

// fruits.pop(); //remove element from the end
// console.log(fruits);

// fruits.shift(); //remove element from the start
// console.log(fruits);

// fruits.unshift("Strawberry"); //add element to the start
// console.log(fruits);

// fruits.splice(0, 1, "Lemon", "jssw"); //add elements at index 2
// console.log(fruits);

// document.getElementById("demo").innerHTML = fruits.join(" * ");

// // document.getElementById("demo").innerHTML = fruits.toString();
// console.log(fruits.toString());

// // document.getElementById("demo").innerHTML = fruits;.sort();
// console.log(fruits.sort());

// const a = 2;

// console.log(Array.isArray(fruits));

//taks delete, concat(), slice()

// Search Methods
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Pineapple")); // -1

console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Grapes")); // false

// find()
const numbers = [10, 25, 30, 40, 55];

const result = numbers.find((num) => {
  return num > 30;
});

console.log(result); // Output: 40
