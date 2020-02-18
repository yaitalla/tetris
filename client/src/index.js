import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import './font/police/space_age.ttf';
import './index.css';

// import inputs from './config/inputs';

ReactDom.render((
        <App/>
), document.getElementById('tetris'))

// socketStream();
// inputs();