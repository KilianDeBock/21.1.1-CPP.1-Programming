let output = '', size = 11, char = '*  ';

for (size; size > 0; size--) {
  for (let line = size; line > 0; line--) {
    output += char;
  }
  if (size > 1) {
    output += '\n';
  }
}

console.log(output);