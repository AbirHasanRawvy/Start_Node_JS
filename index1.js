// ///node is javascript run time invironment;
// console.log("Hello World!");

// ///Why node JS: 
// //create web server,  API(Aplication Programable Interface), File, CLI(Command line interface),
// //connect with database, asynchronous, non-blocking IO, event loop linten;

// //here practice on global object;
// //folder name;
// console.log(__dirname);

// //filename;
// console.log(__filename);

// //important information;
// console.log(process.platform);

// //error;
// console.error("New Error");

// //
// console.warn("New Error");

// //
// const path = require("path");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// //
// const fs = require("fs");
// // const { isUtf8 } = require("buffer");

// fs.readFile("note.txt", "utf8", (err, data) => {

//     if (err) console.log(err);
//     console.log(data);
// });

// fs.writeFile("npte.txt", "I am also a javaScript developer.", (err) => {
//     if (err) console.log(err);
//     console.log("File is written");
// });

///HTTP;
// const http = require("http");//This is a module from node js which is talk with broweser;

// const server = http.createServer((_, res) => {
//     res.writeHead(200, { "Content-Type" : "application/json"}); //this is a header and its detect the type;
//     res.end(JSON.stringify({ name: "Abrar", course: "MERN Stack" }));
// });

// server.listen(5000, () => console.log("Server running on 5000 port"));

// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//       res.writeHead(200, { "Content-Type" : "text/plain"});
//       res.end("Home Page");
//     }else if(req.url === "/about"){
//       res.writeHead(200, { "Content-Type" : "text/plain"});
//       res.end("About Page"); 
//     }else{
//       res.writeHead(404, { "Content-Type" : "text/plain"});
//       res.end("404 Page not found");
//     }
// });

// server.listen(3000, () => console.log("Server running on 3000 port"));



//With Query;
// const url = require("url");
// const http = require("http");
// const server = http.createServer((req, res) => {
//     const query = url.parse(req.url, true).query;
//     res.end(`Hello ${query.name}`);
// });
// server.listen(3000, () => console.log("Server running on 3000 port"));


//call back function;

// function great(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// great("Abir!", () => console.log("Welcome to SE."));



//Promise;

// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     setTimeout(() => {
//         if(success){
//             resolve("Task is done!");
//         }else {
//             reject("Something went wrong!");
//         }
//     }, 5000);
// });

// myPromise
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err))
//  .finally(() => console.log("Promise finished!"));


//use strict;
"use strict";
 x = 10;
console.log(x);
