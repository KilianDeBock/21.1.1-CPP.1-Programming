let output = '', nRows = 8, nCols = 5, ch = '* ';
for (let row = 0; row < nRows; row++) {
  for (let col = 0; col < nCols; col++) {
    output += ch;
  }
  output += '\n';
}
console.log(output);