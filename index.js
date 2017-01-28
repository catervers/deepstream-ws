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
    deepstreamClient.event.emit(event, payload);
}

/*
    Inbound api:
    POST: /subscriptions/>CHANNEL-NAME<
         BODY-OPTIONAL: hook url
    DELETE: /subscriptions/>CHANNEL-NAME<
    POST: /emit/>CHANNEL-NAME<
        BODY: >PAYLOAD<

    Outbound calls:
    POST: /event/>CHANNEL-NAME< (slashes should be replaced with underscores)
        BODY: >PAYLOAD<
 */