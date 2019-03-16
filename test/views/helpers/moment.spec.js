////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Unit test file for views/helpers/moment.js
// Filetype: handlebar helper functions
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
const assert = require('chai').assert;
const momentHelpers = require('../../../views/helpers/moment.js');

var momentHelperFunctions = {
  momentFromNowTime: momentHelpers.momentFromNowTime,
  dayMonthYear: momentHelpers.dayMonthYear,
  bar: momentHelpers.bar
};

// Moment handlebar helper functions unit tests
describe('Moment handlebar helper functions', function() {

  describe('dayMonthYear function', function() {
    it('dayMonthYear function returns January 25 2019', function() {
      assert.equal(momentHelperFunctions.dayMonthYear('2019-01-25'), 'January 25 2019');
    });
  });

  describe('momentFromNowTime function', function() {
    it('momentFromNowTime function returns 2 months ago', function() {
      assert.equal(momentHelperFunctions.momentFromNowTime('2019-01-25'), '2 months ago');
    });
  });

  describe('bar function', function() {
    it('bar function returns BAR', function() {
      assert.equal(momentHelperFunctions.bar(), 'BAR');
    });
  });
});