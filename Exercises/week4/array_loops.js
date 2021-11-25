array = ['Eden Hazard', 'Kevin De Bruyne', 'Romelu Lukaku', 'Thibault Courtois', 'Dries Mertens'];
console.log(array);
let tempStr = '';
for (let [index, item] of array.entries()) {
  tempStr += `\nPlayer ${index + 1}: ${item}`;
}
console.log(tempStr);