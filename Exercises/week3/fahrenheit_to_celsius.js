function convertFahrenheitToCelsius(f) {
  let message = `${f}°F = ` + (Math.round(((f - 32) * 5 / 9) * 100) / 100) + '°C';
  return message;
}

function convertCelsiusToFahrenheit(c) {
  let message = `${c}°C = ` + (Math.round(((c * 9 / 5) + 32) * 100) / 100) + '°F';
  return message;
}

// F => C
console.log(convertFahrenheitToCelsius(180));
console.log(convertFahrenheitToCelsius(0));

// C => F
console.log(convertCelsiusToFahrenheit(21));
console.log(convertCelsiusToFahrenheit(-28));