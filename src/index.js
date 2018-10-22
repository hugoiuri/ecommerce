import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/index.css';
import ItemListPage from './pages/ItemListPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ItemListPage />, document.getElementById('root'));

serviceWorker.unregister();
