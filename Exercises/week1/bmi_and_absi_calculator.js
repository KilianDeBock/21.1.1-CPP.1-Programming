/*
College week 1: Essentials
Date: 2021-09-26
===========================
Calculate your own BMI based around your weight and length.
 */

let weight = 80; // Set weight value
let waist = 0.96; // Set length value
let length = 1.88; // Set length value

const bmi = Math.floor(weight / Math.pow(length, 2)); // calculate bmi
const absi = Math.floor(waist / ((bmi * 2 / 3) * Math.sqrt(length))) // calculate absi

console.log('Your BMI is: ' + bmi + '. (-16 = --- | 16-20 = -+ | 20-25 = ++ | 25-30 = ++- | 30-40 = +- | 40+ = ---)'); // log bmi.
console.log('Your ABSI is: ' + absi + '. (0 is healthy, above is unhealthy)'); // log absi.