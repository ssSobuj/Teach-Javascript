// //Template Literals
// let name = "John";
// let age = 30;
// console.log(greeting); // My name is John and I am 30 years old.

// const message = "My name is " + name + " and I am " + age + " years old.";
// console.log(message); // My name is John and I am 30 years old.
// const greeting = `My name is ${name} and I am ${age} years old.`;
// console.log(greeting); // My name is John and I am 30 years old.

//Destructuring

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  city: "New York",
};

// Without Destructuring
const firstName1 = person.firstName;
const lastName1 = person.lastName;
console.log(firstName1, lastName1); // Jane Doe

// With Destructuring
const { firstName, lastName } = person;
console.log(firstName, lastName);

// array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor); // red green

//Spread & Rest Operators
// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]
