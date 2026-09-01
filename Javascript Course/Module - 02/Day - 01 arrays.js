let arr = [1, 2, 3, "string", {}, true, -9, null];

console.log(arr); //[ 1, 2, 3, 'string', {}, true, -9, null ]
console.log(arr[4]); // {}
console.log(arr[8]); //undefined
console.log(arr.length); //8
//length is a property , not a method [ because there's no '()']