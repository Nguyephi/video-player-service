import React from 'react';

const MuteButton = ({toggleMute, handleVolume, volume}) => (
  <>
    {volume < 0.01 &&
    <button
        className='no-outline control-button'
        type="button"
        onClick={(e) => toggleMute(e)}
      >
        <div id='svg-container'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mute tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path d="M5 7l4.146-4.146a.5.5 0 01.854.353v13.586a.5.5 0 01-.854.353L5 13H2V7h3zM12 8.414L13.414 7l1.623 1.623L16.66 7l1.414 1.414-1.623 1.623 1.623 1.623-1.414 1.414-1.623-1.623-1.623 1.623L12 11.66l1.623-1.623L12 8.414z"/></g></svg>
        </div>
      </button>
    }
    {volume >= 0.01 && volume <= .5 &&
      <button
        className='no-outline control-button'
        type="button"
        onClick={(e) => toggleMute(e)}
      >
        <div id='svg-container'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mute tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path d="M5 7l4.146-4.146a.5.5 0 01.854.353v13.586a.5.5 0 01-.854.353L5 13H4a2 2 0 01-2-2V9a2 2 0 012-2h1zM14 10a2 2 0 00-2-2v4a2 2 0 002-2z"/></g></svg>
        </div>
      </button>
    }
    {volume > 0.5 && volume <= 1 &&
      <button
        className='no-outline control-button'
        type="button"
        onClick={(e) => toggleMute(e)}
      >
      <div id='svg-container'>
        <svg xmlns="http://www.w3.org/2000/svg" class="mute tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path d="M9.146 2.853L5 7H4a2 2 0 00-2 2v2a2 2 0 002 2h1l4.146 4.146a.5.5 0 00.854-.353V3.207a.5.5 0 00-.854-.353zM12 8a2 2 0 110 4V8z"/><path d="M12 6a4 4 0 010 8v2a6 6 0 000-12v2z"/></g></svg>
      </div>
      </button>
    }
    <input type="range" step="0.01" min="0" max="1" className="volume-range" value={volume} onChange={(e) => handleVolume(e)}></input>
  </>
);

export default MuteButton;
