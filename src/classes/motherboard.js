class Motherboard {
  constructor(processor, memory) {
    this.processor = processor;
    this.memory = memory;
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