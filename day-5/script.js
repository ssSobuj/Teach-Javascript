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
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.concat(fruits1));

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

// jjhj

const test = [3, "jjj", 5, 6, 7, 8, 9];
test.pop();
test.pop();
test.push("new item");
test.shift();
test.unshift("new start");
console.log(test);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array2.concat(array1);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// array.find()
//array.find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
const sampleNumbers = [5, 11, 12, 8, 130, 44];

function findGreaterThanTen(element) {
  return element < 10;
}

const found = sampleNumbers.find(findGreaterThanTen);

// array.find with for loop

//array.sort()
const unsortedArray = [40, 100, 1, 5, 25, 10];

unsortedArray.sort(compareNumbers);
//1,5,25,10
function compareNumbers(a, b) {
  return b - a;
}

console.log(unsortedArray);

// what is callBack function?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Example of callback function

//in bangla

function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(func) {
  var name = prompt("Please enter your name.");
  func(name);
}

processUserInput(greeting);

// Example of callback function in array method
const nums = [1, 2, 3, 4, 5];
