const Motherboard = require('../../src/classes/motherboard');

const assert = require('chai').assert;

let testMotherboard;
beforeEach(() => {
  testMotherboard = new Motherboard();
});

describe('motherboard test', () => {
  it ('should check if motherboard works running after start()', () => {
    testMotherboard.start();

    const going = testMotherboard.isWorking();
    assert.isTrue(going);
  });
});