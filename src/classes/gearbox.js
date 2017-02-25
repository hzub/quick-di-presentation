class Gearbox {
  changeGear(gear) {
    this._gear = gear;
    console.info(`We\'re on ${gear} now`);
  }

  getGear() {
    return this._gear;
  }
}

module.exports = Gearbox;