/**
 * Description:   HTML Routes for general routes
 * Created:       03.12.2019
 **/
var indexData = require('../../data/general/indexData.json');
var stylesData = require('../../data/stylesData.json');
// var componentsData = require('../../data/componentsData');
var navigation = require('../../data/general/navigation.json');
var releaseNotesData = require('../../data/releaseNotesData.json');
var fs = require("fs");

module.exports = function (app) {
  // Home Page
  app.get('/', function (req, res) {
    // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    var hbsObject = {
      pageData: indexData,
      headerData: 'componentsData',
      nav: navigation
    };
    // console.log(hbsObject);
    // console.log(hbsObject);
    res.render('index', {
      title: 'Home', // pass any value to handlebar template
      hbsObject: hbsObject
    });
  });

  // Getting Started Page
  app.get('/getting-started', function (req, res) {
    // // assign the handlebar object any data to be read into the template. this separates the data from the markup.
    // var hbsObject = {
    //   pageData: gettingStartedData,
    //   nav: navigation
    // };
    // // console.log(hbsObject);
    // res.render('partials/pages/getting-started', {
    //   title: 'Home', // pass any value to handlebar template
    //   hbsObject: hbsObject
    // });
  });

  // Styles Pages
  app.get('/styles/:category', function(req, res) {
    var category = req.params.category;
    var hbsObject = {
      nav: navigation
    };
    var page = '';

    if(category === 'overview') {
      hbsObject.pageData = stylesData;
      page = 'pages/styles-overview';
    } else {
      hbsObject.pageData = stylesData.categories[category];
      page = 'pages/styles';
    }

    // console.log(hbsObject);
    res.render(page, {
      hbsObject: hbsObject
    })
  });

  // Components Pages
  // app.get('/components/:category', function(req, res) {
  //   var category = req.params.category;
  //   var hbsObject = {
  //     nav: navigation
  //   };
  //   var page = '';

  //   if(category === 'overview') {
  //     hbsObject.pageData = componentsData;
  //     page = 'pages/components-overview';
  //   } else {
  //     hbsObject.pageData = componentsData.components[category];
  //     page = 'pages/components';
  //   }

  //   res.render(page, {
  //     hbsObject: hbsObject
  //   });
  // });

  // Release Notes
  app.get('/release-notes', function(req, res) {
    var hbsObject = {
      pageData: releaseNotesData,
      nav: navigation
    };

    // console.log(releaseNotesData);

    res.render('pages/release-notes', {
      hbsObject: hbsObject
    });
  });

  // app.get('/api/components', function (req, res) {
  //   res.send(componentsData);
  // });

  // app.get('/test/markdown', function (req, res) {
  //   // assign the handlebar object any data to be read into the template. this separates the data from the markup.
  //   var hbsObject = {
  //     pageData: indexData,
  //     headerData: componentsData,
  //     nav: navigation
  //   };
  //   res.render('markdown', {
  //     hbsObject: hbsObject
  //   });
  // });

};
