const CommonMiddlewares = require('./common/');

class Middlewares {
    /**
     *Creates an instance of Middlewares.
    * @param {*} app Express app
    * @memberof Middlewares
    */
    constructor(app) {
        this.app = app;
        this.initModules();
    }

    /**
     * Set middlewares
     * @memberof Middlewares
     */
    initModules() {
        /* eslint-disable no-unused-vars */
        const commonMiddlewares = new CommonMiddlewares(this.app);
        /* eslint-enable no-unused-vars */
    }
}

module.exports = Middlewares;
