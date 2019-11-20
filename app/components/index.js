const Person = require('./person/');

class Components {
    constructor(app) {
        this.app = app;
        this.initModules();
    }

    initModules() {
        /* eslint-disable no-unused-vars */
        const userObj = new Person(this.app);
        /* eslint-enable no-unused-vars */
    }
}

module.exports = Components;
