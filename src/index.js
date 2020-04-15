import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserTest from './pages/userTest.jsx'



ReactDOM.render(
  <React.StrictMode>
    <UserTest />
  </React.StrictMode>,
  document.getElementById('root')
);

