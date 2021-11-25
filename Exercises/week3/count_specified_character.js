function removeTheVowels(input, char) {
  const i = String(input).toLowerCase();
  const c = String(char).toLowerCase();
  const total = i.split(c).length - 1;
  return `"${char}" ${total}`;
}

let e = 'Dit is een test die ik best grappig vind.';
console.log(`"${e}" counts ${removeTheVowels(e, 'e')} times.`);
e = 'Kilian';
console.log(`"${e}" counts ${removeTheVowels(e, 'i')} times.`);
e = 'Adriaan';
console.log(`"${e}" counts ${removeTheVowels(e, 'a')} times.`);
e = 'Programeren';
console.log(`"${e}" counts ${removeTheVowels(e, 'e')} times.`);
