class Engine {
  work() {
    this._working = true;
    // some very troubled logic that occurs here
    console.info('brruuum bruum');
  }

  isWorking() {
    return this._working;
  }
}

module.exports = Engine;