///
//Path;

const path = require('path');

const filePath = "/user/local/builtInModules.js";

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));


//OS Module;

const os = require('os')

console.log("Operating system is -",os.platform());
console.log("Operating system is -",os.arch());
console.log("Operating system is -",os.totalmem());
console.log("Operating system is -",os.freemem());

//URL
const url = require('url')

const add = "https://github.com/AbirHasanRawvy";

const urlParse = url.parse(add, true);
console.log(urlParse.host);
console.log(urlParse.hostname);
console.log(urlParse.search);
console.log(urlParse.query);