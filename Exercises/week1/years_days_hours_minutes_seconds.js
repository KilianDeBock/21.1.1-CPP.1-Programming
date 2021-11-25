/*
Programming 1: Essentials
Date: 2023-09-26
===========================
Calculate time.
 */

// My own getTime function. Used in my bots:
// long standard set to false because long is inaccurate.
function getTime(totalSeconds = 0, long = false) {
  /* Calculate time, starting from years:
  Each part calculates of the last part, so no after calculation is needed.
  It is based around floats works further on what the last calculation did.
  Example: year is 3.123456 it removes the 3 so we have 0.123456 and it calculates on that. */
  let year = totalSeconds / (365 * 24 * 60 * 60);
  let month = (year - Math.floor(year)) * (12); // Inaccurate and is not used in further calculations.
  let monthWeek = Math.floor((month - Math.floor(month)) * (365 / 7 / 12)); // Also inaccurate.
  let week = (year - Math.floor(year)) * (365 / 7);
  let day = (week - Math.floor(week)) * (7);
  let hour = (day - Math.floor(day)) * (24);
  let minute = (hour - Math.floor(hour)) * (60);
  let second = (minute - Math.floor(minute)) * (60);

  // Set values correctly and floor them..
  const years = Math.floor(year);
  const months = Math.floor(month);
  const monthWeeks = Math.floor(monthWeek);
  const weeks = Math.floor(week);
  const days = Math.floor(day);
  const hours = Math.floor(hour);
  const minutes = Math.floor(minute);
  const seconds = Math.floor(second);

  // Message Types:
  if (long) {
    // if long, return long type (inaccurate):
    return `${years} years, ${months} months, ${monthWeeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  // If short return short type.
  return `${years} years, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

totalSeconds = 123456789; // Set seconds to convert.
// Simple log test + info:
console.log(`${"=".repeat(95)}\nAmount of seconds to convert = ${totalSeconds}\n${"=".repeat(95)}`);
console.log(`Short time: ${getTime(totalSeconds)} (Accurate)`);
console.log(`Long time: ${getTime(totalSeconds, true)} (Not accurate)\n${"=".repeat(95)}`);