const array = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8, 10];

// array.forEach
const func = (num, index, array) => {
  console.log(num * 2);
};

array.forEach(func);

//discribe about forEach
// The forEach() method executes a provided function once for each array element.
// Syntax: arr.forEach(callback(currentValue, index, array), thisArg)

// create your own forEach function
// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// myForEach(array, func); // 1,2,3,4,5

// array.map
const mapFunc = (num) => {
  return num * 2;
};
const newArray = array.map(mapFunc);
console.log("newArray", newArray);

//discribe about map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax: arr.map(callback(currentValue, index, array), thisArg)

//create your own map function

// function myMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
//   return result;
// }

// const mappedArray = myMap(array, mapFunc);
// console.log(mappedArray);

// array.filter
const filterFunc = (num) => {
  return num !== 6;
};
const filteredArray = array.filter(filterFunc);
console.log("filteredArray", filteredArray);

// array.reduce
const reduceFunc = (accumulator, currentValue) => {
  return accumulator + currentValue;
};
const reducedValue = array.reduce(reduceFunc, 0);
console.log("reducedValue", reducedValue);
