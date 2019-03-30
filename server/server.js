
var express = require('express');
var path = require('path');
var imageList = require('./imageList');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(path.join(__dirname, "/dist")));
app.get('/getImages', imageList);
var port = process.env.PORT || 5000;
app.listen(port);
