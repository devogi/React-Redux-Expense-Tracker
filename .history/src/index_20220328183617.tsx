import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import "antd/dist/antd.css";
import { createStore } from 'redux';


const store = createStore(ro)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);