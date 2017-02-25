const _ = require('lodash');

class DiFramework {
  constructor() {
    // initialize objects list (repository)
    this._objects = {};

    // create singleton
    DiFramework.$instance = this;
  }

  getObject(name) {
    // gets actual object from repository
    return this._objects[name] || null;
  }

  _set(name, val) {
    // sets object in the map
    this._objects[name] = val;
    console.info(`[DI] ADDED ${name} CLASS TO REPOSITORY!`);
  }

  use(classDefinition) {
    // get class name...
    const name = classDefinition.name;

    // get injects (or empty set if none)
    const injectNames = classDefinition.$inject || [];

    if (injectNames.length) {
      console.info(`[DI] CLASS ${name} NEEDS ${injectNames.join(', ')}!`);
    }

    // get inject values
    const injects = injectNames.map(name => this.getObject(name));

    // create instance...
    const objectInstance = new classDefinition(...injects);


    // ...and put it into repository
    this._set(name, objectInstance);
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
