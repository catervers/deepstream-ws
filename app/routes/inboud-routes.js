/**
 * Created by andream16 on 28.01.17.
 */
var Deepstream = require('../deepstream/deepstream.js');

//Listening to events
module.exports = function (app) {

    /** Subscribing to a channel **/
    app.post('/subscriptions/:channel/:optional?', function(req, res) {
        res.json(Deepstream.subscribe(req.params.channel, req.params.optional));
    });

    /** Unsubscribing to a channel **/
    app.delete('/subscriptions/:channel/:optional?', function(req, res) {
        res.json(Deepstream.unsubscribe(req.params.channel, req.params.optional));
    });

    /** Emit an event on a channel **/
    app.post('/emit/:channel/:optional?', function(req, res) {
        res.json(Deepstream.emit(req.params.channel, req.params.optional, req.body));
    });

    /** get All Active Channels **/
    app.get('/subscriptions', function (req, res) {
      res.json(Deepstream.getActiveChannels());
    });

};