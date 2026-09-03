//  {#a2a,8}
/*
optional chaining -> (using ?.)

object?.property --->If the thing before ?. exists, access the property.
Otherwise, give me undefined.

nullish coalescing --->
*/

//  {#26d,14}
const student = {
  name: "Rahim",
  address: {
    city: "Khulna",
  },
};
console.log(student.address.city); //Khulna

const newstudent = {
  name: "Rahim",
};
//console.log(newstudent.address.city); //error , because address doesn't exist , accessing it gives error
console.log(newstudent.address?.city); //undefined , now it gives no error
console.log(newstudent?.address?.city); //if newstudent exists? then go to address, if it exists? then access city

//  {#2e3,12}
//nullish coalescing ---> ?? ---> A ?? B -> If A is null or undefined, use B

let val = null;
console.log(val ?? "it's null"); //it's null
let v = "Maria";
console.log(v ?? "it's null"); //Maria

const s = {
  name: "Tahsin",
};
//console.log(s.email); //undefined
console.log(s.email ?? "No email found"); //No email found

//  {#c44,15}
// ?. + ??
console.log(s.email?.edumail ?? "No edu mail given"); //No edu mail given
/*
s.email
       ↓
doesn't exist
       ↓
?. prevents error
       ↓
undefined
       ↓
?? sees undefined
       ↓
"No edu mail given"
*/