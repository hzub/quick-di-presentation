const Car = require('../../src/classes/car');

const assert = require('chai').assert;

class MockGearbox {
  changeGear() {}
  getGear() {
    return 1;
  }
}

class MockEngine {
  work() {}
  isWorking() {
    return true;
  }
}

let testCar;
let testEngine;
let testGearbox;

beforeEach(() => {
  testGearbox = new MockGearbox();
  testEngine = new MockEngine();
  testCar = new Car(testEngine, testGearbox);
});

describe('car test', () => {
  it ('should check if car is running after go()', () => {
    testCar.go();

    const going = testCar.isGoing();
    assert.isTrue(going);
  });
});