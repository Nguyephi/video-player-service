import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App streamerId={window.location.search.slice(1)} />, document.getElementById('video-player-service'));
