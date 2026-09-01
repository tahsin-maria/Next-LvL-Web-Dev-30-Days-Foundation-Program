//  {#fb8,5}
/*
function function_name(parameters){
    ...
}
*/

//  {#8a9,6}
function sum(a, b = 9) {
  return a + b;
}
const s = sum(12, 0);
console.log(s); //12
console.log(sum(12)); // 21

//  {#304,10}
//arrow function
const sub = (a, b = 1) => a - b;
console.log(sub(12)); //11
//sub is a const variable storing the function

const fun = () => {
  const x = 12 * 3;
  return x;
};
console.log(fun()); //36

//  {#9cb,14}
/*
---> difference between function and const keyword in function definitions

    =>functions defined with 'function' keyword can be called before the definition
    =>but those who are defined with 'const' , can't be called before the definition

    console.log(f1(1,2)); //called before definition , totally ok
    function f1(a,b){...} //function definition


    const f1=(a,b)=>{...}
    console.log(f1(1,2));//can be called only after definition , not before

*/