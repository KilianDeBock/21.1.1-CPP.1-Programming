function generateListOfNumbers(listLength) {
  const list = [];
  for (let i = 0; i < listLength; i++)
    list.push(Math.round(Math.random() * 99));
  return list;
}

console.log(generateListOfNumbers(3));
console.log(generateListOfNumbers(10));
console.log(generateListOfNumbers(30));
console.log(generateListOfNumbers(50));