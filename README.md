# deepstream-ws
This connector allow to access deepstream events API in a REST api way

## Basic concepts
Deepstream provides and easy way to do publish-subscribe, this connector uses the concept of **path**,
 there's some examples of valid values:
- ```notifications```
- ```news\tech```
- ```clients\5gVH32```

Notice how the second value is optional

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
