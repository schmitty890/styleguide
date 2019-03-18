/**
 * Description:   API Routes for merrill routes
 * Created:       03.18.2019
 **/
var merrillComponentsData = require('../../data/merrill/components.json');

module.exports = function (app) {
  // Merrill components data
  app.get('/api/merrill/components', function(req, res) {
    res.send(merrillComponentsData);
  });
};
