import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Database from './service/database.js';

const firebase = new Database();

ReactDOM.render(
  <React.StrictMode>
    <App firebase={firebase} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
