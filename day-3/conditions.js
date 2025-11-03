//JavaScript Conditionals
// Use if to specify a code block to be executed, if a specified condition is true
// Use else to specify a code block to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative code blocks to be executed
// Use (? :) (ternary) as a shorthand for if...else


const time = 2;

if (!time) {
    console.log("Good morning");
}else{
    console.log("Good evening");
}

if (time > 10 ) {
    console.log("Good day");
}

// const age = 19

// if (age < 18) {
//     console.log("You are a minor");
// } else if (age === 18) {
//     console.log("You just became an adult");
// }else {
//     console.log("You are an adult");
// }


// switch statement
let age = 18;

switch (age) {
  case  18:
    console.log("You are a minor");
    break;

  case 19:
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


console.log((5 !== 4) ? "Good morning" : "Good evening"); 
