/**
 * Description:   HTML Routes for merrill routes
 * Created:       03.18.2019
 **/
var merrillComponentsData = require('../../data/merrill/components.json');
var navigation = require('../../data/merrill/navigation.json');

module.exports = function (app) {
  // merrill Components Pages
  app.get('/merrill/components/:category', function(req, res) {
    var category = req.params.category;
    var hbsObject = {
      nav: navigation
    };
    var page = '';

    if(category === 'overview') {
      hbsObject.pageData = merrillComponentsData;
      page = 'pages/components-overview';
    } else {
      hbsObject.pageData = merrillComponentsData.components[category];
      page = 'pages/components';
    }

    res.render(page, {
      hbsObject: hbsObject
    });
  });

};
