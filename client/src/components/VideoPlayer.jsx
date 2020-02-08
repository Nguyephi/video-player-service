import React from 'react';
import PlayPauseButton from './PlayPauseButton.jsx'
import MuteButton from './MuteButton.jsx'
// there are two file types when using videos on browser. MP4 and WEBM is widely used across most if not all browsers. So its good to have both file types for your video tag in the event the browser can't load one. If both cannot load you can include a text to display (similar to the alt attribute for img tags).

// In creating the video tag, in order to get it to autoplay I couldn't get it to work with just autoplay. It worked when I changed it to autoplay='autoplay'. But one thing to note is that React is warning me about autoplay not being camel-cased and recognized (iif it is camel-cased). Also Chrome requires you to mute the video in order to autoplay (but I think its muted by default now)
class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paused: false,
            volume: 0,
            tempVolume: 1
        }
    }

    togglePlayPause(e) {
        const video = document.getElementById("video-player");
        if (this.state.paused == true) {
            this.setState({
                paused: false
            }, () => {
                video.play();
            });
        } else {
            this.setState({
                paused: true
            }, () => {
                video.pause();
            });
        }
    }

    handleVolume(e) {
        const video = document.getElementById("video-player");
        this.setState({
            volume: e.target.value,
            tempVolume: e.target.value
        }, () => {
            video.volume = this.state.volume
        })

        if (e.target.value > 0){
            video.muted = false
        } else if (e.target.value < 0.01) {
            video.muted = true
        }
    }

    toggleMute(e) {
        const video = document.getElementById("video-player");
        if (this.state.volume > 0) {
            this.setState({
                volume: 0
            }, () => {
                video.muted = true
            });
        } else if (this.state.volume < 0.01) {
            this.setState({
                volume: this.state.tempVolume
            }, () => {
                if (this.state.volume > 0) {
                    video.muted = false
                }
            })
        }
    }

    render() {
        if (this.props.videoUrl) {
                return (
                    <figure id='video-player-container' className='no-outline'>
                            <video id='video-player' className='no-outline' preload='metadata' autoPlay='autoplay' muted>
                                <source src={this.props.videoUrl} type="video/mp4" />
                            </video>
                            <div id="video-controls" className="controls">
                                <PlayPauseButton togglePlayPause={this.togglePlayPause.bind(this)} paused={this.state.paused} />
                                <MuteButton
                                toggleMute={this.toggleMute.bind(this)}
                                handleVolume={this.handleVolume.bind(this)}
                                volume={this.state.volume}
                                />
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
