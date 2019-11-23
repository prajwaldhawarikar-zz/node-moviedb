const express = require('express');

const configValidator = require('../config/config.validator');
const { logger } = require('./utils/');

const Components = require('./components/');
const Middlewares = require('./middlewares');

class Server {
    constructor(config) {
        this.app = express();
        this.config = config;
        this.initializeApp();
    }

    initializeApp() {
        this.checkConfig();
        this.initConfig();
        this.setMiddlewares();
        this.setComponents();
        this.setUncaughtExceptionHandler();
        this.setUnhandledRejectionHandler();
    }

    // Checks config, on config missing exits process
    checkConfig() {
        this.serverConfig = this.config.serverConfig;
        configValidator.checkServerConfig(this.serverConfig);
    }

    // Assign config to express app
    initConfig() {
        this.port = this.config.serverConfig.getPort();
        this.app.set('port', this.port);
    }

    // Set all app middlewares
    setMiddlewares() {
        this.middlewares = new Middlewares(this.app);
    }

    // Set components of app by setting routes
    setComponents() {
        this.components = new Components(this.app);
    }

    // Handle uncaught error and exit process
    // eslint-disable-next-line class-methods-use-this
    setUncaughtExceptionHandler() {
        // TODO: Send Email to dev team about unhandledException
        process.on('uncaughtException', (err) => {
            logger.error('Something broke - UncaughtException ', { stack: err.message });
            process.exit(1);
        });
    }

    // Handle unrejectd promise rejection and exit process
    // eslint-disable-next-line class-methods-use-this
    setUnhandledRejectionHandler() {
        // TODO: Send Email to dev team about unhandledRejection
        process.on('unhandledRejection', (err) => {
            logger.error(' Something broke - unhandledRejection ', err);
            process.exit(1);
        });
    }

    /**
     * Start API server
     * @memberof Server
     */
    startServer() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on port: ${this.port}`); // eslint-disable-line no-console
        });
        this.isServerUp();
    }

    // set server health check
    isServerUp() {
        this.app.get('/isServerUp', (req, res) => {
            res.send('Server is up');
        });
    }
}

module.exports = Server;
