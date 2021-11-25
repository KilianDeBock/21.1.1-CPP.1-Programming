const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

a.forEach((ai) => {
  console.log(`${'='.repeat(50)}\nRow: ${a.indexOf(ai)}\n${'-'.repeat(50)}`);
  ai.forEach((i) => {
    console.log(i);
  });
});

console.log('='.repeat(50));