const http = require("http");
const fs= require("fs");
const path = require("path");


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


    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt",file);
    // res.end();

    // res.end();

    // copying file from one file to another in streams way

// const readStream = fs.createReadStream("sample.txt");
// const writeStream = fs.createWriteStream("output.txt");

// readStream.on("data",(chunk)=>{
//     console.log("CHUNK:",chunk);
//     writeStream.write(chunk);
// })



// ?................3 ----------Stream processing (transforming)
// convert all words to uppercase
// replace epsum words to saurabh
const readStreamNew = fs.createReadStream(path.join(__dirname,"sample.txt"));
const writeStreamNew = fs.createWriteStream(path.join(__dirname,"output.txt"));


// bad approach 


readStreamNew.on("data",(chunk)=>{
    const modifiedWords = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Saurabh");
    writeStreamNew.write(modifiedWords);
});

readStreamNew.on("end",()=>{
    writeStreamNew.end();
    res.end("file processed!");
});
readStreamNew.on("error", (err) => {
        console.error("Read error:", err);
        res.end("Error reading file!");
    });



});


server.listen(8000,()=>{
    console.log("Server is concentrated at ", 8000);
});




