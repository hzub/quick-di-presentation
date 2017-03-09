class Memory {
  constructor() {
    this._things = null;
  }

  putThings(things) {
    this._things = things;
    console.info(`Something (${things}) have been put into memory!`);
  }

  haveThings() {
    return typeof this._things !== 'undefined';
  }
}

module.exports = Memory;