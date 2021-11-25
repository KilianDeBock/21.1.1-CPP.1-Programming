function generateRandomNumber(min, max) {
  const number = Math.round(min + Math.random() * (max - min));
  return number;
}

let randomNumber = generateRandomNumber(0, 10);
console.log(randomNumber);
randomNumber = generateRandomNumber(-10, 0);
console.log(randomNumber);