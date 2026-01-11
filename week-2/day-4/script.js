const text = document.getElementById("id01").childNodes[0].nodeValue;
const newDiv = document.getElementById("new");
console.log(text);
const test = document.getElementById("test");
console.log(test);

const para = document.createElement("p");
para.innerText = "new paragraph";

const para2 = document.createElement("p");
para2.innerText = "another paragraph";

newDiv.appendChild(para);
test.appendChild(para2);

para2.remove();
