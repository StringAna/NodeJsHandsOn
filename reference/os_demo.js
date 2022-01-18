const os = require('os');

//get platform
console.log(os.platform());

//cpu architecture
console.log(os.arch());

//cpu core info
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home dir
console.log(os.homedir());

//amount of time your sys has been up
console.log(os.uptime());
