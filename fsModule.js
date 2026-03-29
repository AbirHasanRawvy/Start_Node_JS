///

const fs = require("fs");

//create a new file
// fs.writeFileSync('hello.txt', 'Hello Node Js');

//file read;
// let result = fs.readFileSync('hello.txt', 'utf-8');

// console.log(result);

//write down something into the file;
// fs.appendFileSync('hello.txt', 'This is new text')

//file delete
// fs.unlinkSync('hello.txt')

//create folder
// fs.mkdirSync('newFolder')

//folder delete
// fs.rmdirSync('newFolder');

//Asyncronous Mode;
// fs.readFile("hello1.txt", "utf8", (err, data) => {
//     if (err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// fs.appendFile('hello.txt', "\n This is the new text", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("New File Added");
//     }
// });

// fs.unlink('hello.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File delete successfully");
//     }
// })

//create folder
fs.mkdir("NewFolder", (err) => {
    if(err){
         console.log(err);
     }else{
         console.log("New folder created");
     }
});

fs.rmdir("NewFolder", (err) =>{
    if(err){
         console.log(err);
     }else{
         console.log("Remove Folder");
     }
});