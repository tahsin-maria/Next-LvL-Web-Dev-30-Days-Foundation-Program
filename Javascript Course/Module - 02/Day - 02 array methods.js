//  {#12c,3}
//array methods -> push(),pop(),splice(),slice(),shift(),unshift(),includes()
//push(),pop(),shift(),unshift(),splice() -> modify the original array
//slice() , includes() -> don't modify the original array

let arr = [1, 2, 3, 4, 5];

//  {#8ed,5}
arr.push(99); //push to end
console.log(arr); //[ 1, 2, 3, 4, 5, 99 ]
arr.pop(); //pop from end
console.log(arr.pop()); // 5 -> returns the popped element -> same for arr.shift()
console.log(arr); //[ 1, 2, 3, 4 ]

//  {#020,5}
arr.unshift(1222); //push to start
console.log(arr); //[ 1222, 1, 2, 3, 4 ]

arr.shift(); //pop from start
console.log(arr); //[ 1, 2, 3, 4 ]

//  {#739,12}
//splice() -> insert/remove/replace elements in any index
//splice(start_index , delete_count)
//for insertion -> splice(start , deletecount , item1,item2 ,...)

arr.splice(2, 1); //start from index 2 and delete 1 element
console.log(arr); //[ 1, 2, 4 ]

arr.splice(2, 0, "hello"); //start from index 2 , no deletion , insert 'hello' there
console.log(arr); //[ 1, 2, 'hello', 4 ]

arr.splice(2, 1, "h1", "m2"); //start from index 2, delete 1 element ,insert the new elements
console.log(arr); //[ 1, 2, 'h1', 'm2', 4 ]

//  {#c79,9}
//slice(start,end) -> copies a portion of an array , end index is exclusive here
let x = arr.slice(0, 2); // from index 0 to 1 (not 2)
console.log(x); //[ 1, 2 ]

x = arr.slice(0, 1);
console.log(x); //[ 1 ]

x = arr.slice(0, 0);
console.log(x); // []

//  {#69a,3}
console.log(arr.includes(2)); //true
console.log(arr.includes(1, "h1")); //true
console.log(arr.includes(6, "h1")); //false (both elements must be present)
