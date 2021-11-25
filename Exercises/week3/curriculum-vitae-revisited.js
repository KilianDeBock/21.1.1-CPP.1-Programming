const kilian = {};
kilian.firstName = 'Kilian';
kilian.lastName = 'De Bock';
kilian.gender = 'Male';
kilian.age = 20;
kilian.married = false;
kilian.avatar = '💩';
kilian.motto = 'I\'ts Lyttle, Stualyttle!';
kilian.languages = ['Dutch: *****-*****', 'English: *****-*'];

for (let item in kilian) {
  console.log(`Kilian's ${item} is: ${kilian[item]}.`);
}