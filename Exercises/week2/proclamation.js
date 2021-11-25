const rapportTotal = 90;
let message, nT;
if (rapportTotal < 50) {
  // below 50 (not counting 50)
  message = 'You did not pass the course! ❌';
  nT = 0;
} else if (rapportTotal < 68) {
  // between 50 - 67
  message = 'You have passed in sufficient fashion.';
  nT = 1;
} else if (rapportTotal < 77) {
  // between 68 - 76
  message = 'You passed with distinction';
  nT = 2;
} else if (rapportTotal < 85) {
  // between 77 - 84
  message = 'You passed with great distinction.';
  nT = 3;
} else if (rapportTotal < 90) {
  // between 85 - 90
  message = 'You passed with greatest distinction.';
  nT = 4;
} else {
  // above 90
  message = 'You have passed with greatest distinction and the congratulations of the examination committee.';
  nT = 5;
}

message += ' ';

for (let tN = 0; tN < nT; tN++) {
  message += '🏆';
}

console.log(message);