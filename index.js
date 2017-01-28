// Load env config
var config = require('./env.json')

var deepstream = require('deepstream.io-client-js');

var deepstreamClient = deepstream(config.deepstream).login();

function subscribe(event) {
    deepstreamClient.event.subscribe( event, function( payload ){
        console.log( event+": "+payload );
    });
}

function emit(event,payload) {
    client.event.emit(event, payload);
}
