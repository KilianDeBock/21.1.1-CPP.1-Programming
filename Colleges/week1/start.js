/*
College week 1: Essentials
Date: 2023-09-23
===========================
Basics
Grammar
Syntax
 */

// Output to the console panel.
console.log('Hello world!');
console.log('Greetings, earthling!');

//Declaration pof variable.
const firstName = 'Kilian';
const lastName = 'De Bock 🎉';
console.log('First Name: ' + firstName);
console.log('Last Name: ' + lastName);

// Length of the person as constant
const LENGTH = 188;
console.log('Length: ' + LENGTH + 'cm')

// Single line comment.

/*
Multiple
lines
of
comments
 */

// Declaration of variable A
var a;
console.log(a);
a = 31;
console.log(a);

// Declaration and assignment in one line of code.
var b = 16;
console.log(b);

// const d; // SyntaxError: Assignment and declaration must be in one line of code.
const e = 9;
// e = 2; // TypeError: Assignment to constant variable.

let counter;
counter = 0;
counter++
console.log(counter);

//
const nickName = 'Stualyttle' // string
const isLeturer = false // Boolean
/*
The four codes specified in ISO/IEC 5218 are:

0 = Not known;
1 = Male;
2 = Female;
9 = Not applicable.
 */
let gender = 1 // Number
let weight = 70.10 // Floating point number
let $money = null // null

// back to the strings and do some cool stuff.
const email = "debockkilian@gmail.com";
let qouote = "I'm a programmer.";
console.log(qouote)
qouote = 'I\'m a full stack developper.';
console.log(qouote)

let poem = "Roses are red.\n\
Violates are blue\n\
sugar is sweet.\n\
and so is food."
console.log(poem)