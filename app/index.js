const express = require('express');

const Components = require('./components/');
const Middlewares = require('./middlewares');

class Server {
    constructor(config) {
        this.app = express();
        this.config = config;
        this.initializeApp();
    }

    initializeApp() {
        this.initConfig();
        this.setMiddlewares();
        this.setComponents();
        this.setUncaughtExceptionHandler();
        this.setUnhandledRejectionHandler();
    }

    initConfig() {
        this.port = this.config.serverConfig.getPort();
        this.app.set('port', this.port);
    }

    setMiddlewares() {
        this.middlewares = new Middlewares(this.app);
    }

    setComponents() {
        this.components = new Components(this.app);
    }

    // eslint-disable-next-line class-methods-use-this
    setUncaughtExceptionHandler() {
        // TODO: Send Email to dev team about unhandledException
        process.on('uncaughtException', (err) => {
            console.error('Something broke - UncaughtException ', { stack: err.message });
            process.exit(1);
        });
    }

    // eslint-disable-next-line class-methods-use-this
    setUnhandledRejectionHandler() {
        // TODO: Send Email to dev team about unhandledRejection
        process.on('unhandledRejection', (err) => {
            console.error(' Something broke - unhandledRejection ', err);
            process.exit(1);
        });
    }

    startServer() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on port: ${this.port}`); // eslint-disable-line no-console
        });
        this.isServerUp();
    }

    isServerUp() {
        this.app.get('/isServerUp', (req, res) => {
            res.send('Server is up');
        });
    }
}

module.exports = Server;