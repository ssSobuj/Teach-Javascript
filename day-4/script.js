//loop in javascript
// for loop print 1 to 10
// in for loop we have 3 statements
// 1. initialization
// 2. condition
// 3. increment/decrement

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// named function
function greet(parameter) {
  return document.write(`<h2>Hello World</h2>  
  <p>This is my ${parameter} function</p>
    <p>This is a code of block</p>
  `);
}

greet("first");
greet("second");
greet("third");
greet("fourth");

function myFunctionForMultiplies(p1, p2) {
  return p1 * p2;
}

function myFunctionForPlus(p1, p2) {
  return p1 + p2;
}

function myFunctionForMinus(p1, p2) {
  return p1 - p2;
}

function myFunctionForDivision(p1, p2) {
  return p1 / p2;
}

function myFunctionForAllCalculation(p1, p2, status) {
  if (status === "plus") {
    return p1 + p2;
  }

  if (status === "minus") {
    return p1 - p2;
  }

  if (status === "division") {
    return p1 / p2;
  }

  if (status === "multiple") {
    return p1 * p2;
  }
}

// console.log(myFunctionForAllCalculation(5, 6, "plus"));
// console.log(myFunctionForAllCalculation(6, 5, "minus"));
// console.log(myFunctionForAllCalculation(10, 2, "division"));
// console.log(myFunctionForAllCalculation(10, 2, "multiple"));

// named function

function add(a, b) {
  return a + b;
}

//function expression
const add2 = function (a, b) {
  return a + b;
};

const dummy = function (functionAsParameter) {
  console.log("This is a dummy function");
  return functionAsParameter(5, 10);
};

console.log(dummy(add2));

const a = add2(2, 6);
const b = add2(2, 5);

// arrow function

const add3 = (a, b) => {
  return a + b;
};

const add4 = (a, b) => a + b;

// 6. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();

(function (name) {
  console.log("Hello " + name);
})("John Doe");

// tamplate literals
// it will help to create string more easily with dynamic data
const personAge = 25;
const personName = `sabuj ${personAge}`;

const demoElement = document.getElementById("demo");
demoElement.innerHTML = `Hello, my name is ${personName} and I am ${personAge} years old.`;
demoElement.innerHTML += `<p>Next year, I will be ${
  personAge + 1
} years old.</p>`;
demoElement.innerHTML += `<p>In five years, I will be ${
  personAge + 5
} years old.</p>`;

// todays task
// read all type of function
// practice template literals
// practice loops in javascript
