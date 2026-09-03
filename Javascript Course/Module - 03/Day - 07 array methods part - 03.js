/*
reduce() — "Turn the whole array into ONE thing"

const val = arr.reduce((accumulator, currentElement)=>{...})


*/

//reduce()

//  {#915,8}
const nums = [40, 30, 20, 10];
const val = nums.reduce((accum, curr) => {
  //accumulator -> total accumulated value till now, 0 is it's initial value
  //curr -> current element
  return accum + curr; //add current element with accumulator and store it in accumulator
}, 0); //0 is the initial value of accumulator (it can be any number)

console.log(val); //100 -> the sum

//  {#bd7,23}
//sort() or sort((a,b)=> a-b) ---> ascending
//sort((b,a)=> b-a) ---> descending

let arr = nums.sort();
console.log(arr); //[ 10, 20, 30, 40 ]
console.log(nums); //[ 10, 20, 30, 40 ] ->both sorted

nums.sort((a, b) => b - a); //descending
console.log(nums); //[ 40, 30, 20, 10 ]

const students = [
  { name: "Rahim", marks: 70 },
  { name: "Karim", marks: 90 },
  { name: "Nila", marks: 80 },
];
students.sort((a, b) => b.marks - a.marks);
console.log(students);
/*
  { name: 'Karim', marks: 90 },
  { name: 'Nila', marks: 80 },
  { name: 'Rahim', marks: 70 }
]
*/
