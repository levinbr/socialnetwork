import * as ServiceWorker from './serviceWorker';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import MainApp from './App';

    ReactDom.render(<MainApp />, document.getElementById('root'));

    ServiceWorker.unregister();

