const path = require('path');

//base file name with path
console.log(__filename);

//file name with just filename
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//object with different parts of the path
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
