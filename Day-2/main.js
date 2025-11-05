// global objects are not need to be import because they are 
// available globally 

// console.log(Object.getOwnPropertyNames(global));

const fs = require("fs");


fs.writeFile("./write.txt","Hello world from tate!",(err)=>{
    if(err){
        console.log(err);
    }
})

setTimeout(()=>{
    console.log("Hello I am from global!");
},2000);

let cnt = 0;

const interval = setInterval(()=>{
    console.log(`Interval count: ${++cnt}`);

    if(cnt===4){
        clearInterval(interval);
    }
},1000);
