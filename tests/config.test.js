const { describe, it } = require('mocha');
const chai = require('chai');
const { serverConfig } = require('../config');

const expect = chai.expect;

describe('CONFIG - should return configs', () => {
    it('getApiBasePath - should return api basepath', async () => {
        const result = serverConfig.getApiBasePath();
        expect(result).to.be.string;
    });
    it('getPort - should return server port', async () => {
        const result = serverConfig.getPort();
        expect(result).to.be.a('number');
    });
    it('getApiUrl - should return api url', async () => {
        const result = serverConfig.getApiUrl();
        expect(result).to.be.string;
    });
    it('getMovieDbApiKey - should return api basepath', async () => {
        const result = serverConfig.getMovieDbApiKey();
        expect(result).to.be.string;
    });
});
