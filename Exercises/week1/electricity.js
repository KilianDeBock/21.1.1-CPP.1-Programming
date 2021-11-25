/*
College week 1: Essentials
Date: 2021-09-26
===========================
Electricity calculator.
 */

let v = 230; // Voltage in volts
let i = 2.85; // Current in amperes
let t = 0.02; // Time in seconds
let r = v / i; // Resistance in ohms
let p = v * i; // Power in watts
let f = 1 / t; // Frequention in hertz

// set message layout:
let msg = `${"=".repeat(69)}\n\
Formula Electricity\n\
${"=".repeat(69)}\n\
The resistance of the resistor: R = V / I => R = ${v} / ${i} = ${r.toFixed(2)} Ohms\n\
The capacity of the resistor: P = V * I => P = ${v} * ${i} = ${p.toFixed(2)} watts\n\
The frequency of the resister: F = 1 / t => F = 1 / ${t} = ${f.toFixed(2)} hertz\n\
${"=".repeat(69)}`;

console.log(msg); // Log message just set.