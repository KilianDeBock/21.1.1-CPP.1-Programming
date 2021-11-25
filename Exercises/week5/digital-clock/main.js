// Get clock
this.digitalClockElement = document.querySelector('.digital-clock');

// Generate Digital Clock.
setInterval(() => {
  // make a new instance of Date object
  const currentDate = new Date();
  this.digitalClockElement.innerHTML = currentDate.toLocaleTimeString();
}, 1000);
