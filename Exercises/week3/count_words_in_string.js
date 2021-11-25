function calculateAmountOfWords(message) {
  message.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, '');
  return message.match(/(\w+)/g).length;
}

let message = calculateAmountOfWords('Wat vinden jullie ervan dat ik eens een tekstje schrijf?');
console.log(message);
message = calculateAmountOfWords('How about no?');
console.log(message);
message = calculateAmountOfWords('Phillippe is zijn klas aan het verkopen... Typisch xD!');
console.log(message);
