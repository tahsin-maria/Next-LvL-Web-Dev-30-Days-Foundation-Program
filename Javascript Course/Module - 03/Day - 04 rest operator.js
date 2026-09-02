//  {#5d3,4}
/*
Rest operator (...)= collect multiple values into one variable.
Spread operator (...)= expand one collection into multiple values.
*/

//  {#1b9,11}
const fun = (par1, ...remaining) => {
  console.log(remaining); //[ 99, 88, 77 ]
};
fun("first", 99, 88, 77);
fun("f", 99); //[ 99 ]
fun("f", { name: "Maria", roll: 34 }); //[ { name: 'Maria', roll: 34 } ]

const fun2 = (...parameter) => {
  console.log(parameter);
};
fun2("x", "y", "z"); //[ 'x', 'y', 'z' ]

//  {#732,3}
const arr = [1, 2, 3, 4, 4];
const [first, , ...restElements] = arr;
console.log(restElements); //[ 3, 4, 4 ]

//  {#316,11}
const obj = {
  name: "Tahsin",
  age: 29,
  cgpa: {
    sem1: 3.95,
    sem2: 3.98,
  },
  fav: ["movies", "tv"],
};
const { name, ...rests } = obj;
console.log(rests); //{ age: 29, cgpa: { sem1: 3.95, sem2: 3.98 }, fav: [ 'movies', 'tv' ] }
