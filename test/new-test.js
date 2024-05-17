const { expect } = require('chai');
const validateCityCode = require('../validator');

describe('validateCityCode', function() {
  it('should return true for valid city code', function() {
    expect(validateCityCode('Athabasca', 's0000001')).to.be.true;
  });

  it('should return false for invalid city code', function() {
    expect(validateCityCode('Athabasca', 's0000002')).to.be.false;
    expect(validateCityCode('Vancouver', 's0000001')).to.be.false;
  });

  it('should return false for non-existent city', function() {
    expect(validateCityCode('NonExistentCity', 's0000001')).to.be.false;
  });

  it('should return false for invalid code format', function() {
    expect(validateCityCode('Vancouver', 'VANCOUVER')).to.be.false;
  });
});
