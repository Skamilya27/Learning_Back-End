// // const lib = require('./lib.js')
// // import {sum, diff} from "./lib.js";
// const fs = require('fs');

// // const txt = fs.readFileSync('demo.txt', 'utf-8');
// fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// });
// // console.log(txt);

// // console.log(lib.sum(4,5), lib.diff(3,6));
// // console.log(sum(4,5), diff(3,6));

// // const a = 5;


const express = require('express');

console.log('Hello World');

const server = express();
server.listen(8080);