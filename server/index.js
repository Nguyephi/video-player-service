const app = require('./app.js')
const port = 9900

app.listen(port, () => console.log('Video player service is listening on port ' + port))