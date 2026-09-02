/*
template literals -> string written using backticks ` `

for example -> ` Any expression be inside of template literals ${expression} `

expression interpolation -> all types of expressions can be inside there

*/

let age = 23;
console.log(` Age =  ${age} `);
console.log(` Age =  ${23 + 8 * 6} `);
console.log(` He is ${age > 18 ? "an adult" : "a minor"} `);

const fun = (age) => age * 23; //arrow function
console.log(` Age =  ${fun(age) / 23} `);
