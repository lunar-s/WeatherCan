var server = require('supertest');
var should = require('chai').should();
var app = require('../index');

describe("Index", function() {
    it("should pass", function(done){
        server(app)
        .get('/')
        .end(function(err, res){
            if(err) done(err);
            should.equal(res.status, 200);
            
            done();
        });
    });
});
