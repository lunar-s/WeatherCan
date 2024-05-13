const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
    it('responds with 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});