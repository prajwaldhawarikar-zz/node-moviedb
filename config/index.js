require('dotenv').config();

class ServerConfig {
    static getApiBasePath() {
        return '/api';
    }

    static getPort() {
        return process.env.PORT ? process.env.PORT : 3000;
    }

    static getApiUrl() {
        return `http://localhost:${this.getPort()}`;
    }

    static getMovieDbApiKey() {
        return process.env.MOVIE_DB_API_KEY || null;
    }
}

module.exports = {
    serverConfig: ServerConfig,
};
