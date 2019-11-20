class ServerConfig {
    static getApiBasePath() {
        return '/api';
    }

    static getPort() {
        return process.env.PORT ? process.env.PORT : 3000;
    }
}

module.exports = {
    serverConfig: ServerConfig,
};
