//  {#b02,20}
/*
Object -> collection of entries (key - value pairs)

object can contain --->

string
number
boolean
array
another object
function

let object_name = {
    key : value,     ---> 1 entry
    key : value,     ---> 2 entry
    ...
}

accessing objects -> dot notation , bracket notation
*/

let student = {
  name: "Tahsin Maria",
  roll: 34,
  dept: "ECE",
  address: {
    area: "Baludanga",
    zilla: " Naogaon",
  },
  cgpa: [3.95, 3.98, 4.0],
  married: false,
  session: "2023-2024",
};

//  {#055,3}
console.log(student[3]); //undefined
console.log(student.roll); //34
console.log(student.address.area); //Baludanga

//  {#14a,7}
//remove an entry
delete student.married;
console.log(student); //deleted

//add an entry
student.married = false;
console.log(student); //added at the end

//  {#a39,15}
//dot notation
console.log(student.name); //Tahsin Maria

//bracket notation
console.log(student["name"]); //Tahsin Maria

//why bracket notation is needed?
let y = "roll";

console.log(student[y]); //34
console.log(student.y); //undefined

//why dot notation is needed?
console.log(student.address.area); //Baludanga (easier notation)
console.log(student["address"]["area"]); //Baludanga

//  {#820,19}
//Object.entries()
console.log(Object.entries(student)); //shows all key-values as pair in arrays
/*
[
  [ 'name', 'Tahsin Maria' ],
  [ 'roll', 34 ],
  [ 'dept', 'ECE' ],
  [ 'address', { area: 'Baludanga', zilla: ' Naogaon' } ],
  [ 'cgpa', [ 3.95, 3.98, 4 ] ],
  [ 'session', '2023-2024' ],
  [ 'married', false ]
]
  */

//Object.keys()
console.log(Object.keys(student)); // all keys in an array

//Object.values()
console.log(Object.values(student)); //all values in an array
