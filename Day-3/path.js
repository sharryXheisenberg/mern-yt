const path = require("path"); // working with files and directories

console.log("FILENAME",__filename);
console.log("DIRNAME",__dirname);


//* folders/students/data.txt

//*1.Join()
const filepath =  path.join("folder","students","data.txt"); // this address the issue of the forward and backward slashes for different os
console.log(filepath); 

const parseDataPath = path.parse(filepath);
const resolvePath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname  = path.dirname(filepath);

console.log({
    parseDataPath,
    resolvePath,
    extname,
    basename,
    dirname
});
