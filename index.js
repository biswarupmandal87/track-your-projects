var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Scalable service is running!');
});
app.listen(8080);
console.log('Running on http://localhost:8080');