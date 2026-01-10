//forms & validation

//input types = text, email, password, submit, reset, checkbox, radio, button, file, hidden, date, number
const values = " ";
console.log(values.trim());

// Get references to the form and its elements
const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const avatarInput = document.getElementById("avatar");
const role = document.getElementById("role");
const bio = document.getElementById("bio");
const submitButton = document.getElementById("submitButton");

// form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  let errors = [];
  // Validate username
  if (usernameInput.value.trim() === "") {
    alert("Username is required.");
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    alert("Email is required.");
  } else if (!validateEmail(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
  }
  // Validate password
  if (passwordInput.value.length < 6) {
    alert("Password must be at least 6 characters long.");
  }

  console.log("Username:", usernameInput.value);
  console.log("Email:", emailInput.value);
  console.log("Password:", passwordInput.value);
  console.log("Role:", role.value);

  console.log("Bio:", bio.value);
  console.log("Avatar File:", avatarInput.files[0]);
});

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
