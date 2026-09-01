//  {#f39,8}
let arr = ["apple", "banana", "kiwi", "jackfruit", "papaya"];

// for of

for (let a of arr) {
  // a is every element of array
  console.log(a); //prints elements in each iteration
}

//  {#274,18}
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

for (let e in student) {
  console.log(e); //prints only keys in each iteration
  console.log(e, "--->", student[e]); // key ---> value
}
