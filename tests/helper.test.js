const { describe, it } = require('mocha');
const chai = require('chai');
const { pickKeys } = require('../app/helpers');
const testData = require('./testData');

const expect = chai.expect;

describe('HELPER - map keys for objects in collection', () => {
    it('should return collection with only specified fields with mapped names', async () => {
        const result = pickKeys(testData.valid.appearances, {
            media_type: 'type',
            title: 'title',
            name: 'title',
            release_date: 'date',
            first_air_date: 'date',
            episode_count: 'episode_count',
        });
        expect(result).to.have.deep.members([
            { type: 'movie', title: 'TMNT', date: '2007-03-23' },
            { type: 'movie', title: 'Captain America: The First Avenger', date: '2011-07-22' },
            { type: 'movie', title: 'London', date: '2005-02-10' },
            { type: 'movie', title: 'Before We Go', date: '2014-09-11' },
            { type: 'movie', title: 'Playing It Cool', date: '2014-09-26' },
            { type: 'tv', title: 'Defending Jacob', episode_count: 1 },
        ]);
    });
    it('should return empty list if specified keys are not present of any object item in the collection', async () => {
        const result = pickKeys(testData.valid.appearances, {
            something_which_is_not_there: 'foo',
            this_is_also_not_there: 'bazz',
        });
        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.an('array').that.is.empty;
    });
    it('should throw an TypeError - if does not passed collection', async () => {
        // eslint-disable-next-line no-unused-expressions
        const tempFunction = () => pickKeys({ something_which_is_not_there: 'foo' }, {
            something_which_is_not_there: 'foo',
            this_is_also_not_there: 'bazz',
        });
        expect(tempFunction).to.throw(TypeError, 'Not an valid array');
    });
});
