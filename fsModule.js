///
const fs = require('fs');

//create a new file
fs.writeFileSync('hello.txt', 'Hello Node Js');

//file read;
let result = fs.readFileSync('hello.txt', 'utf-8');

console.log(result);

//write down something into the file;
fs.appendFileSync('hello.txt', 'This is new text')

//file delete
fs.unlinkSync('hello.txt')

//create folder
fs.mkdirSync('newFolder')

//folder delete
fs.rmdirSync('newFolder');

//Asyncronous Mode;