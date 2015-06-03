var express = require('express');
var app = express();

var imax = require('./imax.json');
var pickRandom = require('pick-random');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    response.redirect(pickRandom(imax)[0].image);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
