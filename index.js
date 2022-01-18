// const Person = require('./person');
// // console.log(person);

// const person1 = new Person('Jason Doe', 40);

// person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //load a file on the server
  //   console.log(req.url);
  if (req.url == '/') {
    res.end('<h1>Homezzz</h1>');
  }
});

//while deployment, host decides which port to run based on env variable
const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`server running on ${PORT}`));
