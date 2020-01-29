const faker = require('faker');

const gameData = [
  {
    category: 'Overwatch',
    game_poster_url:
  },
  {
    category: 'Fortnite',
    game_poster_url:
  },
  {
    category: 'League of Legends',
    game_poster_url:
  },
  {
    category: 'Minecraft',
    game_poster_url:
  },
  {
    category: 'Grand Theft Auto V',
    game_poster_url:
  },
  {
    category: 'Dota 2',
    game_poster_url:
  },
  {
    category: 'World of Warcraft',
    game_poster_url:
  },
  {
    category: 'The elder Scrolls V: Skyrim',
    game_poster_url:
  },
  {
    category: 'The Witcher',
    game_poster_url:
  },
  {
    category: 'Persona 5',
    game_poster_url:
  },
  {
    category: 'The Legend of Zelda',
    game_poster_url:
  },
  {
    category: 'Super Smash Bros Ultimate',
    game_poster_url:
  }
]

let randomGameIdx = Math.floor(Math.random() * gameData.length);

// this is to ensure that the total view is higher than watching now
let randomTotalViews = Math.floor(Math.random() * (2000000 - 5000)) + 5000;
let randomWatchingNow = Math.floor(Math.random() * (4500 - 2)) + 2;

let seedData = [];

for(let i = 1; i < 101; i++) {
  const newDummyData = {
    streamer: faker.name.findName(),
    stream_title: faker.random.words(),
    category: gameData[randomGameIdx],
    total_views: randomTotalViews,
    watching_now: randomWatchingNow,
  }
  seedData.push(newDummyData)
};

module.exports = seedData
// still need video url, avatar url and game poster url