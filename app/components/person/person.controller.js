
const { responseUtil } = require('../../utils');
const { keyMappings } = require('../../constants');
const { personService } = require('../../services');

exports.getAppearances = async function (req, res, next) {
    const personId = req.params.personId;
    try {
        const appearances = await personService.fetchAppearances('all', personId, keyMappings.all);
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};

exports.getMovieAppearances = async function (req, res, next) {
    const personId = req.params.personId;
    try {
        const appearances = await personService.fetchAppearances('movie', personId, keyMappings.movie);
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};

exports.getTvAppearances = async function (req, res, next) {
    const personId = req.params.personId;
    try {
        const appearances = await personService.fetchAppearances('tv', personId, keyMappings.tv);
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};
