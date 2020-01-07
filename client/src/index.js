import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';                                                                                                                                                    
import App from './components/app';
import {store} from './config/store';
import {socketStream} from './config/socketStream';
// import inputs from './config/inputs';

ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('tetris'))

socketStream();
// inputs();