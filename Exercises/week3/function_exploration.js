function checkAge(age) {
  let check;
  check = age > 18 ? true : 'Did your parents allow you?';
  return check;
}

let check = checkAge(17);
console.log(`Check for age of 17: ${check}`);
check = checkAge(71);
console.log(`Check for age of 71: ${check}`);

function min(a, b) {
  return Math.min(a, b);
}

console.log(min(1, 7));
console.log(min(6, 2));
console.log(min(4, 5));

function pow(x, n) {
  return Math.pow(x, n);
}

console.log(pow(1, 7));
console.log(pow(6, 2));
console.log(pow(4, 5));