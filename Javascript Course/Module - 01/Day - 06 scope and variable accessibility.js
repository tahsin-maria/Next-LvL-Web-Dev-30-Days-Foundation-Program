/*
Scope -> the area of the program where a variable can be accessed.

Global scope -> function scope -> block scope
*/

//  {#eda,3}
//Global scope
//variable can be accessed everywhere
let a = 12;

//  {#730,6}
//function scope
//variable is accessible only inside the function
const keys = () => {
  const m = 9;
  return m;
};

//  {#680,7}
//block scope -> {...}
//variable is accessible only inside the block
if (1 < 9) {
  const n = 8;
  console.log(n);
}



//  {#90c,18}
let age = 20; // global

function fun() {
  let x = 10; // function scope

  if (true) {
    let name = "Mini"; // block scope

    console.log(age); // 20
    console.log(x); // 10
    console.log(name); // Mini
  }

  console.log(age); // 20
  console.log(x); // 10
  //console.log(name); // error
}
fun();
