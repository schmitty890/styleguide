/**
 * Description:   Unit test file for views/helpers/regex.js
 * Created:       03.15.2019
 **/
const assert = require('chai').assert;
const regex = require('../../../views/helpers/regex.js');

var regexHelperFunctions = {
  replaceSpaceWithHyphen: regex.replaceSpaceWithHyphen
};

// regex handlebar helper functions unit tests
describe('regex handlebar helper functions', function() {

  describe('replaceSpaceWithHyphen function', function() {
    it('replaceSpaceWithHyphen function accepts January 25 2019 and returns January-25-2019', function() {
      assert.equal(regexHelperFunctions.replaceSpaceWithHyphen('January 25 2019'), 'January-25-2019');
    });
  });

});