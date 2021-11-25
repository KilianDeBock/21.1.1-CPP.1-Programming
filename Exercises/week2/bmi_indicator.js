let length = 1.72, weight = 65;
let BMI = Math.floor(weight / Math.pow(length, 2));

let message = `Your BMI is ${BMI}. `;

if (BMI <= 18.5) {
  message += 'You are underweight.';
} else if (BMI < 25) {
  message += 'You have the recommended weight.';
} else if (BMI <= 30) {
  message += 'You the overweight.';
} else {
  message += 'You are obese.';
}

console.log(message);
