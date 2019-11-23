const {
    after, before, describe, it,
} = require('mocha');
const chai = require('chai');
const sinon = require('sinon');

const personService = require('./person.service');
const testData = require('../../tests/testData');
const { keyMappings } = require('../constants');

const moviedb = personService.moviedb;

const expect = chai.expect;

describe('SERVICE - request to MovieDB for fetching appearances ', () => {
    describe('request all appearances ', () => {
        before(() => {
            moviedb.personCombinedCredits = sinon
                .stub(moviedb, 'personCombinedCredits')
                .yields(undefined, {
                    cast: testData.valid.appearances.all[0],
                });
        });
        after(() => {
            moviedb.personCombinedCredits.restore();
        });
        it('should return all appearances of person', async () => {
            const result = await personService.fetchAppearances('all', testData.valid.personIds[0], keyMappings.all);
            expect(result).to.have.deep.members([
                { type: 'movie', title: 'TMNT', date: '2007-03-23' },
                { type: 'movie', title: 'Captain America: The First Avenger', date: '2011-07-22' },
                { type: 'movie', title: 'London', date: '2005-02-10' },
                { type: 'movie', title: 'Before We Go', date: '2014-09-11' },
                { type: 'movie', title: 'Playing It Cool', date: '2014-09-26' },
                { type: 'tv', title: 'Defending Jacob' },
            ]);
        });
    });

    describe('request movie appearances ', () => {
        before(() => {
            moviedb.personMovieCredits = sinon
                .stub(moviedb, 'personMovieCredits')
                .yields(undefined, {
                    cast: testData.valid.appearances.movie[0],
                });
        });
        after(() => {
            moviedb.personMovieCredits.restore();
        });
        it('should return appearances of person on movie', async () => {
            const result = await personService.fetchAppearances('movie', testData.valid.personIds[0], keyMappings.movie);
            expect(result).to.have.deep.members([
                { character: 'Casey Jones (voice)', title: 'TMNT', date: '2007-03-23' },
            ]);
        });
    });

    describe('request tv appearances ', () => {
        before(() => {
            moviedb.personTvCredits = sinon
                .stub(moviedb, 'personTvCredits')
                .yields(undefined, {
                    cast: testData.valid.appearances.tv[0],
                });
        });
        after(() => {
            moviedb.personTvCredits.restore();
        });
        it('should return appearances of person on tv', async () => {
            const result = await personService.fetchAppearances('tv', testData.valid.personIds[0], keyMappings.tv);
            expect(result).to.have.deep.members([
                { title: 'Defending Jacob', episode_count: 1 },
            ]);
        });
    });
});
