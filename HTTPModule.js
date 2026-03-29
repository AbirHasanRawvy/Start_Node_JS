///HTTP Module 
//First: Import HTTP Modulel;
const http = require('http');

//Second: create server;
const server = http.createServer((req, res)=>{
    //content set
    //Third:
    res.writeHead(200,{"content-type": "text/plain"})

    // Fourth
    res.write("Hello this is our node js server");

    //Fifth: server end;
    res.end();

})