const EventEmitter = require('events');

//create emitter class
class MyEmitter extends EventEmitter {}

//init object
const myEmitterObject = new MyEmitter();

//event listener
myEmitterObject.on('eventName', () => {
  console.log('event fired...');
});

//init event
myEmitterObject.emit('eventName');
