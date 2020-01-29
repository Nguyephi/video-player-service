import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

ReactDOM.render(<App streamerId={Number(window.location.search.slice(1))} />, document.getElementById('app'));