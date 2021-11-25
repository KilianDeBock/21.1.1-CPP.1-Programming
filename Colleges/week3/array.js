const cats = ['Frodo', 'Corneel', 'Kroket', 'Pitta'];
console.log(`The length of the cats array is: ${cats.length}`);

for (let i = 0; i < cats.length; i++) {
  console.log(`The cat at ${i} is ${cats[i]}`);
}
for (let [i, element] of cats.entries()) {
  console.log(`The cat at ${i} is ${element}`);
}

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

console.log(`Get WED: ${daysOfWeek[3]}`);

function getReadableDayOfWeek() {
  return daysOfWeek[new Date().getDay()];
}

console.log(`Get the number of the day: ${getReadableDayOfWeek()}`);

let counter = 0;
do {
  counter++;
  console.log(counter);
} while (counter < 99);