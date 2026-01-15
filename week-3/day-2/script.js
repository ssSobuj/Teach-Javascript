//session storage example
// what is session storage?
// session storage is a web storage object that allows you to store data for the duration of the page session.
// The data is stored in key-value pairs and is only available for the duration of the page session.
// The data is deleted when the page session ends, which occurs when the browser or tab is closed.

//when session storage is used?
// Session storage is used when you want to store data that is only needed for the duration of the page session.
// when session storage is closed, the data is deleted.
// Session storage is useful for storing temporary data, such as user preferences or form data.

// Example of session storage
function saveData() {
  const dataInput = document.getElementById("dataInput").value;
  sessionStorage.setItem("data", dataInput);
  alert("Data saved to session storage: " + dataInput);
}

//JSON with Storage
// You can also store complex data structures like objects and arrays in session storage by converting them to JSON strings using JSON.stringify() and retrieving them using JSON.parse().
// why JSON?
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
// JSON is used to represent data structures and objects in a text format that can be easily transmitted over a network or stored in a file.

const user = {
  name: "John Doe",
  age: 30,
  email: "mdsobujredoy@email.com",
};

localStorage.setItem("user", JSON.stringify(user));

// window.onload = function () {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   console.log(storedUser);
// };

// what is json formate
// JSON format is a text format that is used to represent data structures and objects.
// JSON format is based on a subset of the JavaScript programming language and is easy for humans to read and write.
// JSON format is used to transmit data between a server and a web application as an alternative to XML.

// Example of JSON format
const jsonData = `{
  "name": "John Doe",
  "age": 30,
  "email":"mdsobujredoy@email.com"
  }`;

console.log(user);
