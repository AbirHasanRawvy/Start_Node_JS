///HTTP Module 
//First: Import HTTP Modulel;
const http = require('http');

//Second: create server;
const server = http.createServer((req, res)=>{
    //content set
    //Third:
    res.writeHead(200,{"content-type": "text/html"});

    // Fourth
    res.write('<h2>Hello this is our node js server!</h2>');

    //Fifth: server end;
    res.end();

});

//6 step: server listen by port;
server.listen(5000, () => {
    console.log("Server is running");
});
