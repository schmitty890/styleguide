/**
 * Description:   HTML Routes for bol routes
 * Created:       03.12.2019
 **/
var bolComponentsData = require('../../data/bol/components.json');
var navigation = require('../../data/bol/navigation.json');

module.exports = function (app) {

  app.get('/bol', function(req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      // pageData: indexData,
      // headerData: 'componentsData',
      // nav: navigation
    };
    // console.log(hbsObject);
    // console.log(hbsObject);
    res.render('index', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
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
