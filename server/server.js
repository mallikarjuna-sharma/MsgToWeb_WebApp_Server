
const express = require('express');
const app = express()
var bodyParser = require('body-parser');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var messagebody = 'Waiting for message' ;
app.use(bodyParser());
  app.get('/getMessage', function (req, res) {
      res.send(messagebody)
    // res.end(messagebody);
  })

  app.get('/message/:msg', function (req, res) {
    messagebody = req.params.msg;
    res.end();
  })
   
  app.listen(3456)
  
console.log("server listening to port 3456")