import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import '../node_modules/@fortawesome/fontawesome-free/css/brands.css';
import "../node_modules/@fortawesome/fontawesome-free/js/brands";
import "../node_modules/@fortawesome/fontawesome-free/js/solid";
import "../node_modules/@fortawesome/fontawesome-free/js/fontawesome";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
