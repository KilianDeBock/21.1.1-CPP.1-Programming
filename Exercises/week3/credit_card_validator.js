function verifyCreditCardNumber(cardNumber) {
  cardNumber = String(cardNumber); // Make our live easier by setting it now.
  let result = false; // Set default value.

  // Check if the length is 16.
  if (cardNumber.length !== 16) {
    return result; // stop function and return current result (false)
  }

  // Check if a number isn't used to much.
  const numberList = cardNumber.split(''); // Create list of the numbers
  const numberObj = {}; // Create object for counting.
  for (let number of numberList) // add per number to a object.
    numberObj[number] = (numberObj[number] === undefined) ? 1 : ++numberObj[number];

  for (let number in numberObj)
    if (numberObj[number] > 2) { // Check if our object has in one slot more than 2 values. If so return false.
      return result;
    }

  // Check if number is odd.
  if (!(Number(cardNumber.slice(-1)) % 2 === 0)) {
    return result;
  }

  // Check if total value is more than 16.
  let totalCount = 0;
  for (let number of numberList) {
    totalCount += Number(number);
  }
  if (totalCount < 16) {
    return result; // If less than 16 
  }

  result = true; // All tests have been passed.
  return result; // return result
}

let nr = 1234567891234566;
console.log(`Creditcard "${nr}" passed the security check: ${verifyCreditCardNumber(nr)}`);
nr = 1234567891234568;
console.log(`Creditcard "${nr}" passed the security check: ${verifyCreditCardNumber(nr)}`);
nr = 1234567891234567;
console.log(`Creditcard "${nr}" passed the security check: ${verifyCreditCardNumber(nr)}`);