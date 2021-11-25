/*
Programming 1: Essentials
Date: 2023-09-23
===========================
Talk like a pirate
 */

// Set string values.
const pirate1Greeting = 'Ahoy!';
const pirate1Speak = 'Come arboard mate!';
const pirate2Greeting = 'Arggh!';
const pirate2Speak = 'On it, u have some bread?';

// Construct talking message and log it.
let talkLikeAPirate = `"Pirate 1: ${pirate1Greeting} ${pirate1Speak}"`;
console.log(talkLikeAPirate); // log message

// Construct second pirate by overriding the last variable.
talkLikeAPirate = `"Pirate 2: ${pirate2Greeting} ${pirate2Speak}"`;
console.log(talkLikeAPirate); // log message