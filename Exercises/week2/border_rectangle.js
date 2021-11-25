let i, output = '', char = '*  ';
let nCols = 10, nRows = 4;

for (let rows = 0; rows <= nRows; rows++) {
  if (rows === 0 || rows === nRows) {
    output += char.repeat(nCols);
  } else {
    output += char + (' '.repeat(char.length)).repeat(nCols - 2) + char;
  }
  output += '\n';
}

// for (let rows = 0; rows <= nRows; rows++) {
//   if (rows === 0 || rows === nRows) {
//     for (i = 0; i <= nCols; i++) {
//       output += char;
//     }
//   } else {
//     for (i = 0; i <= nCols; i++) {
//       if (i === 0 || i === nCols) {
//         output += char;
//       } else {
//         output += ' '.repeat(char.length);
//       }
//     }
//   }
//   output += '\n';
// }

console.log(output);