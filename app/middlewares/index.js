const CommonMiddlewares = require('./common/');

class Middlewares {
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
