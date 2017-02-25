const Engine = require('./engine');
const Gearbox = require('./gearbox');

class Car {
  constructor() {
    this.engine = new Engine();
    this.gearbox = new Gearbox();
  }

  go() {
    this.gearbox.changeGear(1);
    this.engine.work();
    console.info('Pojechali!');
  }

  isGoing() {
    const isOnGear = this.gearbox.getGear() > 0;
    const isEngineRunning = this.engine.isWorking();

    return (isOnGear && isEngineRunning);
  }
}

module.exports = Car;