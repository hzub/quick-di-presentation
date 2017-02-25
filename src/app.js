/*
const Car = require('./classes/car');
const Engine = require('./classes/engine');
const Gearbox = require('./classes/gearbox');

const Fiat = new Car(new Engine(), new Gearbox());

Fiat.go();
*/

const DiFramework = require('./diFramework');

DiFramework.use(require('./classes/car'));
DiFramework.use(require('./classes/engine'));
DiFramework.use(require('./classes/gearbox'));

const myAppCar = DiFramework.getObject('Car');

myAppCar.go();
