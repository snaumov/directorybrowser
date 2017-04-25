const http = require('http');
var express = require('express')
const helpers = require('./helpers');
const WebSocket = require('ws');
const fs = require('fs');

var app = express()

const port = 4000

const server = http.createServer(app);
const wss = new WebSocket.Server({ 
    server, 
});

app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:3000', 'https://snaumov.github.io'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.get('/', function (req, res) {
    helpers.listDirectoryContent('/').then(dirContent => res.json(dirContent));
})

app.get('/directorylist', (req, res) => {
    console.log(req.query);
    helpers.listDirectoryContent(req.query.path).then(dirContent => res.json(dirContent));
})

app.get('/openfile', (req, res) => {
    try{
        fs.createReadStream(req.query.path).pipe(res);
    } catch (e) {
        res.write(e);
        res.end();
    }
    
})


server.listen((process.env.PORT || port), (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})