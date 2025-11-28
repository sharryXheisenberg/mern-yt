const os = require("os");

// get os platform 
console.log("OS PLATFORM",os.platform());
console.log("USER INFO",os.userInfo());

/// 2. get the CPU core info

console.log("CPU CORE INFO",os.cpus().length);

// 3. get the free memory
console.log("Free memory", os.freemem(),"megabytes");

// 4. get the total memory of 
console.log("total memory", os.totalmem(),"bytes");

// 5. get the home directory of the user 
console.log('Home directory' , os.homedir());

// 6. get the host name of the system
console.log('Host name' , os.hostname());

// 7. get the network interfaces of the system
console.log('Network interfaces', os.networkInterfaces());

// 8. get the os uptime 
console.log('OS uptime' , os.uptime());

// 9 . get the os version
console.log('OS version' , os.version());

// 10. get the os type 
console.log('OS type' , os.type());

