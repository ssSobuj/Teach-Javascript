//Error Handling in JavaScript using try-catch
// what is try and catch
// try block contains code that may throw an error
// catch block contains code to handle the error

const testErrorButton = document.getElementById("testError");

testErrorButton.addEventListener("click", () => {
  try {
    let result = riskyOperation();
    console.log("Operation successful:", result);
  } catch (error) {
    //Handle the error
    console.error("An error occurred:", error);
  } finally {
    console.log("Execution completed.");
  }
});

function riskyOperation() {
  // Simulating an error
  throw new Error("Something went wrong in riskyOperation!");
  //   return "All good!";
}
