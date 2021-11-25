function getBMI(length, weight) {
  if (isNaN(Number(length)) || isNaN(Number(weight))) {
    return `Please enter only numbers, Try again!`;
  }

  const BMI = Math.round(Number(weight) / Math.pow(Number(length), 2));

  if (BMI <= 18.5) {
    return `Your BMI is ${BMI} and you are underweight.`;
  } else if (BMI < 25) {
    return `Your BMI is ${BMI} and you have the recommended weight.`;
  } else if (BMI <= 30) {
    return `Your BMI is ${BMI} and you are overweight.`;
  } else {
    return `Your BMI is ${BMI} and you are obese.`;
  }
}

const length = window.prompt('How tall are u? (Example: "1.70" in m)');
const weight = window.prompt('What is your weight? (Example: "60" in kg)');
alert(getBMI(length, weight));

location.reload();