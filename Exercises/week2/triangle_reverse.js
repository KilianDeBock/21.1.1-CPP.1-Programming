let output = '', size = 11, char = '*  ';

for (let col = 1; col <= size; col++) {
  for (let line = 1; line <= col; line++) {
    output += char;
  }
  if (col < size) {
    output += '\n';
  }
}

console.log(output);