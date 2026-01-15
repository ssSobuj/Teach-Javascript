// localStorage
// what is localStorage?
// localStorage is a web storage object that allows you to store key-value pairs in a web browser with no expiration date.
// Data stored in localStorage persists even after the browser is closed and reopened.

// const localStorage = {
// name: "sajib",
// };
// localStorage.name = "localStorage Example";

// Example: set item in localStorage

const changeTheme = document.getElementById("changeTheme");

changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On page load, check the stored theme preference
window.addEventListener("load", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});

localStorage.setItem("name", "sajib");
localStorage.setItem("age", "25");
