// Javascript Events & Event Object

const box = document.getElementById("colorBox");
const btn = document.getElementById("clickBtn");
const input = document.getElementById("inputField");

// 1. Click Event (Handler)
btn.addEventListener("click", function (event) {
  // Generate random color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  box.style.backgroundColor = "#" + randomColor;
  box.innerText = "Clicked! #" + randomColor;
  console.log("Random Color Generated:", randomColor);

  // Using Event Object
  // console.log("Event Type:", event.type);
  // console.log("Button clicked at X:", event.clientX, "Y:", event.clientY);
});

// 2. Mouse Over Event
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "pink";
  box.innerText = "Mouse Inside!";
});

// 3. Mouse Out Event
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightgray";
  box.innerText = "Mouse Outside!";
});

// 4. Keypress/// filepath: d:\work\Learn Javascript\weeek-1\day-7\script.js
// Javascript Events & Event Object

const box2 = document.getElementById("colorBox");
const btn2 = document.getElementById("clickBtn");
const input2 = document.getElementById("inputField");

// 1. Click Event (Handler)
btn2.addEventListener("click", function (event) {
  // Generate random color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  box2.style.backgroundColor = "#" + randomColor;
  box2.innerText = "Clicked! #" + randomColor;
  // Using Event Object
  console.log("Event Type:", event.type);
  console.log("Button clicked at X:", event.clientX, "Y:", event.clientY);
});

// 2. Mouse Over Event
box2.addEventListener("mouseover", function () {
  box2.style.backgroundColor = "pink";
  box2.innerText = "Mouse Inside!";
});

// 3. Mouse Out Event
box2.addEventListener("mouseout", function () {
  box2.style.backgroundColor = "lightgray";
  box2.innerText = "Mouse Outside!";
});

// 4. Keypress/Input Event (Live typing)
input2.addEventListener("keyup", function (event) {
  const colorValue = event.target.value; // Get value from Event Object
  box2.style.backgroundColor = colorValue;
  box2.innerText = "Typing: " + colorValue;
});

// what is math.random()?// Math.random() is a built-in JavaScript function that generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). This means it can return any value from 0 up to, but not including, 1. It is commonly used for generating random values in various applications, such as games, simulations, or random selections.
