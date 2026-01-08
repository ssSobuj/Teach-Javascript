// // const num = [10, 20, 30, 40, 50, 60, 80];
// // js objects

// const carName = "BMW";
// const carModel = "X5";
// const carYear = 2020;
// const carColor = "Black";
// const carPrice = 60000;
// const carOwner = "John Doe";

// const car = {
//   name: "BMW",
//   model: "X5",
//   year: 2020,
//   color: "Black",
//   price: 60000,
//   owner: "John Doe",
// };

// const person = {};

// person.name = "Alice";
// person.age = 30;
// person.city = "New York";
// person.job = "Engineer";

// console.log(car);
// console.log(person);

// const laptop = new Object({
//   brand: "Dell",
// });
// laptop.model = "XPS 13";

// delete laptop.brand;
// console.log(laptop);

// // object constructors
// function Bike(name, model, color) {
//   this.name = name;
//   this.model = model;
//   this.color = color;
// }
// const bike1 = new Bike("Yamaha", "R15", "Blue");
// const bike2 = new Bike("Suzuki", "Gixxer", "Black");
// const bike3 = new Bike("Honda", "CBR", "Red");

// // object methods
// const person1 = {
//   age: 25,
//   name: function (firstName, lastName) {
//     return firstName + " " + lastName;
//   },
// };

// console.log(person1.name("Alice", "Smith"));

// document.getElementById("demo").innerHTML =
//   person1.name("Alice", "Smith") + ", Age: " + person1.age;

// for in loop
const student = {
  name: "David",
  age: 22,
  course: "Computer Science",
  city: "San Francisco",
};

// console.log(student.name);

// iterating through object properties
// in here we retrieving keys and values both

for (let key in student) {
  console.log(key + ": " + student[key]);
}

//Object.values()
const values = Object.values(student);
console.log(values); // ['David', 22, 'Computer Science', 'San Francisco']

//Object.keys()
const keys = Object.keys(student);
console.log(keys); // ['name', 'age', 'course', 'city']

//Object.entries()
const entries = Object.entries(student);
console.log(entries); // [['name', 'David'], ['age', 22], ['course', 'Computer Science'], ['city', 'San Francisco']]

// Object.stringify()
const jsonString = JSON.stringify(student);
console.log(jsonString); // '{"name":"David","age":22,"course":"Computer Science","city":"San Francisco"}'

document.getElementById("demo").innerHTML = jsonString;
