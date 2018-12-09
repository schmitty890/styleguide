var indexData = require('../data/indexData.json');
var gettingStartedData = require('../data/gettingStartedData.json');
var guidelinesData = require('../data/guidelinesData.json');

module.exports = function (app) {
  // Home Page
  app.get('/', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      pageData: indexData
    }
    console.log(hbsObject.pageData.header);
    // console.log(hbsObject);
    res.render('index', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
  });

  // Getting Started Page
  app.get('/getting-started', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      pageData: gettingStartedData
    }
    console.log(hbsObject.pageData.header);
    // console.log(hbsObject);
    res.render('partials/pages/getting-started', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
  });

  // Guidelines Overview Page
  app.get('/guidelines', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      pageData: guidelinesData
    }
    console.log(hbsObject.pageData.header);
    // console.log(hbsObject);
    res.render('partials/pages/getting-started', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
  });
};
