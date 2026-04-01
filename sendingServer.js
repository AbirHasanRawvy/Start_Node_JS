///
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile('index.html', (err, data)=>{
           if(err){
            res.writeHead(5000, {'Content-Type': 'text/plain'})
            res.end("Error loading html file")
           }else{
            res.writeHead(5000, { 'Content-Type': 'text/hatm'})
            res.end(data);
           }
        });
    }
});

server.listen(5000, ()=>{
    console.log("Server running");
});