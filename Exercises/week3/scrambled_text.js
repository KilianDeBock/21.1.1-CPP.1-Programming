function scrambleText(text) {
  text = text.split('');
  for (let i = text.length - 1; 0 < i; i--) {
    let r = Math.floor(Math.random() * i);
    let t = text[i]; // set temp to index
    text[i] = text[r]; // Make the index random
    text[r] = t; // Return values.
  }
  return text.join('');
}

let word = 'Kilian';
console.log(`The word "${word}" scramnled is "${scrambleText(word)}"`);
word = 'Webdevelopment';
console.log(`The word "${word}" scramnled is "${scrambleText(word)}"`);
word = 'Programeren';
console.log(`The word "${word}" scramnled is "${scrambleText(word)}"`);
