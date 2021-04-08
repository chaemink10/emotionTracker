import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Database from './service/database.js';
import AuthService from './service/login.js';

const firebase = new Database();
const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App firebase={firebase} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
