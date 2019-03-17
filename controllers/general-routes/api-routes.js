/**
 * Description:   API Routes for general routes
 * Created:       03.12.2019
 **/

var fs = require("fs");

module.exports = function (app) {

  // GET route to load markdown file if markdown file is available for the specific page
  app.get('/api/markdown/:category?/:path?', function(req, res) {
    // define filepath which is where we save our markdown files
    var filepath = 'markdown/';
    // if there is a :category in the route, append the category
    if(req.params.category) {
      filepath += req.params.category
    }
    // if there is a :path in the route, append the path
    if(req.params.path) {
      filepath += '/' + req.params.path;
    }
    // if there is no :category AND no :path in the route, append the index
    if(filepath === 'markdown/') {
      filepath += 'index';
    }
    // console.log(filepath);
    // use fs to read the filepath.txt, make an array around the objects in the .txt file, parse the array so it is an object and send it back to the client
    fs.readFile(filepath + '.txt', "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      if( data.charAt( 0 ) === ',' ) {
        data = data.slice( 1 );
        data = '[' + data + ']';
        // console.log(data);
        var markdown = JSON.parse(data);
        res.send(markdown);
      }
    });
  });

  // post route for new markdown file
  app.post("/markdown/new", function(req, res) {
    // console.log(req.body);
    // console.log(req.body.path);
    if(req.body.path === 'markdown/') {
      req.body.path = 'markdown/index';
    }
    fs.appendFile(req.body.path + '.txt', ',' + JSON.stringify(req.body, null, 2), function(err) {
      if (err) {
        console.log(err);
      } else {
        // console.log("markdown added to log.txt");
        // reload the current users page
        res.redirect("/");
      }
    });
  });

};
