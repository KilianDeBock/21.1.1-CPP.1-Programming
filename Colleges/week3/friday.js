// Function expression = Anonymous function
const sq = function (v) {
  return v ** 2;
};

console.log(`sq(5): ${sq(5)}`);
// Arrow function

const mp = (a, b) => {
  return a * b;
};

console.log(`mp(2, 5): ${mp(2, 5)}`);

// Rest parameter
function people(leader, ...helpers) {
  let output = '';
  output += `Leader: ${leader}\n`;
  output += `___________________________________\n`;
  for (let element of helpers) {
    output += `${element}\n`;
  }
  return output;
}

console.log(`People: ${people('Remco Evenepoel', 'Bart', 'Eva', 'Willy')}`);

// Recap array
const fruit = ['Apple', 'Banana', 'Orange'];
console.log(fruit);
console.log(`Length of the array: ${fruit.length}`);
console.log(`Get the seccond fruit: ${fruit[1]}`);
// fruit.length = 30;
// console.log(fruit);
fruit[0] = 'Grape';
console.log(fruit);
// fruit[99] = 'candy';
// console.log(fruit);
const lecturers = [];
lecturers[0] = 'Evelien';
lecturers[1] = 'Adriaan';
console.log(lecturers);
const randomNumbers = [];
for (let i = 0; i < 250000; i++) {
  randomNumbers[i] = Math.floor(Math.random() * 10000);
}
console.log(randomNumbers);

// Scope of a function
// Hoisting
function getAward() {
  return 'CLIPO-award';
}

console.log(`The award is ${getAward()}`);

// Function expressions are not hoisted
const add = (a, b) => {
  return a + b;

};
console.log(`The sum is: ${add(4, 3)}`);

// Scope of a variable
if (true) {
  var e = 15;
}
console.log(e);

if (true) {
  let f = 16;
}
// console.log(f);

let g = 17;
if (true) {
  let g = 18;
  console.log(g);
}
console.log(g);

var h = 15;
if (true) {
  var h = 19;
  console.log(h);
}
console.log(h);

var i = 16;
if (true) {
  let i = 12;
  console.log(i);
}
console.log(i);

console.log(pipo);
var pipo = 'IT';

// console.log(k3);
// let k3 = 'sla';

// Object person, with properties
// Property = key / value pair
const person = {
  firstName: 'John',
  lastName: 'Lemon',
  '633|<': 'Stualyttle'
};
console.log(`Your firstname: ${person.firstName}`);
person.firstName = 'Emma';
console.log(`Your firstname: ${person.firstName}`);
person.age = 45;
person.genderCode = 2;
console.log(person);
person['age'] = 32;
console.log(`Your age is ${person.age}`);
console.log(`Your age is ${person['633|<']}`);
let output = 'Properties of the object person\n-------------------------------';
for (let prop in person) {
  output += `\n${prop} -> ${person[prop]}`;
}
console.log(output);

const students = [
  {
    firstName: 'Emma'
  },
  {
    firstName: 'Robin',
    adresses: [
      {
        street: 'Koekstraat'
      },
      {
        street: 'Industrieweg'
      }
    ]
  },
];
console.log(`The firstname of the second student: ${students[1].firstName}`);
console.log(`The street of the second address of the seccond student: ${students[1].adresses[1].street}`);
