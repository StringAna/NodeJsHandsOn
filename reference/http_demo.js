const http = require('http');

//create server object
http
  .createServer((req, res) => {
    //write a response
    res.write('hello world in browser');
    res.end();
  })
  .listen(5000, () => console.log('server running'));
