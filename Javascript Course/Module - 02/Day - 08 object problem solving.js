//  {#a09,22}
let student = {
  name: "Tahsin Maria",
  roll: 34,
  dept: "ECE",
  marks: {
    DBMS: 94,
    MATH: 91,
    HUM: 83,
  },
};

let totalmarks = 0;
let totalsubject = 0;

for (let t in student.marks) {
  // here t is every key of student.marks object
  totalmarks += student.marks[t];
  totalsubject++;
}

let avgmarks = totalmarks / totalsubject;
console.log(avgmarks.toFixed(2)); //89.33

//  {#235,20}
// Day Task
let cart = [
  { name: "shirt", price: 1200, quantity: 2 },
  { name: "pant", price: 900, quantity: 3 },
  { name: "bag", price: 1500, quantity: 1 },
];

//how many items bought and total bill ?

let totalBill = 0;
let itemsBought = 0;

for (let element of cart) {
  totalBill += element.price * element.quantity;
  itemsBought += element.quantity;
}
console.log(
  `Total bill is ${totalBill} BDT and total ${itemsBought} items are bought`,
);
//Total bill is 6600 BDT and total 6 items are bought