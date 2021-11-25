/*
Author: Stualyttle
Modified: 2021-09-30
Topic: Logical operators
 */

// AND => &&
let result;
result = true && true;
result = false && true;
result = false && 'PGM';
result = true && 'PGM';
result = 'PGM' && true;

// OR => ||
result = true || true;
result = true || false;
result = true || (3 == 6);
result = 'PGM' || 'NMD';

// NOT => !
result = !true;
result = !'PGM';
console.log(result);

// Typeof
let size = 1.72;
let firstName = 'Kilian';
console.log(typeof firstName);
console.log(typeof alien);
console.log(typeof true);
let now = new Date();
console.log(typeof now);
console.log(now.toLocaleTimeString('en-US'));

// If ... else
isFemale = false;
if (isFemale) {
  console.log('You are a lady!');
} else {
  console.log('you are James.');
}

// if ... else if ... else
let gender = 1; // 0: Not known, 1: Male, 2: Female, 9: Not specified
if (gender == 0) {
  console.log('Gender is not known.');
} else if (gender == 1) {
  console.log('Gender is Male.');
} else if (gender == 2) {
  console.log('Gender is Female.');
} else if (gender == 9) {
  console.log('Gender is not specified.');
} else {
  console.log('Error: No valid gender type provided.');
}

// Equality operators
console.log(3 == 3);
console.log(3 != 3);
console.log(3 == '3');
console.log(3 != '3');
console.log(3 === '3');
console.log(true == 1);
console.log(true === 1);
console.log(false != 1);
console.log(false !== 0);

// Relational operators
// < > <= >=
console.log(3 < 4);
console.log(3 > 4);
console.log(3 <= 3);
console.log(3 >= 4);

// Switch case
gender = 1;
let message = 'Gender is ';
switch (gender) {
  case 0:
    message += 'not known.';
    break;
  case 1:
    message += 'Male.';
    break;
  case 2:
    message += 'Female.';
    break;
  case 9:
    message += 'not specified.';
    break;
  default:
    message = 'Error: No valid gender type provided.';
}
console.log(message);