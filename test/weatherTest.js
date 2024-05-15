var server = require('supertest');
var should = require('chai').should();
var weather = require('../middleware/weather').iconCondition;

describe("Icon", function() {
    it("should return sunny icon path", function() {
        var condition = ["Sunny"];
        var result = weather(condition);
        should.equal(result, "weather-icons/sunny-icon.png");
    })
})

// describe("Index", function() {
//     it("should pass", function(done){
//         server(app)
//         .get('/')
//         .end(function(err, res){
//             if(err) done(err);
//             should.equal(res.status, 200);
            
//             done();
//         });
//     });
// });