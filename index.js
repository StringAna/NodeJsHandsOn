// const Person = require('./person');
// // console.log(person);

// const person1 = new Person('Jason Doe', 40);

// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();
logger.on('mess', (data) => console.log('called listener', data));
logger.log('hello world');
