import React from 'react';

const TopBar = ({streamerAvi, streamerName}) => (
    <div id='top-bar'>
      <img id='streamer-avatar' src={streamerAvi} alt={`no img for ${streamerName}`} />
      <p id='streamer-name' className='cursor'>{streamerName}</p>
    </div>
);

export default TopBar;