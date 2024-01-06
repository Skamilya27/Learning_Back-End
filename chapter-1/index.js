const lib = require('./lib.js');
// import {sum, diff} from './lib.js'; --> for ES version currently for now we will working on the cummon js module only
const fs = require('fs');

// const txt = fs.readFileSync('demo.txt', 'utf-8');
// fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// })

console.log(lib.sum(2,2), lib.diff(4,2));
console.log("hello")