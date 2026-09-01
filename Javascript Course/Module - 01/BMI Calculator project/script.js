//BMI calculation

//input from terminal
let height = process.argv[2];
let weight = process.argv[3];

function bmi_calculate(height, weight) {
  let bmi_value = (weight / height) * height;
  return bmi_value;
}

let bmi = bmi_calculate(height, weight);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal weight");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
