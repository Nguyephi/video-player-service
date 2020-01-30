const db = require('../db');

module.exports = {
  getLiveStream: function(streamerId, cb) {
    db.query('SELECT * FROM liveStreams WHERE id = ? LIMIT 1;', [streamerId], (err, result) => {
      cb(err, result)
    })
  }
};
