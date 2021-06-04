const fs = require('fs');
const writeStream = fs.createWriteStream('fileName.txt');
const pathName = writeStream.path;
 
let array = ['1','2','3','4','5','6','7'];
  

array.forEach(value => writeStream.write(`${value}\n`));


writeStream.on('finish', () => {
   console.log(`wrote all the array data to file ${pathName}`);
});

writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});

writeStream.end();