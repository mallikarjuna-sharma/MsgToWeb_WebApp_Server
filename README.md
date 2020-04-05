# MsgToWeb_WebApp_Server
web app with express server to receive and show message sent from mobile aplication


> The goal of this application is to 
> show __Sim based SMS__ to show up in 
> a website to read SMS contents for 
> automation testing.
> This app is Website part attached  
> with server to show SMS received in mobile


### Tech

* [React.js] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework


### Installation

MsgToWeb_WebApp_Server requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server,start react app.
Install the Mobile app 
https://github.com/mallikarjuna-sharma/MsgToWeb_MobileApp/raw/master/app/build/outputs/apk/debug/MsgToWeb.apk
Allow permission to read/write sms
Connect your pc/laptop and Mobile with same network
That's it , receive any Mobile SmS and see it in your Web app

```sh
$ cd MsgToWeb_WebApp_Server
$ npm install 
$ node server
$ npm start
```

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Upcoming Features / Improvements 

- [x] Implementing Database (to store user information with messages received)
- [x] Web sockets (to load show messages in UI instantly)


### Mobile app

https://github.com/mallikarjuna-sharma/MsgToWeb_MobileApp/raw/master/app/build/outputs/apk/debug/MsgToWeb.apk





