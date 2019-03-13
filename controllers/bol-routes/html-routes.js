var bolComponentsData = require('../../data/bol/components.json');
var navigation = require('../../data/navigation.json');

module.exports = function (app) {
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
