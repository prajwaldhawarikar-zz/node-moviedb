require('dotenv').config();
/**
 * Server configs
 * @class ServerConfig
 */
class ServerConfig {
    /**
     * Get API base path
     * @static
     * @returns {string} API base path
     * @memberof ServerConfig
     */
    static getApiBasePath() {
        return '/api';
    }
    /**
     * Get port for server to run
     * @static
     * @returns {number} port
     * @memberof ServerConfig
     */
    static getPort() {
        return 3000;
    }

    /**
     * Get API url of server
     * @static
     * @returns {string}API url
     * @memberof ServerConfig
     */
    static getApiUrl() {
        return `http://localhost:${this.getPort()}`;
    }

    /**
     * Get movieDB API key
     * @static
     * @returns {string} MovieDB API key
     * @memberof ServerConfig
     */
    static getMovieDbApiKey() {
        return process.env.MOVIE_DB_API_KEY || null;
    }
}

module.exports = {
    serverConfig: ServerConfig,
};
