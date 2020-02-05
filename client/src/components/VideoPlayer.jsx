import React from 'react';

// there are two file types when using videos on browser. MP4 and WEBM is widely used across most if not all browsers. So its good to have both file types for your video tag in the event the browser can't load one. If both cannot load you can include a text to display (similar to the alt attribute for img tags).

// In creating the video tag, in order to get it to autoplay I couldn't get it to work with just autoplay. It worked when I changed it to autoplay='autoplay'. But one thing to note is that React is warning me about autoplay not being camel-cased and recognized (iif it is camel-cased). Also Chrome requires you to mute the video in order to autoplay (but I think its muted by default now)

const VideoPlayer = ({videoUrl}) => (
    <div id='video-player'>
        {videoUrl &&
        <video height='100%' controls autoplay='autoplay' muted>
            <source src={videoUrl} type="video/mp4" />
        </video>
        }
    </div>
);

export default VideoPlayer;