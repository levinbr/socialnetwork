import * as ServiceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import MainApp from './App';

    ReactDom.render(<MainApp />, document.getElementById('root'));

    ServiceWorker.unregister();

