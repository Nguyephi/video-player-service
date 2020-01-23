const express = require('express');
const app = express()
const port = 9900

app.listen(port, () => console.log('Video player service is listening to port' + port))