// data types in javascript

// 1. String // queoted text are called string
const name1 = "John Doe";
const numberAsString = "12345";
console.log("Name:", name1);
console.log("Type of numberAsString:", typeof numberAsString);


// 2. Number // all numeric values are called number
const age = 50;
const pi = 3.14;
console.log("Age:", age);
console.log("Type of pi:", typeof pi);

// 3. Boolean // true or false values are called boolean
const isStudent = false;
const hasLicense = true;
console.log("Is Student:", isStudent);
console.log("Type of hasLicense:", typeof hasLicense);


// 4. Undefined // a variable that has been declared but not assigned a value is undefined
let address;
console.log("Address:", address);
console.log("Type of address:", typeof address);


// 5. Null // null represents the intentional absence of any object value
const middleName = null;
console.log("Middle Name:", middleName);
console.log("Type of middleName:", typeof middleName); // Note: typeof null returns 'object' due to a historical bug in JavaScript


// 6. Object is a data type that allows you to store collections of data
const person = {
    firstName: "Jane"
    , lastName: "Doe"
    , age: 30
};

const arry = [1, 2, 3, 4, 5];

console.log("Person:", person.firstName);
console.log("Type of person:", typeof arry);
