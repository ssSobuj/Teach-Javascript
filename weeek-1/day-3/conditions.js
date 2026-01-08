//JavaScript Conditionals
// Use if to specify a code block to be executed, if a specified condition is true
// Use else to specify a code block to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative code blocks to be executed
// Use (? :) (ternary) as a shorthand for if...else

const time = 6;

if (time === 6) {
  console.log("Good morning");
} else {
  console.log("Good evening");
}

if (time > 10) {
  console.log("Good day");
}

// const age = 19
let age = 55;

if (age <= 54) {
  console.log("You are a minor");
} else if (age !== 60) {
  console.log("You just became an adult");
} else {
  console.log("You are an adult");
}

// switch statement
switch (age) {
  case 18:
    console.log("You are a minor");
    break;

  case 19:
    console.log("You just became an adult");
    break;

  case 20:
    console.log("You just became an adult");
    break;

  case 20:
    console.log("You just became an adult");
    break;

  default:
    console.log("You are an adult");
}

const day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// Ternary Operator

if (5 > 4) {
  console.log("Good morning");
} else {
  console.log("Good evening");
}

console.log(5 > 4 ? "Good morning" : 5 == 5 ? "Good evening" : "Good night");

//comparisons oparetor

console.log(5 != 9);

// 🔹 Equality and Inequality
1 == 1; // true
1 == "1"; // true
1 === "1"; // false
0 == false; // true
0 === false; // false

"hello" == "Hello"; //false
null == undefined; ////true

null === undefined; ////false

true == 1; // true

true === 1; // false
false == 0; // true
false === 0; // false

"5" != 5; // false
"5" !== 5; // true

//NaN

// 🔹 Greater Than / Less Than
5 > 3; //true
5 < 3; // false
10 >= 10; //true
7 <= 8; // true
"apple" > "banana"; //false
"abc" < "bcd";

"A" < "a";

console.log("ac" < "ab");

// logical operators

// 🔹 Logical AND (&&)

if (true && false && true) {
  console.log("Both conditions are true");
}

if (true || true) {
  console.log("Both conditions are true");
}
const b = 10 > 5;
if (!b) {
  console.log("This condition is true");
}
