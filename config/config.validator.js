/* eslint-disable no-console */
/**
 * Check the configs, if not exit the process
 * @param {Object} config service config object
 */
exports.checkServerConfig = (config) => {
    console.log('Checking server config');
    if (!config.getMovieDbApiKey()) {
        console.log('Please set MOVIE_DB_API_KEY in env vars');
        process.exit(1);
    }
    console.log('server config..OK');
};
