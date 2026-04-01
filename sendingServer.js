///
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    
    //Sending the HTML;
    // if(req.url === "/"){
    //     fs.readFile('index.html', (err, data)=>{
    //        if(err){
    //         res.writeHead(5000, {'Content-Type': 'text/plain'})
    //         res.end("Error loading html file")
    //        }else{
    //         res.writeHead(5000, { 'Content-Type': 'text/hatm'})
    //         res.end(data);
    //        }
    //     });
    // } 

    // With JSON;
    // if(req.url === "/api") {
    //     let user = {
    //         name: "Hasib",
    //         age: 25,
    //         profession: "Developer",
    //     };

    //  res.writeHead(200, {'Content-Type': "application/json"});
    //  res.end(JSON.stringify(user));   
    // }

    //With Image;
    if(req.url==="/image"){
        let filePath = path.join(__dirname, 'image.png' )
        fs.readFile(filePath, (err,data)=>{
            if(err){
                res.writeHead(404)
                res.end("Image not found")
            }else{
                res.writeHead(2000, {'Content-Type': 'image/png'})
                res.end(data);
            }
        })
    }


});

server.listen(5000, ()=>{
    console.log("Server running");
});