//  {#400,19}
/*
Javascript Data Types -> "tells what kind of values a variable is storing"

'SSBBNNUO' -> all data types is js
S -> String
S -> Symbol
B -> BigInt
B -> Boolean
N -> null
N -> number
U -> undefined
O -> object
---> only object is non-primitive type and the other 7 are primitive types

----Primitive vs Non-Primitive Data Types

=> primitive     -> stores only 1 value
=> non-primitive -> stores collection/ reference to complex data
*/

//  {#905,9}
let a = 12;
console.log(typeof a); //number
a = 1.677;
console.log(typeof a); //number

a = Infinity;
console.log(typeof a); //number
a = NaN; // NaN -> Not a Number
console.log(typeof a); //number

//  {#1b1,4}
let b = "s";
console.log(typeof b); //string
b = "hello" * 10;
console.log(b); // NaN (it's not a data type)

//  {#940,2}
b = true;
console.log(typeof b); //boolean

//  {#d1d,7}
let c; // no value assigned
console.log(c); // undefined (output)
console.log(typeof c); // undefined (data type)

let d = null; // intentionally set no value to it
console.log(d); // null
console.log(typeof d); // object (null is a primitive data type , still typeof null returns object , which is an old js bug that has been kept since its early days)

//  {#33a,3}
const e = 1234567899999n; // bigint (very large integers)
console.log(e); // 1234567899999n
console.log(typeof e); //bigint , n at last makes it bigint

//  {#cd4,4}
let m = Symbol("id"); // Symbol() -> create a unique value
let n = Symbol("id");
console.log(m == n); //false
console.log(typeof m); //symbol

//  {#cef,7}
let student = {
  name: "Maria",
  cgpa: 4.0,
  married: false,
};
console.log(student, student.cgpa, typeof student, typeof student.cgpa);
//{ name: 'Maria', cgpa: 4, married: false } 4 object number


//  {#20d,2}
let x; //value can be changed later
const y = 1; // value can't be changed and must be intialized with a value

//  {#76c,10}
/*
Number      → 25, 3.14
String      → "Hello"
Boolean     → true / false
Undefined   → declared but no value
Null        → intentionally empty
BigInt      → very large integers
Symbol      → unique identifiers
Object      → collection of related data
*/
