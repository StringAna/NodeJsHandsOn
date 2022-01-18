const EventEmitter = require('events');
const uuid = require('uuid');

//generates random ids
console.log(uuid.v4());

class Logger extends EventEmitter {
  //everytime we call log, it should show a new id with the msg that is sent
  log(msg) {
    //call event
    this.emit('mess', { id: uuid.v4(), msg });
  }
}
// module.exports = Logger;

// const Logger = require('./logger');
const logger = new Logger();
logger.on('mess', (data) => console.log('called listener', data));
logger.log('hello world');
