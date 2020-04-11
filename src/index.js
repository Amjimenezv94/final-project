import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ResultTest from './pages/ResultTest.jsx'


ReactDOM.render(
  <React.StrictMode>
    <ResultTest />
  </React.StrictMode>,
  document.getElementById('root')
);

