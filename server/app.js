const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/public'));


app.get('/api/livestream', (req, res) => {

});

module.exports = app;