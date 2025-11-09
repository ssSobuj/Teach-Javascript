// named function

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

console.log(myFunctionForAllCalculation(5, 6, "plus"));
console.log(myFunctionForAllCalculation(6, 5, "minus"));
console.log(myFunctionForAllCalculation(10, 2, "division"));
console.log(myFunctionForAllCalculation(10, 2, "multiple"));

// named function

console.log(add(2, 3));

function add(a, b) {
  return a + b;
}

//function expression
const add2 = function (a, b) {
  return a + b;
};

const a = add2(2, 6);
const b = add2(2, 5);

console.log(b);

// arrow function

const add3 = (a, b) => {
  return a + b;
};

const add4 = (a, b) => a + b;

//6. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();
