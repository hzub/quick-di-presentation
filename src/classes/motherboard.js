const Processor = require('./processor');
const Memory = require('./memory');

class Motherboard {
  constructor() {
    this.processor = new Processor();
    this.memory = new Memory();
  }

  start() {
    this.processor.warmUp();
    this.memory.putThings(123);
  }
}

module.exports = Motherboard;