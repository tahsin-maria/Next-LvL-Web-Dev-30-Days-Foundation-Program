//  {#3e8,7}
/*
find() → find the FIRST matching element.
filter() → find ALL matching elements.

some() → Does at least ONE element satisfy the condition?
every() → Do ALL elements satisfy the condition
*/

let arr = [0, 1, 2, 3];

//  {#049,2}
let val = arr.find((num) => num > 1);
console.log(val); //2


//  {#c78,1}
console.log(arr.some((num) => num > 1));//true

//  {#3ff,2}
console.log(arr.every((num) => num > 1));
//false
