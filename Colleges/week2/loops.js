/*
Associate Degree in Computer Programming
Topic: Loops
Developped by: Stualyttle
Modified: 2021-10-01
 */

// For
for (let i = 0; i <= 10; i++) {
  console.log(`The value of i is ${i}`);
}

// Example: Sort of rectangle
let output = '', nRows = 6, nCols = 12, ch = '🍅';
for (let row = 0; row < nRows; row++) {
  for (let col = 0; col < nCols; col++) {
    output += ch;
  }
  output += '\n';
}
console.log(output);

// for ... in
let person = {
  firstName: 'John',
  lastname: 'Smith',
  gender: 1
};

console.log(person.firstName);
console.log(person);
person.firstName = 'Kenneth';
console.log(person.firstName);
console.log(person);

output = '';

for (let prop in person) {
  output += `\nThe property ${prop} has the value ${person[prop]}`;
}
console.log(output);

// Ternary operator
let isPlaying = true;
if (isPlaying) {
  output = 'I\'m playing!';
} else {
  output = 'Game over!';
}

console.log(output);

output = (isPlaying) ? 'I\'m playing!' : 'Game over!';
console.log(output);