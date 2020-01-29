const db = require('./index.js');
const seedData = require('./dummy-data.js');

seedData.map((data) => {
  db.query('INSERT INTO liveStream SET ?;', data, (err, result) => {
    if (err) {
      console.error(err)
    }
    console.log('data created', result)
  })
})