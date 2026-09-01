//  {#66f,16}
/*
if(condition 1)
{

}
else if(condition 2)
{

}
...

else
{

}
*/

//  {#311,14}
//nested if else

if (5 === "5") {
  console.log("if");
  if ("a" === "a") {
    console.log("nested if");
  } else {
    console.log("nested else");
  }
} else if (2 == 1) {
  console.log("else if 1");
} else {
  console.log("else");
}

//  {#cb1,2}
//ternery operator -> condition ? valueIfTrue : valueIfFalse
1 < 10 ? console.log("true") : console.log("false"); //true