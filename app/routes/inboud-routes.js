/**
 * Created by andream16 on 28.01.17.
 */
var Deepstream = require('../deepstream/deepstream.js');

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

//Listening to events
module.exports = function (app) {

    /** Subscribing to a channel **/
    app.post('/subscriptions/:channel/:optional', function(channel, res) {
        Deepstream.subscribe(channel).then( function (response) {
          res.json(response);
        }).catch(function (err) {
           res.json(err);
        });
    });

    /** Unsubscribing to a channel **/
    app.delete('/subscriptions/:channel/:optional', function(channel, res) {
        Deepstream.unsubscribe(channel).then( function (response) {
            res.json(response);
        }).catch(function (err) {
            res.json(err);
        });
    });


    app.post('/emit/:channel/:optional', function(req, res) {
        Deepstream.subscribe(req).then( function (response) {
            res.json(response);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.get('/subscriptions', function (req, res) {
      return res(Deepstream.getActiveChannels());
    });

};