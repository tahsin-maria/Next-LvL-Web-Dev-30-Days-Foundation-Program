let arr = [
  //nested array with objects as element
  {
    name: "Maria",
    roll: 34,
  },
  {
    name: "Saba",
    roll: 13,
  },
  {
    name: "Maisha",
    roll: 34,
    //nested object
    address: {
      city: "Bogura",
      country: "Bangladesh",
      roadNo: [100, 101, 102],
    },
  },
];

//  {#241,6}
console.log(arr[2]); //returns object
console.log(arr[2]["roll"]); //34
console.log(arr[2]["address"]["city"]); //Bogura
console.log(arr[2]["address"]["roadNo"]); //[ 100, 101, 102 ]
console.log(arr[2]["address"]["roadNo"][2]); //102
console.log(arr[2].address.roadNo[2]); //102

//  {#069,8}
//value updating,insertion,deletion
arr[2].address.roadNo[2] = 9999999999;
console.log(arr[2].address.roadNo[2]); //9999999999

delete arr[2].address.roadNo[2]; //deleted

arr[2].address.zipCode = 6667; //added
console.log(arr[2].address);

//  {#ec3,18}
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

let x = Object.entries(student);
console.log(x[3]); //[ 'address', { area: 'Baludanga', zilla: ' Naogaon' } ]
console.log(x[3][1]); //{ area: 'Baludanga', zilla: ' Naogaon' }
console.log(x[3][1].zilla); //Naogaon
