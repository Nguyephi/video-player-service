import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      streamerId: 3
    }
  }

  componentDidMount() {
    const streamerId = this.props.streamerId || this.state.streamerId
    fetch('/api/livestream/' + streamerId)
    .then(res => res.json())
    .then(data => {
      this.setState({
        streamer: data[0]
      })
    })
  }

  render() {
    console.log(this.state.streamer)
    return <h1>Hello, {this.props.streamerId}</h1>;
  }
};

export default App;