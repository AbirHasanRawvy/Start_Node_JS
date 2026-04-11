///node is javascript run time invironment;
console.log("Hello World!");

///Why node JS: 
//create web server,  API(Aplication Programable Interface), File, CLI(Command line interface),
//connect with database, asynchronous, non-blocking IO, event loop linten;

//here practice on global object;
//folder name;
console.log(__dirname);

//filename;
console.log(__filename);

//important information;
console.log(process.platform);

//error;
console.error("New Error");

//
console.warn("New Error");

//
const path = require("path");

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//
const fs = require("fs");
// const { isUtf8 } = require("buffer");

fs.readFile("note.txt", "utf8", (err, data) => {

    if (err) console.log(err);
    console.log(data);
});

fs.writeFile("npte.txt", "I am also a javaScript developer.", (err) => {
    if (err) console.log(err);
    console.log("File is written");
});