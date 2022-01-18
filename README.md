# NodeJsHandsOn

Following tuitorials and blogs to get hands on in Node JS before moving to frameworks like Express.

# Scribbles and notes taken

1. Node vs Express
   - Node is runtime, express is a framework that is used with node
   - What is Node Js
     - Js runtime - js runs on your machine, not on the browser ???
   - Non blocking IO
     - Node is Async, php is sync
     - Non blocking on a single thread
   - Node's event loop
     - Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
     - executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task
   - Best projects for Node
     -All except CPU intensive - calcs,etc blocks the server
     -Rest api, microservices,CRUD apps
     -Npm
     -Installs 3rd party packages,modules,tools
     -Gets stored in node_modules
     -The list of these packages is in package.json
     -Scripts to run tasks
     § Npm init - generates package.json file
     § Npm install - installs locally
     § Npm install -g - installs globally in system
     -Node modules
     -Core mods - path,fs,http
     -3rd party installed via npm
     -Create custom modules
     -Const myFile = require('./myFile');
