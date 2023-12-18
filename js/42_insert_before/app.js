//   =====insert before===
const parent = document.body;
console.log(parent);
parent.style.background ="red"

const elment = document.createElement("h1")
elment.textContent ="this is a heading";
// console.log(elment)
const list =document.getElementById("list")
parent.insertBefore (elment``,list);

