let i, output = '', char = '*  ';
let nCols = 4, nRows = 7;
let state = false;

for (let rows = 0; rows < nRows; rows++) {
  // Set first, middle and last line as full lines.
  if (rows === 0 || rows === nRows - 1 || rows === Math.floor(nRows / 2)) {
    output += char.repeat(nCols);
  } else {
    // Set switch to its state, following the state variable and a quick if else.
    if (state ? rows > (nRows / 2) : rows < (nRows / 2)) {
      output += char.repeat(nCols);
    } else if (state ? rows < (nRows / 2) : rows > (nRows / 2)) {
      // Same but in reverse from last action. And prints an open state and not fully filled in.
      output += char + (' '.repeat(char.length)).repeat(nCols - 2) + char;
    }
  }
  output += '\n';
}

console.log(output);