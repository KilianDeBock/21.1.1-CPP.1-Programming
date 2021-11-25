const targetsAudience = [`7 - 11`, `11 - 15`, `15 - 18`, `18 - 23`, `23 - 28`, `28 - 36`, `36 - 50`, `50 - 64`, `64 - 80`];
const subjects = [`pruiken`, `nagels`, `aquariums`, `mondmaskers`, `sneakers`, `gepersonaliseerd wc-papier`];

function generateMatch() {
  const targetAudience = targetsAudience[Math.round(Math.random() * (targetsAudience.length - 1))];
  const subject = subjects[Math.round(Math.random() * (subjects.length - 1))];
  return `Maak een webshop voor ${targetAudience} jarigen waar ze ${subject} verkopen.`;
}

console.log(generateMatch());
console.log(generateMatch());
console.log(generateMatch());