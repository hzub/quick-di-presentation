const _ = require('lodash');

class DiFramework {
  constructor() {
    // initialize objects list (repository)
    this._objects = {};

    // initialize DI queue
    this._queue = [];

    // initialize DI queue
    this._callbackQueue = [];

    // create singleton
    DiFramework.$instance = this;
  }

  _dependenciesAreMet(classDefinition) {
    const injectNames = classDefinition.$inject || [];
    return _.reduce(injectNames, (isReady, actual) => {
      return isReady && !!this._objects[actual];
    }, true);
  }

  getObject(name) {
    // gets actual object from repository
    return this._objects[name] || null;
  }

  _set(name, val) {
    // sets object in the map
    console.info(`[DI] SUCCESSFULY SET ${name}!`);
    this._objects[name] = val;

    _.forEach(this._queue, queuedClass => {
      if (_.indexOf(queuedClass.injectNames, name) > -1) {
        console.info(`[DI] OKAY, NEW REQUIRED CLASS FOR ${queuedClass.name} IS HERE - LETS TRY!`);
        if (this.use(queuedClass.classDefinition)) {
          console.info(`[DI] ${queuedClass.name} FINALLY RESOLVED! :D`);
          _.pull(this._queue, queuedClass);

          return false;
        }
      }
    });
  }

  _addToQueue(name, classDefinition, injectNames) {
    if (_.find(this._queue, { name })) {
      return;
    }
    this._queue.push({
      name,
      classDefinition,
      injectNames,
    });
  }

  use(classDefinition) {
    // get class name...
    const name = classDefinition.name;

    console.info(`[DI] TRYING TO CREATE ${name}...`);

    // get injects (or empty set if none)
    const injectNames = classDefinition.$inject || [];

    if (this._dependenciesAreMet(classDefinition)) {
      // get inject values
      const injects = injectNames.map(name => this.getObject(name));

      // create instance...
      const objectInstance = new classDefinition(...injects);

      // ...and put it into repository
      this._set(name, objectInstance);

      // okay, dependency was resolved
      return true;
    } else {
      this._addToQueue(name, classDefinition, injectNames);

      console.info(`[DI] ${name} DOESN'T HAVE ITS REQUIRED OBJECTS YET :(`);
      // well, dependency isn't resolved yet :(
      return false;
    }
  }

  // singleton method - use
  static use(...args) {
    return DiFramework.$instance.use.call(DiFramework.$instance, ...args);
  }

  // singleton method - get object
  static getObject(name) {
    return DiFramework.$instance.getObject.call(DiFramework.$instance, name);
  }
};

DiFramework.$instance = new DiFramework();

module.exports = DiFramework;
