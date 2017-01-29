# deepstream-ws
This connector allow to access deepstream events API in a REST api way

## Disclaimer
This project is the result of a boring saturday evening, it's offered as is.

## Basic concepts
Deepstream provides and easy way to do publish-subscribe, this connector uses the concept of **path**,
 there's some examples of valid path values:
- ```notifications```
- ```news/tech```
- ```clients/5gVH32```

Notice how the second value is optional

## Installation
- clone this repo
- run ```npm install```
- rename ```env.json.example``` to ```env.json``` and configure it to match your infrastructure
- run it ```node server.js```
- implement on the **hooks** server the following route: ```POST ../{path}/{opt_path?}``` that will receive the payloads in the post body

## API

### Subscribe to a path
`POST /subscriptions/{pathName}` : *"subscribed to: pathName"*
### Unsubscribe from a path
`DELETE /unsubscribe/{pathName}` : *"unsubscribed from: pathName"*
### Emit an event on a path (the post body will be the payload)
`POST /emit/{pathName}` : *"emitted: pathName"*
### Get All Active paths
`GET /subscriptions` : *["channel1", "channel2"]*

### License
MIT
