/**
 * Description:   API Routes for bol routes
 * Created:       03.12.2019
 **/
var bolComponentsData = require('../../data/bol/components.json');


module.exports = function (app) {
  // BOL components data
  app.get('/api/bol/components', function(req, res) {
    res.send(bolComponentsData);
  });
};
