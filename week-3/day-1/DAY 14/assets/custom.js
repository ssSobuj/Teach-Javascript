const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const visitCountText = document.getElementById("visitCount");

window.onload = function () {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    greeting.innerText = `Welcome, ${storedName}!`;
    usernameInput.value = storedName;
  }

  let visits = localStorage.getItem("visits");
  visits = visits ? Number(visits) + 1 : 1;
  localStorage.setItem("visits", visits);
  visitCountText.innerText = `You have visited this page ${visits} times.`;
};

function saveUser() {
  const name = usernameInput.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  localStorage.setItem("username", name);
  greeting.innerText = `Welcome, ${name}!`;
}

function clearUser() {
  localStorage.removeItem("username");
  greeting.innerText = "";
  usernameInput.value = "";
}
