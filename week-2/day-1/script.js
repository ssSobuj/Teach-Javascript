// DOM Introduction Assignment

function changeTheme() {
  // 1. Select the element
  const card = document.getElementById("profileCard");
  const name = document.getElementById("userName");

  // 2. Check current background to toggle
  // Note: style.backgroundColor returns RGB strings typically
  if (card.style.backgroundColor === "black") {
    // Change Styles back to light
    card.style.backgroundColor = "white";
    card.style.color = "black";
    name.innerText = "John Doe"; // Changing Content
  } else {
    // Change Styles to dark
    card.style.backgroundColor = "black";
    card.style.color = "white";
    name.innerText = "Jane Doe"; // Changing Content
  }
}
