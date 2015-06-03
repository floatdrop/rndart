var express = require('express');
var app = express();

var imax = require('./imax.json');
var pickRandom = require('pick-random');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    var url = pickRandom(imax)[0].image;
    response.send(`
<html>
    <style>
html {
    background: url(${url}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    </style>
    <body/>
</html>`);
});

app.get('/redirect', function(request, response) {
    var url = pickRandom(imax)[0].image;
    response.redirect(url);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
