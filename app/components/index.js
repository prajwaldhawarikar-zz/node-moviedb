const Person = require('./person/');

class Components {
    /**
    *Creates an instance of Components.
    * @param {Object} app Express app
    * @memberof Components
    */
    constructor(app) {
        this.app = app;
        this.initModules();
    }
    /**
     * Initilize all components and set routes
     * @memberof Components
     */
    initModules() {
        /* eslint-disable no-unused-vars */
        const userObj = new Person(this.app);
        /* eslint-enable no-unused-vars */
    }
}

module.exports = Components;
