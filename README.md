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

### License
MIT