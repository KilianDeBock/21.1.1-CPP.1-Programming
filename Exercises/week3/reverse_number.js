function reverse(toBeReversed) {
  let reversed = '';
  for (let i = String(toBeReversed).length - 1; i >= 0; i--) {
    reversed += String(toBeReversed)[i];
  }
  let message = `Reversed: \"${toBeReversed}\"\nTo: \"${reversed}\"`;
  return message;
}

console.log(reverse(54321));
console.log(reverse(123456789));
console.log(reverse(true));
console.log(reverse('Hallo, ik ben Stualyttle!'));