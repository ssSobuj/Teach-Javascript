//loops

const a = "loop";

for (let i = 1; i <= 10; i++) {
  console.log(a + i);
}

let fruits = ["Apple", "Mango", "Banana", "Orange"];
const num = [10, 20, 30, 40, 50, 60, 80];

num.map((value, index) => {
  console.log(value - 2);
});

//map
fruits.map((value, index) => {
  document.getElementById("demo").innerHTML += index + " : " + value + "<br/>";
  console.log(value, index);
});

//forEach
fruits.forEach((value, index) => {
  console.log(index + " => " + value);
});

//filter
const num2 = [10, 20, 30, 40, 50, 60];

const values = num2.filter((value) => {
  return value >= 30; //[10,20]
});

console.log(values);
