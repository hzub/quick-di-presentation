const Car = require('./classes/car');
const Engine = require('./classes/engine');
const Gearbox = require('./classes/gearbox');

const Fiat = new Car(new Engine(), new Gearbox());

Fiat.go();