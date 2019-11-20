const { serverConfig } = require('../../../config');
const personController = require('./person.controller');

class PersonRoute {
    constructor(app) {
        this.app = app;
        this.apiBasePath = serverConfig.getApiBasePath();
        this.initRoutes();
    }

    initRoutes() {
        this.app.get(
            `${this.apiBasePath}/person`,
            (req, res, next) => {
                personController.getPerson(req, res, next);
            },
        );
    }
}

module.exports = PersonRoute;
