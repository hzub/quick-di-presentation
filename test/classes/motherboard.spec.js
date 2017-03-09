const Motherboard = require('../../src/classes/motherboard');

const assert = require('chai').assert;

class MockProcessor {
  warmUp() {}
  isRunning() {
    return true;
  }
}

class MockMemory {
  putThings() {}
  haveThings() {
    return true;
  }
}

let testMotherboard;
let testProcessor;
let testMemory;

beforeEach(() => {
  testProcessor = new MockProcessor();
  testMemory = new MockMemory();
  testMotherboard = new Motherboard(testProcessor, testMemory);
});

describe('motherboard test', () => {
  it ('should check if motherboard works running after start()', () => {
    testMotherboard.start();

    const going = testMotherboard.isWorking();

    assert.isTrue(going);
  });
});