/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs');
var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);
/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
// set port to 8888
app.set('port', 8888);
// set the path read the views folder that holds the handlebar html templates
app.set('views', path.join(__dirname, 'views'));
// set the teplating engine to render handlebars with default layout and any custom handlebar helper functions
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    upperCase: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    escapeHtml: function(code) {
      // The code snippet you want to highlight, as a string
      // var code = "var data = 1;";
      // var html = code
      //      .replace(/&/g, "&amp;")
      //      .replace(/</g, "&lt;")
      //      .replace(/>/g, "&gt;")
      //      .replace(/"/g, "&quot;")
      //      .replace(/'/g, "&#039;");
      //       var code = `<pre class=" language-markup">
      //   <code class="  language-markup">
      //     <div class="msg msg--state-error" role="alert" aria-live="assertive">
      //       <div class="msg__icon" aria-label="Error"></div>
      //       <div class="msg__body">
      //           <div class="msg__close">
      //             <button class="close-x" type="button" aria-label="Close"></button>
      //           </div>
      //         <p class="msg__title">Processing error</p>
      //         <p class="msg__message">An error occurred while attempting to process your payment. Please try again later.</p>
      //       </div>
      //     </div>
      //   </code>
      // </pre>`;
      //       console.log(code);
      //       console.log('----------------------');
      //       // Returns a highlighted HTML string
      //       html = Prism.highlight(code, Prism.languages.html, 'html');
      //       console.log(code);
      //       console.log(typeof code);
      //       return code;
    }
  }
}));
// set the view engine to handlebars
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// read the build folder when server is running
app.use('/build', express.static(__dirname + '/build'));
app.use('/public', express.static(__dirname + '/public'));

/**
 * Get all routes
 */
require('./controllers/html-routes.js')(app);

/**
 * show 404 page if no route has been hit
 */
app.get('*', function(req, res) {
  res.render('404');
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('Success!'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});
