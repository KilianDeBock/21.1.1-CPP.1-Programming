function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

const numbers = [1, 9, 12, 14, 19, 21, 26, 34, 54, 33, 4, 5, 64, 8, 24, 3, 42, 6, 41, 53];
console.log(findLargestNumber(numbers));