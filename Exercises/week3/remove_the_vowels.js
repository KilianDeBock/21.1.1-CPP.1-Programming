// function removeTheVowels(input) {
//   const vowels = 'aeiou'.split('');
//   for (let k of vowels) {
//     const total = input.split(k).length - 1;
//     for (let i = 0; i < total; i++) {
//       input = input.replace(k, '');
//     }
//   }
//   return input;
// }

function removeTheVowels(input) {
  return input.replace(/[aeiou]/ig, '');
}

let e = 'Dit is een test die ik best grappig vind.';
console.log(`"${e}" without vowels is: "${removeTheVowels(e)}"`);
e = 'Kilian';
console.log(`"${e}" without vowels is: "${removeTheVowels(e)}"`);
e = 'Adriaan';
console.log(`"${e}" without vowels is: "${removeTheVowels(e)}"`);
e = 'Programeren';
console.log(`"${e}" without vowels is: "${removeTheVowels(e)}"`);

// (() => {console.log('Programeren'.replace(/[aeiou]/ig, ''));})(); // To be insane xD