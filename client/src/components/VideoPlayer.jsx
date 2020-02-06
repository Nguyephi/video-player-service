import React from 'react';

// there are two file types when using videos on browser. MP4 and WEBM is widely used across most if not all browsers. So its good to have both file types for your video tag in the event the browser can't load one. If both cannot load you can include a text to display (similar to the alt attribute for img tags).

// In creating the video tag, in order to get it to autoplay I couldn't get it to work with just autoplay. It worked when I changed it to autoplay='autoplay'. But one thing to note is that React is warning me about autoplay not being camel-cased and recognized (iif it is camel-cased). Also Chrome requires you to mute the video in order to autoplay (but I think its muted by default now)
class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paused: false
        }
    }

    play(e) {
        const video = document.getElementById("video-player");
        const playPause = document.getElementById("play-pause");

        // this.setState({
        //   paused: !this.state.paused
        // });

        if (this.state.paused == true) {
          video.play();
          this.setState({
            paused: false
          });
        } else {
          video.pause();
          this.setState({
            paused: true
          });
        }
      }

    render() {
        if (this.props.videoUrl) {
                return (
                    <figure id='video-player-container' className='no-outline'>
                            <video id='video-player' className='no-outline' preload='metadata' autoplay='autoplay' muted>
                                <source src={this.props.videoUrl} type="video/mp4" />
                            </video>
                            <div id="video-controls" className="controls">
                                <button
                                className={this.state.paused ?'no-outline control-button' : 'hide'}
                                type="button"
                                onClick={(e) => this.play(e)}
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
                                className={this.state.paused ?'hide' : 'no-outline control-button'}
                                type="button"
                                onClick={(e) => this.play(e)}
                                >
                                    <div id='svg-container'>
                                    <svg
                                    id="play-pause"
                                    xmlns="http://www.w3.org/2000/svg" class="tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"/></g></svg>

                                    </div>
                                </button>
                            </div>
                    </figure>
                )
            } else {
            return (
                <div>Loading</div>
            )
        }
    }
}

export default VideoPlayer;
