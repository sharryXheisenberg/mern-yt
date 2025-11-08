const fs = require("fs");

setImmediate(()=>{console.log("Hello from immediate one")},0);

setTimeout(()=>{
    console.log("Hello from setTimeout!");
},0)

console.log("Hello world 1");

// 1) top level project(console)
// 2) setTimeout
// 3) SetImmediate
// 4) callbacks and rejected callbacks
let start = Date.now();
//CPU intensive tasks
process.env.UV_THREAD_POOL_SIZE = 5;
const crypto = require("crypto");
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() - start}ms Done`);
})  

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() - start}ms Done`);
})