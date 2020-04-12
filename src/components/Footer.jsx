import React, { Component } from 'react'
import AgileInnova from '../assets/img/agileInnovaWhite.png';
import Makaia from '../assets/img/makaiaWhite.png';
import '../assets/CSS/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons';


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
              <div className='logos'>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="mr-3" src={AgileInnova} width="110" height="60" fill="none" stroke="currentColor" />
                </a>
                <a className="py-2" href="#" aria-label="Product">
                  <img className="" src={Makaia} width="200" height="60" fill="none" stroke="currentColor" />
                </a>
              </div>
            </div>


            <div className='col-md-4'>
              <div>
              <p className="text-white text-center mt-3">&copy; {(new Date().getFullYear())} | Academia Geek.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className='logos'>
                <a className="py-2" href="#" aria-label="Product">
                  <FontAwesomeIcon icon={faCoffee} />
                  
                </a>
                <a className="py-2" href="#" aria-label="Product">
                  <i class="fab fa-facebook-square"></i> 
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

