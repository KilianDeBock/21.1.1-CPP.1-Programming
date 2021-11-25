/*
College week 1: Essentials
Date: 2021-09-23
===========================
Create your own Curriculum Vitae.
 */

// Set values to be used later on.
const firstName = 'Kilian';
const lastName = 'De Bock';
let gender = 'Male';
let age = 20;
let married = false;
let avatar = '💩';
const motto = 'I\'ts Lyttle, Stualyttle!';
let languages = ["Dutch: *****-*****", "English: *****-*"]

// Set message layout:
const message = `My personal Curriculum Vitae\n\
${"=".repeat(60)}\n\
Firstname: ${firstName}\n\
Lastname: ${lastName}\n\
Gender: ${gender}\n\
Age: ${age}\n\
Married: ${married}\n\
Avatar: ${avatar}\n\
Motto: ${motto}\n\
${"-".repeat(60)}\n\
Languages:\n\
${languages[0]}\n\
${languages[1]}
${"=".repeat(60)}`

console.log(message) // log Curriculum Vitae.