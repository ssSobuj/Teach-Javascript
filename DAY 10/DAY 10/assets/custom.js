const form = document.getElementById("registerForm");
const fullName = document.getElementById("fullName");
const successMsg = document.getElementById("successMsg");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");
const terms = document.getElementById("terms");
const selectOption = document.getElementById("selectOption");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked');
  console.log("selectOption:", selectOption);
  console.log("gender:", gender);

  console.log("fullName:", fullName.value);
  console.log("email:", email.value);
  console.log("password:", password.value);
  console.log("confirmPassword:", confirmPassword.value);
  console.log("age:", age.value);
  console.log("gender:", gender);
  console.log("selectOption:", selectOption?.value);
  if (fullName.value.trim() === "") {
    alert("Full Name is required");
  } else if (email.value.trim() === "" || !validateEmail(email.value.trim())) {
    alert("Valid Email is required");
  }
  if (validatePassword(password.value) === false) {
    alert(
      "Password must be at least 8 characters and one uppercase letter and one number long"
    );
  }
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
  }
  if (age.value < 18) {
    alert("You must be at least 18 years old");
  }
  if (gender === null) {
    alert("Gender is required");
  }
  if (!terms.checked) {
    alert("You must accept the terms and conditions");
  }

  if (selectOption?.value === "") {
    alert("Please select an option from the dropdown");
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return re.test(password);
}
