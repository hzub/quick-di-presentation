const Car = require('../../src/classes/car');

const assert = require('chai').assert;

let testCar;
beforeEach(() => {
  testCar = new Car();
});

describe('car test', () => {
  it ('should check if car is running after go()', () => {
    testCar.go();

    const going = testCar.isGoing();
    assert.isTrue(going);
  });
});