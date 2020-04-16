import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar';
import Bienvenida from '../src/components/Bienvenida';
import Footer from '../src/components/Footer';
import ResultTest from './pages/ResultTest.jsx'

//Master
ReactDOM.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

