/**
 * Created by andream16 on 28.01.17.
 */
var deepstream = require('deepstream.io-client-js');
var deepstreamClient;

/** Methods available to external usage **/
exports.subscribe         = subscribe;
exports.emit              = emit;
exports.unsubscribe       = unsubscribe;
exports.getActiveChannels = getActiveChannels;
exports.login             = login;

var channels = [];

function login( server, optionals) {
    deepstreamClient = deepstream(server).login();
}

/** Function Called to subscribe to an event **/
function subscribe(channel, optional) {
    return new Promise(function (res, rej) {
        if(_.isUndefined(channel)){
            return rej({err : 'No channel Specified in the Request'});
        }
        deepstreamClient.channel.subscribe( channel, function( err, payload ){
            if(err){
              return rej({err : err});
            }
            console.log( channel+": "+payload );
            channels.push(channel);
            return res({success: 'Successfully Subscribed to '+ channel});
        });
    });
}

/** Function Called to emit to an event **/
function emit(event, payload) {
    return new Promise( function (res, rej) {
        if(_.isUndefined(event) || _.isUndefined(payload)){
            return rej({err: 'Unable to emit an event, event or payload are undefined'});
        }
        deepstreamClient.event.emit(event, payload, function ( err, payload ) {
          if(err){
              return rej({err: err})
          }
          return res({success: payload})
        });
    });
}

/** Function Called to subscribe to an event **/
function unsubscribe(event) {
    return new Promise( function (res, rej) {
        if(_.isUndefined(event)){
            return rej({err: 'No error specified in the Request'});
        }
        deepstreamClient.event.unsubscribe(event, function(err, response){
            if(err){
                return rej({err: err})
            }
            channels.delete(channel);
            return res({success: response})
        });
    });
}

/** Function Called to get all active channels **/
function getActiveChannels() {
   return JSON.stringify(deepstreamChannels.channels);
}