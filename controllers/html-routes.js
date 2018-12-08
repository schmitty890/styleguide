var testdata = require('../data/testData.json');

module.exports = function (app) {
  // Home Page
  app.get('/', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      testdata: testdata
    }
    // console.log(hbsObject);
    res.render('index', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
  });

  // Home Page
  app.get('/getting-started', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      testdata: testdata
    }
    // console.log(hbsObject);
    res.render('index', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
  });
};
