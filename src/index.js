import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'


//Master
ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    
    <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

