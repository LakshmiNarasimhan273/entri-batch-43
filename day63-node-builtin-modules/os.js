// OS - Operating System
const os = require("os");

// User platform

// Software Informations
console.log("System platform", os.platform());
console.log("OS Type", os.type());
console.log("OS Release", os.release());
console.log("OS Version", os.version());
console.log("OS Architecture", os.arch());

// Hardware Informations
console.log("Total Memory", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Current Free Memory", (os.freemem() / (1024 ** 3)).toFixed(2));
console.log("Display uptime", (os.uptime() / 3600).toFixed(2));

// Network Informations
console.log("Network informations", os.networkInterfaces());