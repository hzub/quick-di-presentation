const Motherboard = require('./classes/motherboard');
const Processor = require('./classes/processor');
const Memory = require('./classes/memory');

const ourProcessor = new Processor();
const ourMemory = new Memory();

const ourMotherboard = new Motherboard(ourProcessor, ourMemory);

ourMotherboard.start();
