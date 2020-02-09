import React from 'react';

const PlayPauseButton = ({togglePlayPause, paused}) => (
  <>
    <button
      className={paused ?'no-outline control-button' : 'hide'}
      type="button"
      onClick={(e) => togglePlayPause(e)}
    >
      <div id='svg-container'>
        <svg
          id="play-pause"
          xmlns="http://www.w3.org/2000/svg"
          className="no-outline tw-icon__svg"
          width="100%"
          height="100%"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path
              d="M5 17.066V2.934a.5.5 0 01.777-.416L17 10 5.777 17.482A.5.5 0 015 17.066z"
            />
          </g>
        </svg>
      </div>
    </button>
    <button
      className={paused ?'hide' : 'no-outline control-button'}
      type="button"
      onClick={(e) => togglePlayPause(e)}
    >
      <div id='svg-container'>
      <svg
        id="play-pause"
        xmlns="http://www.w3.org/2000/svg"
        className="tw-icon__svg"
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 20 20"
        x="0px"
        y="0px"
      >
        <g>
          <path
            d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"
          />
        </g>
          </svg>

          </div>
      </button>
  </>
)

export default PlayPauseButton;