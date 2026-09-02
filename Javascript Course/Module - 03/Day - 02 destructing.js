/*
Destructuring ---> allows values from arrays or properties from objects to be extracted and assigned to variables.
*/

//  {#d80,10}
//array destructing
let arr = [34, 55, 0, "Rose"];

//let first = arr[0]; //instead of this , we use the simplier syntax

let [first, second, , fourth] = arr;
let [, , third] = arr;
console.log(second); //55
console.log(fourth); //Rose
console.log(third); //0

//  {#02b,11}
//nested array
const nesArr = [
  34,
  {
    color: "red",
  },
  [11, 222],
];

const [e1, { color }, e3] = nesArr;
console.log(color); //red

//  {#aff,20}
//destructing objects
const obj = {
  name: "Tahsin",
  age: 29,
  cgpa: {
    sem1: 3.95,
    sem2: 3.98,
  },
  fav: ["movies", "tv"],
};

const {
  name: NewName, //renaming that key
  age,
  cgpa: { sem1, sem2 },
  fav: [ele1, ele2],
} = obj;

console.log(sem2); //3.98
console.log(NewName); //Tahsin








