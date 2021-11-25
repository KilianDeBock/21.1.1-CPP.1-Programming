function question(number) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Guess a number between 1 and 20 ', function (answer) {
    if (answer == number) {
      console.log(`V - CORRECT ${number} was the number! You are a lucky one!!?`);
    } else if (answer > number) {
      console.log(`X - No luck, ${answer} is bigger than ${number}.`);
    } else {
      console.log(`X - No luck, ${answer} is smaller than ${number}.`);
    }
    rl.close();
    main();
  });
}

function main() {
  const number = Math.floor(Math.random() * (20 - 1) + 1);
  console.log(`${'='.repeat(25)}(${number})${'='.repeat(25)}`);
  question(number);
}

main();