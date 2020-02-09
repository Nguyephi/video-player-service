import React from 'react';
import TopBar from './TopBar.jsx'
import VideoPLayer from './VideoPLayer.jsx'
import StreamDetail from './StreamDetail.jsx'
import '../styles.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      streamerId: 3,
      streamerData: {}
    }
    this.commasWithNumber = this.commasWithNumber.bind(this)
  }

  componentDidMount() {
    const streamerId = this.props.streamerId || this.state.streamerId
    fetch('/api/livestream/' + streamerId)
    .then(res => res.json())
    .then(data => {
      data[0].total_views = this.commasWithNumber(data[0].total_views)
      data[0].watching_now = this.commasWithNumber(data[0].watching_now)
      this.setState({
        streamerId: data[0].id,
        streamerData: data[0]
      })
    })


  }

  commasWithNumber(num) {
    if (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }

  render() {
    console.log('windowY offesert',this.state)
    return (
    <div id='video-player-service-container'>
      {this.state.streamerData &&
        <div>
          <TopBar
          streamerName={this.state.streamerData.streamer} streamerAvi={this.state.streamerData.avatar_url}
          />
          <VideoPLayer videoUrl={this.state.streamerData.video_url} />
          <StreamDetail
            totalViews={this.state.streamerData.total_views}
            watchingNow={this.state.streamerData.watching_now}
            streamTitle={this.state.streamerData.stream_title}
            gamePoster={this.state.streamerData.game_poster_url}
            category={this.state.streamerData.category}
          />
        </div>
      }
    </div>
    )
  }
};

export default App;