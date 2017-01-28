# deepstream-ws
This connector allow to access deepstream events API in a REST api way

## Installation
- clone this repo
- run ```npm install```
- rename ```env.json.example``` to ```env.json``` and configure it to match your infrastructure
- run it ```node server.js```

## API

### Subscribe to a new Channel
`POST http://localhost:1232/subscriptions/{channelName}` : *"subscribed to: channelName"*
### Unsubscribe from a Channel
`DELETE http://localhost:1232/unsubscribe/{channelName}` : *"unsubscribed from: channelName"*
### Emit an event on a Channel
`POST http://localhost:1232/emit/{channelName}/{:body}` : *"emitted: channelName/body"*
You can also post objects inside the body, e.g.: "obj1" : "Hello", "obj2" : "World!"
### Get All Active Channels
`GET http://localhost:1232/subscriptions` : *["channel1", "channel2"]*

### License
MIT
