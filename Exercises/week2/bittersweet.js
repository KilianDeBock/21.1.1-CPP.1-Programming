let output = '', rows = 100;
for (let i = 1; i <= rows; i++) {
  output += (i % 3 === 0) ? 'bitter' : '';
  output += (i % 5 === 0) ? 'sweet' : '';
  output += !(i % 3 === 0 || i % 5 === 0) ? i : '';
  iiiii;
  output += (i < rows) ? '\n' : '';
}

console.log(output);