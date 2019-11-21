const MovieDB = require('moviedb');

const { serverConfig } = require('../../config');
const { logger } = require('../utils');
const helper = require('../helpers');

const moviedb = MovieDB(serverConfig.getMovieDbApiKey());

exports.fetchAppearances = function (mediaType, personId, details) {
    return new Promise(((resolve, reject) => {
        if (mediaType === 'movie') {
            moviedb.personMovieCredits({ id: personId }, (err, appearances) => {
                if (err) {
                    logger.error('Something broke - fetchAppearances', { meta: [{ stack: err.stack }, { input: { mediaType, personId } }] });
                    reject(err);
                } else {
                    const movieAppearances = helper.pickKeys(appearances.cast, details);
                    resolve(movieAppearances);
                }
            });
        } else if (mediaType === 'tv') {
            moviedb.personTvCredits({ id: personId }, (err, appearances) => {
                if (err) {
                    logger.error('Something broke - fetchAppearances', { meta: [{ stack: err.stack }, { input: { mediaType, personId } }] });
                    reject(err);
                } else {
                    const tvAppearances = helper.pickKeys(appearances.cast, details);
                    resolve(tvAppearances);
                }
            });
        } else {
            moviedb.personCombinedCredits({ id: personId }, (err, appearances) => {
                if (err) {
                    logger.error('Something broke - fetchAppearances', { meta: [{ stack: err.stack }, { input: { mediaType, personId } }] });
                    reject(err);
                } else {
                    const alleAppearances = helper.pickKeys(appearances.cast, details);
                    resolve(alleAppearances);
                }
            });
        }
    }));
};
