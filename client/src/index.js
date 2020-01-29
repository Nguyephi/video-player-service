import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

ReactDOM.render(<App streamerId={window.location.search.slice(1)} />, document.getElementById('app'));
