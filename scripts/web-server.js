var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');


app.use(express.static(rootPath + '/app'));

app.listen(8080);
console.log('Listenning on port 8080...')