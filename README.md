# NodeJsHandsOn

Following tuitorials and blogs to get hands on in Node JS before moving to frameworks like Express.

# Link to the page ( deployed using Heroku)

- It is just a simple server set up, testing out request, response, and formatting the response page based on the request url.
- Find it here [Noob node js practice](https://hidden-meadow-25170.herokuapp.com)

## Scribbles and notes taken

#### 1. Node vs Express

- Node is runtime, express is a framework that is used with node
- What is Node Js
  - Js runtime
- Non blocking IO
  - Node is Async, php is sync
  - Non blocking on a single thread
- Node's event loop
  - Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
  - executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task
- Best projects for Node
  - All except CPU intensive - calcs,etc blocks the server
  - Rest api, microservices,CRUD apps
- Npm
  - Installs 3rd party packages,modules,tools
  - Gets stored in node_modules
  - The list of these packages is in package.json
  - Scripts to run tasks
  - § npm init - generates package.json file
  - § npm install - installs locally
  - § npm install -g - installs globally in system
- Node modules
  - Core mods - path,fs,http
  - 3rd party installed via npm
  - Create custom modules
  - Const myFile = require('./myFile');

#### 2. Hands on

- Modules
  - Uuid - generates random ids
- Dev dependencies
- Deps needed for development
- Nodemon - no need for restarting server
  - npm install --save-dev nodemon
  - npm install -D nodemon
- Module exports
- To include one file in another
- Module wrapper function
  - § (function (exports , require , module , **filename,**dirname){
    })
  - § Wrapped around a module while exporting it
- Why not use Import ?
  - import Person from './person'
  - Node has not implemented this es6 syntax of JS. We have to use Babble to be able to use this
- Core node modules
- https://nodejs.org/dist/latest-v16.x/docs/api/
- Path module - https://nodejs.org/dist/latest-v16.x/docs/api/path.html
  - Works with file directories
- Fs module - https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
  - Mkdir
  - Async, but most methods also have sync version
  - Async has a callback, sync does not
  - create files with open, but if you want to write to a file right away, use write
  - Os module
  - Gives info about os,duh
  - Url module
    - Events
    - Event emitters,listeners

### NOTE :

- While trying to deploy to heroku through bash terminal in my visual studio code, I kept getting 'heroku : command not found'.
- What fixed it was following :-
  - the steps from the official documentation related to node js setup :- [Getting Started on Heroku with Node Js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)
  - then going to the bash terminal in my vsc and doing **npm i -g heroku** . I tried to install it locally but it still didn't work, not until I installed it globally.
