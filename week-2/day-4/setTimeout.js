//setTimeout
// show 1 to 10 numbers with delay of 1 second
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    document.write(i + "<br>");
  }, i * 1000);
}

// set interval
let count = 1;
let intervalId = setInterval(() => {
  document.write(count + "<br>");
  count++;
  if (count > 10) {
    clearInterval(intervalId);
  }
}, 1000);
