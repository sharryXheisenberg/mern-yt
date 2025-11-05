const http = require("http");

const fs = require("fs");
const PORT = 8080;
 
// variable names with const always be in capital letters
const myServer = http.createServer((request , response)=>{

   const log = `${Date.now().toString()}: & From ${request.url}New request Received\n`;

   fs.appendFile("log.txt",log , (err)=>{
    if(err){
        console.error("Error while writing the file",err);
        response.statusCode = 500;
        response.end("Internal server error");
        return;
    }
    response.end("Hello World from Server!");
   })

});


myServer.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
});


