// js Scope
// js scope is 3 types
// 1. block scope
// 2. function scope
// 3. global scope

// global scope
const x = 10;

function myFunction() {
  const y = 20; // function scope
  console.log(x + y); // 30
}
myFunction();

// if (true) {
//   const z = 30; // block scope
//   console.log(x + z); // 40
// }
