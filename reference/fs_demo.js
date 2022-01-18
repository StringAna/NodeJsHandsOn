const fs = require('fs');
const path = require('path');

//create folder in the current directory called 'test'
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   else console.log('folder created');
// });

//create files with open, but if you want to write to a file right away, use write
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!!!',
  (err) => {
    if (err) throw err;
    console.log('file created and written to..');
    //file append
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      'yo quiero node.js',
      (err) => {
        if (err) throw err;
        console.log('file created and written to..');
      }
    );
  }
);
