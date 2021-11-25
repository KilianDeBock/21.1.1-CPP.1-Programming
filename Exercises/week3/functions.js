/*
Topic: Functions
Author: Stualyttle
Modified: 10-05°21
*/

function sayHello() {
  console.log('Hello World!');
}

// Call the funtion sayHello:
sayHello();
sayHello();

function greeting(fullName = 'Stualyttle Kirry') {
  console.log(`Welcome ${fullName}.`);
}

greeting('Kilian De Bock');
greeting('Veli Duran');

function multiply(a, b) {
  const c = a * b;
  console.log(c);
}

multiply(2, 4);

/*
Describe a function in order to generate a rectangle shape
The function has two parameters: nCols (amount of columns) and nRows (the amount of rows)
*/

function generateRectangle(nCols, nRows, ch = '*', sp = '  ') {
  let output = '';
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      output += ch + sp;
    }
    output += '\n';
  }
  console.log(output);
}

generateRectangle(12, 5);
generateRectangle(3, 3, '///', '');
generateRectangle(9, 6, '@');

const personA = 'John Doe';

function swap(person) {
  person = 'Jane Doe';
  return person;
}

const personB = swap(personA);
console.log(`Person A: ${personA}`);
console.log(`Person B: ${personB}`);


/*
Describe a function in order to generate a random number
Two parameters: min value and max value
*/
function generateRandomNumber(min, max) {
  const v = Math.round(min + Math.random() * (max - min));
  return v;
}

let v1 = generateRandomNumber(6, 8);
console.log(`The random value is ${v1}`);
v1 = generateRandomNumber(-2, 4);
console.log(`The random value is ${v1}`);

let c = String.fromCharCode(69);
console.log(c);

function generateRandomUsername(nChars) {
  let output = '';
  for (let n = 0; n < nChars; n++) {
    output += `${String.fromCharCode(generateRandomNumber(70, 124))}`;
  }
  return output;
}

let userName = generateRandomUsername(6);
console.log(`The username is ${userName}`);
userName = generateRandomUsername(120);
console.log(`The username is ${userName}`);
