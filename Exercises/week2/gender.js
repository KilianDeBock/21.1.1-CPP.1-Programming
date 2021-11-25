let gender = 1; // 0: Not known, 1: Male, 2: Female, 9: Not specified
let message = 'You are ';
switch (gender) {
  case 0:
    message += 'not known';
    break;
  case 1:
    message += 'male';
    break;
  case 2:
    message += 'female';
    break;
  case 9:
    message += 'not specified';
    break;
  default:
    message = 'Error: No valid gender type provided';
}
console.log('Gender code = ' + gender);
console.log(message + '.');