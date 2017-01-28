// Load env config
var config         = require('./env.json'),
    deepstream     = require('deepstream.io-client-js'),
    express        = require('express'),
    port           = config.port,
    morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    _              = require('lodash'),
    app            = express();

app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

require('./app/routes/inboud-routes.js')(app);
global._ = _; //lodash

var deepstreamClient = deepstream(config.deepstream).login();

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);