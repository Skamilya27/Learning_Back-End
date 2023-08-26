const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/blog3.txt');

// readStream.on('data', (chunk) => {
//     console.log('------------NEW CHUnk---------');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });

//PIPING
readStream.pipe(writeStream);