const maths = require("./maths");
const os = require("os")


console.log("Hello bro!");

console.log("Addition of the two numbers: "+ maths.AddFunc(1,2) + " Subtraction is: " + maths.SubFunc(3,1));

console.log(os.cpus().length);// worker threads 


