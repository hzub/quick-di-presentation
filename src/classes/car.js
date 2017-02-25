class Car {
  constructor(engine, gearbox) {
    this.engine = engine;
    this.gearbox = gearbox;
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