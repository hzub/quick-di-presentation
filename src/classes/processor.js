class Processor {
  constructor() {
    this._working = false;
  }

  warmUp() {
    this._working = true;
    console.info('Processor warming up...');
  }

  isRunning() {
    return this._working;
  }
}

module.exports = Processor;