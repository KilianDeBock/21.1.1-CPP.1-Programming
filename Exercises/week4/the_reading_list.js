const readingList = [
  {
    title: 'Coding with mark?',
    author: 'Mark Zuckerberg',
    alreadyRead: false
  },
  {
    title: 'How to get money QUICK?',
    author: 'Miners cooperated',
    alreadyRead: true
  },
  {
    title: 'What you didn\'t know about Philippe De Pauw - Waterschoot',
    author: 'Mathieu Spillebeen',
    alreadyRead: false
  }
];

let output = '';
readingList.forEach((item) => {
  output += item.alreadyRead ? `\nYou already read "${item.title}" by ${item.author}` : `\nYou still need to read "${item.title}" by ${item.author}`;
});

console.log(`
${'='.repeat(100)}\n
|${' '.repeat(43)}READING LIST${' '.repeat(43)}|\n
${'='.repeat(100)}
${output}
${'='.repeat(100)}
`);