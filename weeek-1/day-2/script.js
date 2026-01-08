
var a,c;
let b;
const h = 'sabuj';

a = 'sabuj'
b = 'kumar'
c = 'das'

var s = 55
var $ = 'hello'
var _ = 'hello'





// var, let, const (javaScript variable declaration keywords)

//var
var num1 = 10;
var num1 = 20;


{
var num1 = 50;
}

console.log(num1);



//let (it must be unice, but it can be reasign(updated))
// cannot redeclare but can reassign


// console.log(num2); its give error because 

let num2 = 30;
let num3 = 40;
num3 = 50

{
    let num3 = 70; // block scope
    console.log('log in block scope:', num3);
    
}


console.log(num3);

//const (it must be unice and it cannot be reasign(updated))
// cannot redeclare and cannot reassign

const num4 = 60;
// const num4 = 70; it give error
// num4 = 80; // it give error
console.log(num4);

