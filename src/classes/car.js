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
}

module.exports = Car;