const DiFramework = require('./diFramework');

console.info("[APP] Adding motherboard...");
DiFramework.use(require('./classes/motherboard'));

console.info("[APP] Adding memory...");
DiFramework.use(require('./classes/memory'));

console.info("[APP] Adding processor...");
DiFramework.use(require('./classes/processor'));

const myMotherboard = DiFramework.getObject('Motherboard');

myMotherboard.start();
