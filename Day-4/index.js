const http = require("http");
const fs= require("fs");


const server = http.createServer((req,res)=>{
    // req:readableStream
    // res:writebleStream


    //ways to download the files in wrong way
    // downloading and writing the file in wrong way 


    // const file = fs.readFileSync("sample.txt");
    // const data = fs.writeFileSync()


    //downloading file right way (stream way)

    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res)


    const file = fs.readFileSync("sample.txt");
    fs.writeFileSync("output.txt",file);
    res.end();

    // res.end();

    // copying file from one file to another in streams way

const readStream = fs.createReadStream("sample.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("data",(chunk)=>{
    console.log("CHUNK:",chunk);
    writeStream.write(chunk);
})

});


server.listen(8000,()=>{
    console.log("Server is concentrated at ", 8000);
});




