// Sets the value in correct temperature.
const celsius = 24;
const fahrenheit = 132;

// We first round the number when multiplying 100, than taking it of, so its shorter and rounded.
console.log(`${celsius}°C = ` + (Math.round(((celsius * 9 / 5) + 32) * 100) / 100) + '°F'); // Calculation from celsius to fahrenheit, and than logging it.
console.log(`${fahrenheit}°F = ` + (Math.round(((fahrenheit - 32) * 5 / 9) * 100) / 100) + '°C'); // Calculation from fahrenheit to celsius, and than logging it.