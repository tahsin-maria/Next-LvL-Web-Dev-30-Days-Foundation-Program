//  {#fad,4}
import { add, subtract } from "./math.js"; //{} --> Give me these specific "named exports"

console.log(add(10, 5)); //15
console.log(subtract(10, 5)); //5

//  {#642,5}
//A file can have one default export
import multiply from "./math.js";
//import mul from "./math.js"; --> renaming multiply to mul

console.log(multiply(10, 5)); //50


//import multiply , {add,subtract} from "./math.js";  ---> same