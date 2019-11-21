
const { responseUtil } = require('../../utils');
const { personService } = require('../../services');

exports.getAppearances = async function (req, res, next) {
    const personId = req.params.personId;
    try {
        const appearances = await personService.fetchAppearances('all', personId, ['media_type', 'title', 'name', 'release_date', 'first_air_date']);
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};

exports.getMovieAppearances = async function (req, res, next) {
    const personId = req.params.personId;
    try {
        const appearances = await personService.fetchAppearances('movie', personId, ['character', 'title', 'release_date']);
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};

exports.getTvAppearances = async function (req, res, next) {
    const personId = req.params.personId;
    try {
        const appearances = await personService.fetchAppearances('tv', personId, ['character', 'title', 'release_date']);
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};
