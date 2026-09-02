//  {#30d,8}
//forEach() ---> For each item in fruits, run this function. it does not return anything
//    map() ---> For each item in fruits, run this function. returns array
// filter() ---> Go through the array and keep only the elements that satisfy my condition

//for forEach(),map(),filter()
// 1st parameter -> Element
// 2nd parameter -> index
// 3rd parameter -> array

//  {#986,6}
//forEach()
let arr = [1, 2, 3];

arr.forEach((num, idx) => {
  console.log("index " + idx + "->" + "element " + num);
});

//  {#cc0,5}
//map()
let newArr = arr.map((num, idx) => {
  return num * 2;
});
console.log(newArr); //[2,4,6]

//  {#be9,3}
//filter() -> filters based on a condition and returns array
let arrNew = arr.filter((num) => num > 1);
console.log(arrNew);  //[2,3]
