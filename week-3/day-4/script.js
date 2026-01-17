// what is api in javascript?
// An API (Application Programming Interface) in JavaScript is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests for data or services should be made, what data formats to use, and how responses should be structured. APIs can be used to interact with web services, libraries, or frameworks, enabling developers to access functionality without needing to understand the underlying code. Examples of APIs in JavaScript include the Fetch API for making network requests and the DOM API for manipulating HTML and CSS.

// Example of Fetch API to get data from a public API
const contentElement = document.getElementById("content");

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    console.log(todos);

    const sliceTodos = todos.slice(0, 10);

    sliceTodos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.textContent = `ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`;
      contentElement.appendChild(todoItem);
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

fetchData();

// post api

const form = document.getElementById("myForm");
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");

const formData = {
  title: "",
  completed: false,
};

form.addEventListener("click", (e) => {
  e.preventDefault();
  formData.title = todoInput.value;
  createPost(formData);
});

const postApiUrl = "https://jsonplaceholder.typicode.com/posts";

async function createPost(data) {
  try {
    const response = await fetch(postApiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);
  } catch (error) {
    console.log("Error creating post: ", error);
  }
}

// all fetch methods in javascript
// update api
// put api and patch api
// what is the difference between put and patch api?
// The main difference between PUT and PATCH APIs lies in how they update resources on the server. PUT is used to completely replace a resource with a new representation, meaning that all fields must be provided in the request, and any fields not included will be removed. In contrast, PATCH is used to make partial updates to a resource, allowing you to send only the fields that need to be changed, while leaving the rest of the resource intact. In summary, use PUT for full updates and PATCH for partial updates.
