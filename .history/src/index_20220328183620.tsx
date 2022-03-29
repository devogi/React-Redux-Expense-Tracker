import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import "antd/dist/antd.css";
import { createStore } from 'redux';
import rootReducer from './store';


const store = createStore(rootReducer, app)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
