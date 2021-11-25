const os = require('os');

let memoryUsed = Math.floor((os.freemem() / os.totalmem() * 100) * 100) / 100;

let message = `Homefolder: ${os.homedir()}\n\
Temp folder: ${os.tmpdir()}\n\
Hostname: ${os.hostname()}\n\
Platform: ${os.platform()}\n\
Release: ${os.release()}\n\
Architecture: ${os.arch()}\n\
Total Memory: ${Math.floor(os.totalmem() / 1e+9)}GB\n\
Free Memory: ${os.freemem() / 1e+6}MB\n\
Percent used: ${memoryUsed}%\n\
Uptime: ${os.uptime()}s`;

console.log(message);