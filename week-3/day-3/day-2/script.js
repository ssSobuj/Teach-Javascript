//synchronous JavaScript
// Synchronous JavaScript is a programming paradigm where code is executed sequentially, meaning each operation must complete before the next one begins.
// In synchronous JavaScript, tasks are performed one at a time, blocking the execution of subsequent code until the current task is finished.
// Synchronous JavaScript is straightforward and easy to understand, but it can lead to performance issues if long-running tasks block the main thread.
// Example of Synchronous JavaScript

//Asynchronous JavaScript
// Asynchronous JavaScript is a programming paradigm that allows for non-blocking operations, enabling the execution of other code while waiting for an operation to complete.
// In JavaScript, asynchronous operations are typically handled using callbacks, promises, and async/await syntax.
// Asynchronous JavaScript is commonly used for tasks such as making network requests, reading files, and handling timers.
// Example of Asynchronous JavaScript using setTimeout

// console.log("Start");

// setTimeout(() => {
//   console.log("This is asynchronous code 2s");
// }, 2000);

// setTimeout(() => {
//   console.log("This is asynchronous code 1s");
// }, 1000);

// console.log("middle");
// console.log("end");

//Callbacks
// what is callback?
// A callback is a function that is passed as an argument to another function and is executed after a certain event or operation is completed.
// Callbacks are commonly used in asynchronous programming to handle operations that take time to complete, such as network requests or file I/O.

// Example of Callback function

// function fetchData(displayData) {
//   setTimeout(() => {
//     const data = "Sample Data";
//     displayData(data);
//   }, 2000);
// }

// function displayData(data) {
//   console.log("Fetched Data: " + data);
// }
// fetchData(displayData);

// async await
// what is async await?
// Async/await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner.
// The async keyword is used to declare a function as asynchronous, while the await keyword is used to pause the execution of the function until a Promise is resolved.
// Async/await makes it easier to work with Promises and handle asynchronous operations without the need for complex callback chains.

// Example of async await

//fetch(url)

const titleElement = document.getElementById("title");

async function fetchDataAsync() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    console.log(posts);

    posts.map((post) => {
      const para = document.createElement("p");
      para.innerText = post.title;
      titleElement.appendChild(para);
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

fetchDataAsync();
