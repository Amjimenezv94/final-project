import React, { Component } from 'react'
import AgileInnova from '../assets/img/agileInnovaWhite.png';
import Makaia from '../assets/img/makaiaWhite.png';
import '../assets/CSS/footer.css';
import FacebookIcon from '../assets/img/FacebookIcon.png';
import InstagramIcon from '../assets/img/InstagramIcon.png';
import TwitterIcon from '../assets/img/twitter.png';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <div>
        <nav className="contenedor-footer ">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            
          <div className="col-md-4">
              <div className='logos mt-3'>
              <a className="py-2" href="#" aria-label="Product">
                  <img className="mr-5" src={FacebookIcon} width="40" height="36" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="mr-5" src={InstagramIcon} width="40" height="40" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="" src={TwitterIcon} width="40" height="40" fill="none" stroke="currentColor" />
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div>
              <p className="text-white text-center mt-3 mr-5">&copy; {(new Date().getFullYear())} | Academia Geek.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className='logos'>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="mr-3" src={AgileInnova} width="110" height="60" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="" src={Makaia} width="200" height="60" fill="none" stroke="currentColor" />
                </a>
              </div>
            </div>

          </div>
        </nav>
      </div>


    );
  }
}

export default Footer;

