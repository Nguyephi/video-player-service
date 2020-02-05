const faker = require('faker');

// IMPORTANT: seed data is only good when you have an empty liveStreams table.

const seedData = [];

for (let i = 1; i < 101; i++) {
  const gameData = [
    {
      category: 'Overwatch',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Overwatch-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_overwatch.mp4'
    },
    {
      category: 'Fortnite',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Fortnite-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_fortnite.mp4'
    },
    {
      category: 'League of Legends',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_League+of+Legends-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_leagueoflegend.mp4'
    },
    {
      category: 'Minecraft',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Minecraft-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_minecraft.mp4'
    },
    {
      category: 'Grand Theft Auto V',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Grand+Theft+Auto+V-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_gta5.mp4'
    },
    {
      category: 'Dota 2',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Dota+2-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_dota2.mp4'
    },
    {
      category: 'World of Warcraft',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_World+of+Warcraft-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_wow.mp4'
    },
    {
      category: 'The Elder Scrolls V: Skyrim',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_The+Elder+Scrolls+V_+Skyrim-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_skyrim.mp4'
    },
    {
      category: 'The Witcher 3: Wild Hunt',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_The+Witcher+3_+Wild+Hunt-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_witcher.mp4'
    },
    {
      category: 'Persona 5',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Persona+5-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_persona5.mp4'
    },
    {
      category: 'The Legend of Zelda: Breath of the Wild',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Super+Smash+Bros.+Ultimate-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video-zelda.mp4'
    },
    {
      category: 'Super Smash Bros. Ultimate',
      game_poster_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/poster_Super+Smash+Bros.+Ultimate-85x113.jpg',
      video_url: 'https://fec-luke-video-player.s3.us-east-2.amazonaws.com/video_smash.mp4'
    },
  ];

  const randomGameIdx = Math.floor(Math.random() * gameData.length);

// this is to ensure that the total view is higher than watching now
  const randomTotalViews = Math.floor(Math.random() * (2000000 - 5000)) + 5000;
  const randomWatchingNow = Math.floor(Math.random() * (4500 - 2)) + 2

  let newDummyData = {
    id: i,
    streamer: faker.name.findName(),
    stream_title: faker.random.words(),
    category: gameData[randomGameIdx].category,
    game_poster_url: gameData[randomGameIdx].game_poster_url,
    total_views: randomTotalViews,
    watching_now: randomWatchingNow,
    avatar_url: faker.image.avatar(),
    video_url: gameData[randomGameIdx].video_url
  }
  seedData.push(newDummyData)
};

module.exports = seedData
// still need video url