setInterval(ticking, 1000);

function tC(time) { // tc stands for timeCheck
  if (String(time).length < 2) {
    return '0' + time;
  }
  return time;
}


function generateDigitalClockUTCAsString(utc = 0, cityName) {
  const date = new Date();
  const nH = date.getHours(); // Number of hours
  const nM = date.getMinutes(); // minutes
  const nS = date.getSeconds(); // ...
  console.log(`The time in ${cityName} is ${tC(nH)}:${tC(nM)}:${tC(nS)}`);
}

function ticking() {
  generateDigitalClockUTCAsString(1, 'Ghent');
}