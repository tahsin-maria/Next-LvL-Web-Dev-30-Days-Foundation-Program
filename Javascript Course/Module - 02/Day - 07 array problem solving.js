//  {#3fb,14}
//finding maximum element and sum in an array
let c = [10, 20, 30, 40, 0, -1, 2, 8];

let max = c[0];
let sum = 0;

for (let e of c) {
  if (e > max) {
    max = e;
  }
  sum += e; //finding sum
}
console.log(max); //40
console.log(sum); //109

//  {#93f,6}
//reverse array (using a new array)
let rev = [];
for (let i = c.length - 1; i >= 0; i--) {
  rev.push(c[i]);
}
console.log(rev);
