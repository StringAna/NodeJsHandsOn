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
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        //add a content type
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(content);
      }
    );
  }
  //if req url is /about, load about page
  //   if (req.url == '/about') {
  //     fs.readFile(
  //       path.join(__dirname, 'public', 'about.html'),
  //       (err, content) => {
  //         if (err) throw err;
  //         //add a content type
  //         res.writeHead(200, { 'Content-type': 'text/html' });
  //         res.end(content);
  //       }
  //     );
  //   }

  //like a rest api, we want to serve json instead of html
  if (req.url == '/api/users') {
    //normally we would fetch data from dbase, here we just hardcode it
    const users = [
      { name: 'Bob Smith', age: 40 },
      { name: 'jason herald', age: 98 },
    ];
    //setting content type as json
    res.writeHead(200, { 'Content-type': 'application/json' });

    //to turn the users array of objects to json type
    res.end(JSON.stringify(users));
  }
});

//while deployment, host decides which port to run based on env variable
const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`server running on ${PORT}`));
