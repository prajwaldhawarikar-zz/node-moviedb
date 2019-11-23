const { serverConfig } = require('../../../config');
const personController = require('./person.controller');

class PersonRoute {
    /**
     * Creates an instance of PersonRoute.
     * @param {Object} app Express app
     * @memberof PersonRoute
    */
    constructor(app) {
        this.app = app;
        this.apiBasePath = serverConfig.getApiBasePath();
        this.initRoutes();
    }

    /**
     * Sets the person component routes
     * @memberof PersonRoute
     */
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
