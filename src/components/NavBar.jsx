import React, { Component } from 'react';
import logoWhite from '../assets/img/logoWhite.png';
import '../assets/CSS/navbar.css'
import AcercaDeNosotros from './AcercaDeNosotros';
import HomePage from '../pages/homePage.jsx'
import ResultTest from '../pages/ResultTest.jsx'
import EduMod from '../pages/EduMod.jsx'
import Contact from '../pages/Contact.jsx'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <div className="container ">
                    <div className="container ">

                        <ul class="nav mb-3 p-2 justify-content-center" id="pills-tab" role="tablist">

                            <a className="py-2 mr-5 ml-4" href="#" aria-label="Product">
                                <img src={logoWhite} className="" width="200" height="43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </a>
                            <li class="nav-item ml-5 py-2 " >
                                <a class="nav-link  active text-light" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <p>Inicio</p></a>
                            </li>
                            <li class="nav-item py-2" >
                                <a class="nav-link text-light" id="pills-profesiones-tab" data-toggle="pill" href="#pills-profesiones" role="tab" aria-controls="pills-profesiones" aria-selected="false" id="profesiones"> <p>Profesiones</p></a>
                            </li>
                            <li class="nav-item py-2" >
                                <a class="nav-link   text-light" id="pills-modalidad-tab" data-toggle="pill" href="#pills-modalidad" role="tab" aria-controls="pills-modalidad" aria-selected="true"> <p>Modalidades</p></a>
                            </li>
                            <li class="nav-item py-2" >
                                <a class="nav-link   text-light" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="true"> <p>Contacto</p></a>
                            </li>


                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><HomePage /></div>
                            <div className="tab-pane fade" id="pills-profesiones" role="tabpanel" aria-labelledby="pills-profesiones-tab"><ResultTest /></div>
                            <div className="tab-pane fade " id="pills-modalidad" role="tabpanel" aria-labelledby="pills-modalidad-tab"><EduMod /></div>
                            <div className="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><Contact/></div>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}



{/* <li className="nav-item">
<a className="nav-link" href="#inicio">Inicio</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#informacion">Acerca de Nosotros</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#portafolio">Test</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#habilidades">Instituciones</a>
</li> 
<li className="nav-item">
<a className="nav-link" href="#habilidades">Instituciones</a>
</li> 
</ul> */}



export default NavBar;