// Defined a function that simulates a conversation between two people.
function conversationBetweenTwoPerson() {
  const conversation = `
  Pieter: Hoe gaat het vandaag?
  Amy: Ok. Ik ben geen ochtendmens.
  `;

  console.log(conversation);
}

conversationBetweenTwoPerson();

// Define a function that returns a string with an extra amount of digits
function toDigits(value, nDigits, char = '0') {
  let v = String(value);
  while (v.length < nDigits) {
    v = char + v;
  }

  return v;
}

let d = toDigits('5', 2);
console.log(`The new value is ${d}.`);
d = toDigits('3', 6, 'O');
console.log(`The new value is ${d}.`);


let isPlaying = true;
let nMoves = 0;

while (isPlaying) {
  if (nMoves + 1 > 999) {
    isPlaying = false;
  } else {
    nMoves++;
  }
  // console.log(nMoves);
}

console.log(`The amount of moves is ${nMoves}.`);

// Digital clock
function toTime() {
  const dateAndTime = new Date(); // Make an instance of Date class.
  const nHours = dateAndTime.getHours();
  const nMinutes = dateAndTime.getMinutes();
  const nSeconds = dateAndTime.getSeconds();
  const nMilliseconds = dateAndTime.getMilliseconds();
  let date = `${toDigits(nHours, 2)}:${toDigits(nMinutes, 2)}:${toDigits(nSeconds, 2)}:${toDigits(nMilliseconds, 3)}`;
  return date;
}

console.log(`the time is ${toTime()}`);