const DiFramework = require('./diFramework');

DiFramework.use(require('./classes/processor'));
DiFramework.use(require('./classes/memory'));
DiFramework.use(require('./classes/motherboard'));

const myMotherboard = DiFramework.getObject('Motherboard');

myMotherboard.start();
