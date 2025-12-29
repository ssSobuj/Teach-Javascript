// date.js
// js Date Object
const today = new Date();
const specificDate = new Date("2022-12-25");
const dateFromComponents = new Date(2023, 0, 1); // January 1, 2023

console.log(today);
console.log(specificDate);
console.log(dateFromComponents);

const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log(hours);

// todays date
const formattedDate = `${day}/${month + 1}/${year}`;
console.log(formattedDate);
