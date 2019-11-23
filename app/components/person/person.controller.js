/* eslint-disable no-restricted-globals */

const { responseUtil } = require('../../utils');
const { keyMappings, responseBodyMessages } = require('../../constants');
const { personService } = require('../../services');

exports.getAppearances = async function (req, res, next) {
    const personId = Number(req.params.personId);

    if (isNaN(personId)) {
        // Invalid person id
        return responseUtil.send(
            responseUtil.getCode().BAD_REQUEST,
            responseBodyMessages.INVALID_PERSON_ID,
            res,
        );
    }

    try {
        const appearances = await personService.fetchAppearances('all', personId, keyMappings.all);
        if (!appearances.length) {
            // No appearances
            return responseUtil.send(responseUtil.getCode().NOT_FOUND, [], res);
        }
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};

exports.getMovieAppearances = async function (req, res, next) {
    const personId = req.params.personId;

    if (isNaN(personId)) {
        // Invalid person id
        return responseUtil.send(
            responseUtil.getCode().BAD_REQUEST,
            responseBodyMessages.INVALID_PERSON_ID,
            res,
        );
    }

    try {
        const appearances = await personService.fetchAppearances('movie', personId, keyMappings.movie);
        if (!appearances.length) {
            // No appearances
            return responseUtil.send(responseUtil.getCode().NOT_FOUND, [], res);
        }
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};

exports.getTvAppearances = async function (req, res, next) {
    const personId = req.params.personId;

    if (isNaN(personId)) {
        // Invalid person id
        return responseUtil.send(
            responseUtil.getCode().BAD_REQUEST,
            responseBodyMessages.INVALID_PERSON_ID,
            res,
        );
    }

    try {
        const appearances = await personService.fetchAppearances('tv', personId, keyMappings.tv);
        if (!appearances.length) {
            // No appearances
            return responseUtil.send(responseUtil.getCode().NOT_FOUND, [], res);
        }
        return responseUtil.send(responseUtil.getCode().OK, appearances, res);
    } catch (error) {
        next(error);
        throw error;
    }
};
