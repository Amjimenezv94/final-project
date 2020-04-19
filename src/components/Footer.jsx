import React, { Component } from 'react'
import AgileInnova from '../assets/img/agileInnovaWhite.png';
import Makaia from '../assets/img/makaiaWhite.png';
import '../assets/CSS/footer.css';
import FacebookIcon from '../assets/img/FacebookIcon.png';
import InstagramIcon from '../assets/img/InstagramIcon.png';
import TwitterIcon from '../assets/img/twitter.png';
import Login from './Login.jsx'


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <footer class="footer">
        <nav className="contenedor-footer ">
          <div className="container d-flex flex-column flex-md-row justify-content-between">

            <div className=" col-md-4">
              <div className='logos mt-3 pl-5'>
                <a className="py-2" href="https://www.facebook.com/orientame.antioquia.7" aria-label="Product">
                  <img className="mr-5" src={FacebookIcon} width="40" height="36" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="https://www.instagram.com/orientar_antioquia/" aria-label="Product">
                  <img className="mr-5" src={InstagramIcon} width="40" height="40" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="https://twitter.com/Orientar7" aria-label="Product">
                  <img className="" src={TwitterIcon} width="40" height="40" fill="none" stroke="currentColor" />
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div>
                
              <Login/>
              
              </div>
            </div>

            <div className="col-md-4">
              <div className='logos-academia'>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="logo-academia-pequeño mr-3" src={AgileInnova} width="110" height="60" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="logo-academia-pequeño" src={Makaia} width="200" height="60" fill="none" stroke="currentColor" />
                </a>
              </div>
            </div>

          </div>

          <div class="footer-copyright text-center py-0 mt-5 text-light copy">&copy; {(new Date().getFullYear())} | Academia Geek.
          </div>
        </nav>
      </footer>


    );
  }
}

export default Footer;

