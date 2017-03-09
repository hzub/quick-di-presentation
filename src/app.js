// ----------------------------
// bootstrapper class
//
class AppBoostrap {
  constructor(Motherboard) {
    Motherboard.start();

    appDone = true;
  }
}
AppBoostrap.$inject = ['Motherboard'];
// ----------------------------

let appDone = false;

const DiFramework = require('./diFramework');

DiFramework.use(require('./classes/motherboard'));
DiFramework.use(require('./classes/memory'));
DiFramework.use(require('./classes/processor'));
DiFramework.use(AppBoostrap);


// waiter function
function waitForAppDone() {
  if (!appDone) {
    setTimeout(() => {
      waitForAppDone();
    }, 100);
  }
}

waitForAppDone();