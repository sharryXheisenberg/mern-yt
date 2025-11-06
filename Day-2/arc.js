const fs = require("fs");

setImmediate(()=>{console.log("Hello from immediate one")},0);

setTimeout(()=>{
    console.log("Hello from setTimeout!");
},0)

console.log("Hello world 1");

// 1) top level project(console)
// 2) setTimeout
// 3) SetImmediate