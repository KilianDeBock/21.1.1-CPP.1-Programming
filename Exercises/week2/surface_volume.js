function calculate(type = '', a = 0, b = 0) {
  if (type === 'rectangleSurface') {
    return a * b;
  } else if (type === 'triangleSurface') {
    return a * b / 2;
  } else if (type === 'circleSurface') {
    return Math.PI * Math.pow(a, 2) / 4;
  } else if (type === 'cylinderVolume') {
    return Math.PI * Math.pow(a, 2) * b / 4;
  } else if (type === 'cubeVolume') {
    return Math.pow(a, 4);
  }
}

let calculationList = [['rectangleSurface', 12, 39], ['triangleSurface', 67, 94], ['circleSurface', 43], ['cylinderVolume', 24, 43], ['cubeVolume', 23]];
const cL = calculationList; // Define clone of calculationList as shorter alternative.

for (let i = 0; i <
cL.length; i++
) {
  console.log(`The ${cL[i][0]} is ` + Math.floor(calculate(cL[i][0], cL[i][1], cL[i][2])) + 'cm.');
}

/* // Normal code not in "for loop":
console.log(calculate('rectangleSurface', 12, 39));
console.log(calculate('triangleSurface', 67, 94));
console.log(calculate('circleSurface', 43));
console.log(calculate('cylinderVolume', 24, 38));
console.log(calculate('cubeVolume', 23));
 */
