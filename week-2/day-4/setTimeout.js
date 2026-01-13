// //setTimeout
// // show 1 to 10 numbers with delay of 1 second
// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     document.write(i + "<br>");
//   }, i * 1000);
// }

// // set interval
// let count = 1;
// let intervalId = setInterval(() => {
//   document.write(count + "<br>");
//   count++;
//   if (count > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// Counter with start, stop and reset buttons
// when click on start button counter should start incrementing every second
// when click on stop button counter should stop
// when click on reset button counter should reset to 0

const onButton = document.getElementById("on");
const offButton = document.getElementById("off");
const resetButton = document.getElementById("reset");
const counterDisplay = document.getElementById("counterDisplay");

let counter = 0;
let intervalId;

onButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      counter++;
      counterDisplay.innerText = counter;
    }, 1000);
  }
});

offButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  counterDisplay.innerText = counter;
});
