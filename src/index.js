import React from 'react';
import ReactDOM from 'react-dom';
import Capitalism from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/index.css';


injectTapEventPlugin();
ReactDOM.render(<Capitalism />, document.getElementById('root'));
registerServiceWorker();
