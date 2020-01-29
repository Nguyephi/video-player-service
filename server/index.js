const app = require('./app.js');
const port = 3001;
const db = require('./db');

app.listen(port, () => console.log('Video player service is listening on port ' + port));