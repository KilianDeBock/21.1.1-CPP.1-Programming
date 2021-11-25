function searchLongestWord(sentence = 'Dit is een standaart zinnetje! Hallo wereld!') {
  const words = String(sentence).split(' ');
  let output = '';
  console.log(words);
  for (let word of words) {
    output = word.length > output.length ? word : output;
  }
  console.log(output);
}

searchLongestWord('Dit is een test om te zien hoe alles werkt.');