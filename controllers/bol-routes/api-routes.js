var bolComponentsData = require('../../data/bol/components.json');


module.exports = function (app) {
  // BOL components data
  app.get('/api/bol/components', function(req, res) {
    res.send(bolComponentsData);
  });
};
