/**
 * Description:   Handlebar upperCase helper functions - should think about making this a utillities function or something. upperCase is too specific.
 * Created:       03.15.2019
 **/
var upperCase = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = upperCase;
