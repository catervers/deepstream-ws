/**
 * Created by andream16 on 28.01.17.
 */
var deepstream = require('deepstream.io-client-js');
var deepstreamClient;

/** Methods available to external usage **/
exports.subscribe = subscribe;
exports.emit = emit;
exports.unsubscribe = unsubscribe;
exports.getActiveChannels = getActiveChannels;
exports.login = login;

var deepstreamChannels = [];

function login(server, optionals) {
    deepstreamClient = deepstream(server).login();
    console.log("Logged to deepstream server");
}

function pathBuilder(channel, optional) {
    return channel + (_.isUndefined(optional) ? "" : "/" + optional);
}

/** Function Called to subscribe to an event **/
function subscribe(channel, optional) {
    var path = pathBuilder(channel, optional);
    deepstreamChannels.push(path);
    deepstreamClient.channel.subscribe(path, function (payload) {
        console.log(path + ": " + payload);
    });
    console.log("subscribed to: " + path);
}

/** Function Called to subscribe to an event **/
function unsubscribe(channel, optional) {
    var path = pathBuilder(channel, optional);
    var index = deepstreamChannels.indexOf(path);
    if (index >= 0) {
        deepstreamChannels.splice(index, 1);
    }
    deepstreamClient.channel.unsubscribe(path);
    console.log("unsubscribed from: " + path);
}

/** Function Called to emit to an event **/
function emit(path, payload) {
    deepstreamClient.event.emit(path, payload);
    console.log("emitted: "+path + ": " + payload);
}

/** Function Called to get all active channels **/
function getActiveChannels() {
    return deepstreamChannels;
}