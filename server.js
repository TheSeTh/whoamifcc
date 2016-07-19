var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req,res) {
    res.end("Hello Stranger!");
});

app.get('*', function(req,res) {
    var ip = req.headers['x-forwarded-for'];
    var lang = req.headers['accept-language'];
    var os = req.headers['user-agent'];
    
    res.end(JSON.stringify({'ip': ip, 'lang': lang.substr(0,lang.indexOf(',')), 'os': os.substr(os.indexOf('(')+1,os.indexOf(')')-os.indexOf('(')-1)}));
});

app.listen(port);