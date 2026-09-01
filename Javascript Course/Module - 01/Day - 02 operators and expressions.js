//  {#569,20}
/*
Operators (performs operations on values)

arithmetic operators -> +,-,*,/,%,** 
logical operators    -> && , || , !
comparison operators -> <,>,==,===,<=,>=,!=,!==
assignment operators -> =,+=,*=,-=,/=

== -> loose equality (compares only values not data type)
5 == '5' -> true

=== -> strict equality (compares both value and data type)
5 === '5' -> false

---> only ** and assignment operators are right associative 
, the rest arithmetic operators are left associative


Expressions (that produces a value)
*/

//  {#663,4}
let a = 3 ** (4 ** 2); // evaluated as 3 ** (4 ** 2)
let b = 20 - 4 + 5; //evaluated as (20-4)+5 [same precedence -> left associative]
let m, n, p;
m = n = p = 10; // m = n = (p = 10) -> m = (n = 10) -> m = 10 , right associative

//  {#af0,4}
console.log(120 == "120"); // true
console.log(120 === "120"); //false
console.log(120 != "120"); //false
console.log(120 !== "120"); //true

//  {#ba9,15}
/*

precedence order-->

()
**
* / %
+ -
< > <= >=
== != === !==
&&
||
=

*/