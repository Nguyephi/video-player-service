const app = require('./app.js');
require('dotenv').config()
const { PORT } = process.env;
const db = require('./db');

app.listen(PORT, () => console.log('Video player service is listening on port ' + PORT));