const db = require('./index.js');
const seedData = require('./dummy-data.js');

// db.query('Drop database twitchy;')

seedData.map((data) => {
  db.query('INSERT INTO liveStreams SET ?;', data, (err, result) => {
  if (err) {
    console.error(err)
    }
    console.log('data created', result)
  })
})