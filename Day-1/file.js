const fs = require("fs");


// write file

//  1) fs.writeFileSync("./text.txt","Hey bro how are you?");

// fs.writeFile("./text.txt","Hello bro ! are you good? ",(error,response)=>{
//     console.log(response);
// })

// read file

// const res = fs.readFileSync("./text.txt","utf-8");
// console.log(res);


fs.readFile("./text.txt","utf-8" , (error,response)=>{
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
})

// update

// fs.appendFileSync("./text.txt",new Date().toDateString());

fs.appendFile("./log.txt",`Hello bro this is saurabh and I logged in ${new Date().toDateString()}\n`,(error,response)=>{
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
})

//exercise

// 1)cpSync
// 2) unlinkSync
// 3) mkdirSync
// 4) statSync
// 5) mkdirSync 

