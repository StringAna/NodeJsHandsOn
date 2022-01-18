// const Person = require('./person');
// // console.log(person);

// const person1 = new Person('Jason Doe', 40);

// person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //   //load a file on the server
  //   //   console.log(req.url);
  //   if (req.url == '/') {
  //     fs.readFile(
  //       path.join(__dirname, 'public', 'index.html'),
  //       (err, content) => {
  //         if (err) throw err;
  //         //add a content type
  //         res.writeHead(200, { 'Content-type': 'text/html' });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   //if req url is /about, load about page
  //   //   if (req.url == '/about') {
  //   //     fs.readFile(
  //   //       path.join(__dirname, 'public', 'about.html'),
  //   //       (err, content) => {
  //   //         if (err) throw err;
  //   //         //add a content type
  //   //         res.writeHead(200, { 'Content-type': 'text/html' });
  //   //         res.end(content);
  //   //       }
  //   //     );
  //   //   }
  //   //like a rest api, we want to serve json instead of html
  //   if (req.url == '/api/users') {
  //     //normally we would fetch data from dbase, here we just hardcode it
  //     const users = [
  //       { name: 'Bob Smith', age: 40 },
  //       { name: 'jason herald', age: 98 },
  //     ];
  //     //setting content type as json
  //     res.writeHead(200, { 'Content-type': 'application/json' });
  //     //to turn the users array of objects to json type
  //     res.end(JSON.stringify(users));
  //   }

  //build file path dynamic
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //extension of file
  let extname = path.extname(filePath);

  //initial content type
  let contentType = 'text/html';

  //check extension and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }
  //load or read a file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      //if page not found, load an error page
      if (err.code == 'ENOENT') {
        //page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(`Server error : ${err.code}`);
      }
    } else {
      //success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

//while deployment, host decides which port to run based on env variable
const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`server running on ${PORT}`));
