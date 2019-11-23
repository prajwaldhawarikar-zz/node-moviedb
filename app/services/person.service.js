const MovieDB = require('moviedb');

const { serverConfig } = require('../../config');
const { logger } = require('../utils');
const helper = require('../helpers');

const moviedb = MovieDB(serverConfig.getMovieDbApiKey());
exports.moviedb = moviedb;
/**
 * Fetches appearances of person
 * @param {string} mediaType movie/tv/all
 * @param {number} personId id of person
 * @param {Object} details key mapping object
 * @returns list of appearances
 */
exports.fetchAppearances = function (mediaType, personId, details) {
    return new Promise(((resolve, reject) => {
        if (mediaType === 'movie') {
            // appearances in movie
            moviedb.personMovieCredits({ id: personId }, (err, appearances) => {
                if (err) {
                    if (err.message === 'Not Found') {
                        resolve([]);
                    } else {
                        logger.error('Something broke - fetchAppearances', { meta: [{ stack: err.stack }, { input: { mediaType, personId } }] });
                        reject(err);
                    }
                } else {
                    const movieAppearances = helper.pickKeys(appearances.cast, details);
                    resolve(movieAppearances);
                }
            });
        } else if (mediaType === 'tv') {
            // appearances on tv shows
            moviedb.personTvCredits({ id: personId }, (err, appearances) => {
                if (err) {
                    if (err.message === 'Not Found') {
                        resolve([]);
                    } else {
                        logger.error('Something broke - fetchAppearances', { meta: [{ stack: err.stack }, { input: { mediaType, personId } }] });
                        reject(err);
                    }
                } else {
                    const tvAppearances = helper.pickKeys(appearances.cast, details);
                    resolve(tvAppearances);
                }
            });
        } else {
            // all appearance i.e. movie and tv
            moviedb.personCombinedCredits({ id: personId }, (err, appearances) => {
                if (err) {
                    if (err.message === 'Not Found') {
                        resolve([]);
                    } else {
                        logger.error('Something broke - fetchAppearances', { meta: [{ stack: err.stack }, { input: { mediaType, personId } }] });
                        reject(err);
                    }
                } else {
                    const alleAppearances = helper.pickKeys(appearances.cast, details);
                    resolve(alleAppearances);
                }
            });
        }
    }));
};
