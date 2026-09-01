//  {#6ce,8}
/*
string ---> sequence of characters

template literals _> use bacticks ` ` instead of ' ' or " ".

for example---> `${variables or expressions} string`

*/

//  {#abb,4}
let a = "this is a string";
let b = "daily";
console.log(`${a} and we use it ${b} \nok`); //this is a string and we use it daily
                                             //ok

//  {#fdc,5}
//string methods ---> includes() , toUpperCase() , toLowerCse() , length
let m = "Tahsin Maria";
console.log(m.includes("M")); // true
let n = "Cats and Dogs";
console.log(n.includes("Dog")); // true

//  {#464,4}
console.log(m.toUpperCase()); //TAHSIN MARIA
console.log(m); // Tahsin Maria (it didn't modify the original string)
console.log(n.toLowerCase()); //cats and dogs
console.log(n); // Cats and Dogs (it didn't modify the original string)

//  {#c37,1}
console.log(m.length); //12

//  {#a56,17}
/*
---> strings are immutable(can't be changed after creation) in js

    a = 'World';
    a[2] = 'M';
    console.log(a);//World , not WoMld

---> string methods can't modify the original string but the can return a new string

    let p = 'world';
    p = p.toUpperCase(); // p = 'WORLD'(didn't modify 'world' else created a new one & assigned it)
    console.log(p); // WORLD 

---> string interpolation (putting variables or expressions inside a string)

done with template literals
*/
