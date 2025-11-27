const {Readable , Writable} = require("stream");
const readableStream = new Readable({
    highWaterMark:6,   // threshold
        read(){},
    });

const writeableStream = new Writable({
    write(streamData){
        console.log("Writing ..", streamData);
    },
})

readableStream.on("data",(chunk)=>{
    console.log("CHUNK",chunk.toString());
    writeableStream.write(chunk);
});

const readbleStreamNew = new Readable({
    read(){},
})

const writeableStreamNew = new Writable({
    write(streamData){
        console.log("Writing .." , streamData);
    },
})

console.log(readableStream.push("Hello"));
console.log(readbleStreamNew.push("OP bro!"));