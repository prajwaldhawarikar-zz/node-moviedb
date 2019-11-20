/* eslint-disable no-console */
exports.checkServerConfig = (config) => {
    console.log('Checking server config');
    if (!config.getMovieDbApiKey()) {
        console.log('Please set MOVIE_DB_API_KEY in env vars');
        process.exit(1);
    }
    console.log('server config..OK');
};
