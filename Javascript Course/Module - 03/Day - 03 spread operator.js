//  {#233,20}
/*
spread operator (...) ->expands an iterable or object into individual elements/properties in a new context

// Array copy
const copyarr = [...arr];

// Combine arrays
const combined = [...arr1, ...arr2];

// Object copy
const copyobj = {...obj};

// Combine/update objects
const updated = {...obj, age: 22};

// Function arguments
functionName(...arr);

---> spread operator create shallow copy , not deep copy
*/

//  {#29e,6}
//copy array
const c1 = [1, 2, 3, 4];
const c2 = [...c1, 999];
console.log(c2); //[ 1, 2, 3, 4, 999 ]
const c3 = [...c1, "newelement", ...c2];
console.log(c3); //[ 1, 2, 3, 4, 'newelement', 1, 2, 3, 4, 999 ]

//  {#6f7,16}
//copy obj
const o1 = {
  name: "Tahsin",
  age: 29,
  cgpa: {
    sem1: 3.95,
    sem2: 3.98,
  },
  fav: ["movies", "tv"],
};

const o2 = {
  ...o1,
  country: "BD",
};
console.log(o2); //the o1 object is copied but both o1 and o2 share the same cgpa


//  {#0de,6}
//function arguements
const fun = (a, b, c) => {
  return a * b * c;
};
console.log(fun(...c1)); // 1*2*3 = 6
