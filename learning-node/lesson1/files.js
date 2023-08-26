const fs = require('fs');

//READING FILES
    // fs.readFile('./docs/blog1.txt', (err, data) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log(data.toString());
    // });

    // console.log('last line');


//WRITING FILES
// fs.writeFile('./docs/blog1.txt', 'Hello, World', () => {
//     console.log('files was written');
// })


//DIRECTORIES
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
    
        console.log('folder created');
    })
}
else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }

        console.log('folder deleted');
    })
}


//DELETE FILES
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }

        console.log('file deleted');
    })
}
