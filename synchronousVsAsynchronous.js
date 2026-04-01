///Synchronous vs Asynchronous Programing;

//Synchronous
const fs = require('fs');
// const data = require('fs');

const data = fs.readFileSync('text.txt', 'utf-8');

console.log(data);
console.log("File has been read successfully");

//Asynchronous
const data1 = fs.readFile("text1.txt", "utf-8", (err, data)=> {
    if(err){
        console.log("Error", err);
        return;
    }else {
        console.log(data1);
    }
});

console.log("File is being read...");