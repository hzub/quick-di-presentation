/*
const Car = require('./classes/car');
const Engine = require('./classes/engine');
const Gearbox = require('./classes/gearbox');

const Fiat = new Car(new Engine(), new Gearbox());

Fiat.go();
*/

let appDone = false;

const DiFramework = require('./diFramework');

DiFramework.use(require('./classes/car'));
DiFramework.use(require('./classes/engine'));

setTimeout(() => {
  DiFramework.use(require('./classes/gearbox'));
}, 2500);

class AppBoostrap {
  constructor(Car) {
    Car.go();

    appDone = true;
  }
}
AppBoostrap.$inject = ['Car'];

DiFramework.use(AppBoostrap);

// waiter function
function waitForAppDone() {
  if (!appDone) {
    setTimeout(() => {
      waitForAppDone();
    }, 100);
  }
}