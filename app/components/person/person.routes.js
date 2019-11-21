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
            `${this.apiBasePath}/person/:personId/appearances`,
            (req, res, next) => {
                personController.getAppearances(req, res, next);
            },
        );

        this.app.get(
            `${this.apiBasePath}/person/:personId/movies`,
            (req, res, next) => {
                personController.getMovieAppearances(req, res, next);
            },
        );

        this.app.get(
            `${this.apiBasePath}/person/:personId/tv`,
            (req, res, next) => {
                personController.getTvAppearances(req, res, next);
            },
        );
    }
}

module.exports = PersonRoute;
