import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css';
import InitialPage from './pages/InitialPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<InitialPage />, document.getElementById('root'));

serviceWorker.unregister();
