function generateDigitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours <= 9 ? '0' + hours : hours;
  minutes = minutes <= 9 ? '0' + minutes : minutes;
  seconds = seconds <= 9 ? '0' + seconds : seconds;

  return `The current time is ${hours}:${minutes}:${seconds}`;
}

let output = generateDigitalClock();
console.log(output);