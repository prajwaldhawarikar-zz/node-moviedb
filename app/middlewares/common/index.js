const bodyParser = require('body-parser');

const { responseUtil } = require('../../utils');

class CommonMiddlewares {
    /**
     *Creates an instance of CommonMiddlewares.
    * @param {*} app Express app
    * @memberof CommonMiddlewares
    */
    constructor(app) {
        this.app = app;
        this.env = app.get('env');
        this.initialize();
    }

    /**
     * Set middlewares
     * @memberof CommonMiddlewares
     */
    initialize() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        if (this.env === 'dev' || this.env === 'development') {
            // eslint-disable-next-line global-require, import/no-extraneous-dependencies
            this.app.use(require('morgan')('tiny'));
        }

        // eslint-disable-next-line no-unused-vars
        this.app.use((err, req, res, next) => {
            responseUtil.send(responseUtil.getCode().codes.FAILURE, {
                message: 'something went wrong',
            }, res);
        });
    }
}

module.exports = CommonMiddlewares;
