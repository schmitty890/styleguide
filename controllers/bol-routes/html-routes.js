/**
 * Description:   HTML Routes for bol routes
 * Created:       03.12.2019
 **/
var bolComponentsData = require('../../data/bol/components.json');
var navigation = require('../../data/bol/navigation.json');

module.exports = function (app) {

  app.get('/bol', function(req, res) {
    res.send('bol page');
  });

  // BOL Components Pages
  app.get('/bol/components/:category', function(req, res) {
    var category = req.params.category;
    var hbsObject = {
      nav: navigation
    };
    var page = '';

    if(category === 'overview') {
      hbsObject.pageData = bolComponentsData;
      page = 'pages/components-overview';
    } else {
      hbsObject.pageData = bolComponentsData.components[category];
      page = 'pages/components';
    }

    res.render(page, {
      hbsObject: hbsObject
    });
  });

};
