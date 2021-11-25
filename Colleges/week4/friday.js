let quote = 'T³he quick brown fox jumps over the lazy dog';
let searchTerm = '    Fox    ';
searchTerm = searchTerm.trim().toLowerCase();
let position = quote.indexOf(searchTerm);
let message = '';
if (position !== 1) {
  message = `We have the fist occurence foe the search term ${searchTerm} at position ${position}`;
} else {
  message = `No results for the search term ${searchTerm}`;
}

console.log(message);

const tagCloud = [
  'Gebarentaal',
  'Stualyttle',
  'Eten',
  'Chuck Norris',
  'JavaScript'
];

const tagCloudAsString = tagCloud.join(' | ');
console.log(tagCloudAsString);

const baseline = 'Love Code Like Graph³ics Make Cool Shit.';
const baselineWords = baseline.split(' ');
message = baselineWords.map((word) => `${word}`).join('\n');

console.log(message);
console.log(baselineWords);