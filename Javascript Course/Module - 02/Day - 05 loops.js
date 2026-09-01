//  {#abc,10}
for (let i = 0; i < 7; i++) {
  //it will give correct ans even if we don't write let
  console.log(i);
  if (i == 5) {
    break;
  }
  if (i == 2) {
    continue;
  }
}

//  {#13c,7}
let arr = [1, 2, 3, 4];
i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
