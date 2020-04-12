import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EduMod from './pages/EduMod.jsx'

ReactDOM.render(
  <React.StrictMode>
    <EduMod />
  </React.StrictMode>,
  document.getElementById('root')
);

