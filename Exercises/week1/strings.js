/*
Programming 1: Essentials
Date: 2023-09-23
===========================
Topics: Strings, concatenations
 */

// Set and log name + age
const firstName = 'Kilian';
const lastName = 'De Bock';
const fullName = firstName + ' ' + lastName;
let age = 20;
// console.log('My name is ' + fullName + ', I\'m ' + age + ' years old.'); // The ugly way.
// Set and log message.
let msg = `My name is ${fullName}, I\'m ${age} years old.`;
console.log(msg);

// Set values and message, than log it.
const w = 1920;
const h = 1024;
msg = `My computer screen has a dimension of ${w}x${h}.`;
console.log(msg);