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

  isWorking() {
    const cpuRunning = this.processor.isRunning();
    const memoryContainsSomething = this.memory.haveThings();

    return (cpuRunning && memoryContainsSomething);
  }
}

module.exports = Motherboard;