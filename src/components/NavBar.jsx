import React, { Component } from 'react';
import logoWhite from '../assets/img/logoWhite.png';
import '../assets/CSS/navbar.css';
import AcercaDeNosotros from './AcercaDeNosotros';
import HomePage from '../pages/homePage.jsx';
import ResultTest from '../pages/ResultTest.jsx';
import EduMod from '../pages/EduMod.jsx';
import Contact from '../pages/Contact.jsx';
import UserTest from '../pages/UserTest.jsx'
import Explorar from './Explorar.jsx'


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var local = localStorage.getItem("Nombre");
        return (

            <div>
                <div className="container ">
                    <div className="container ">

                        <ul class="barra-navegacion nav fixed-top justify-content-center p-2" id="pills-tab" role="tablist">

                            <a className="py-2 mr-5 ml-4 float-left  " href="#" aria-label="Product">
                                <img src={logoWhite} className="" width="200" height="43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </a>
                            <li className="nav-item  py-2 mt-2 mr-4 ml-5" >
                                <a className="navegacion active text-light " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <p>Inicio</p></a>
                            </li>
                            <li className="nav-item  py-2 mt-2 mr-4 ml-5" >
                                <a className="navegacion active text-light " id="pills-nosotros-tab" data-toggle="pill" href="#pills-nosotros" role="tab" aria-controls="pills-nosotros" aria-selected="true"> <p>Nosotros</p></a>
                            </li>
                            <li className="nav-item py-2 mt-2 mr-4" >
                                <a className="navegacion text-light" id="pills-test-tab" data-toggle="pill" href="#pills-test" role="tab" aria-controls="pills-test" aria-selected="true"> <p>Orientame</p></a>
                            </li>
                            <li className="nav-item py-2 mt-2 mr-4" >
                                <a className="navegacion text-light disabled" id="pills-profesiones-tab" data-toggle="pill" href="#pills-profesiones" role="tab" aria-controls="pills-profesiones" aria-selected="true" id="profesiones" > <p>Resultado</p></a>
                            </li>
                            <li className="nav-item py-2 mt-2 mr-4" >
                                <a className="navegacion   text-light" id="pills-explorar-tab" data-toggle="pill" href="#pills-explorar" role="tab" aria-controls="pills-explorar" aria-selected="true"> <p>Explorar</p></a>
                            </li>
                            <li className="nav-item py-2 mt-2 mr-4" >
                                <a className="navegacion  text-light" id="pills-modalidad-tab" data-toggle="pill" href="#pills-modalidad" role="tab" aria-controls="pills-modalidad" aria-selected="true"> <p>Modalidades</p></a>
                            </li>
                            <li className="nav-item py-2 mt-2 mr-4" >
                                <a className="navegacion   text-light" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="true"> <p>Contacto</p></a>
                            </li>
                           


                        </ul>
                        
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><HomePage /></div>
                            <div className="tab-pane fade " id="pills-nosotros" role="tabpanel" aria-labelledby="pills-nosotros-tab"><AcercaDeNosotros /></div>
                            <div className="tab-pane fade" id="pills-test" role="tabpanel" aria-labelledby="pills-test-tab"><UserTest/></div>
                            <div className="tab-pane fade" id="pills-profesiones" role="tabpanel" aria-labelledby="pills-profesiones-tab"><ResultTest /></div>
                            <div className="tab-pane fade" id="pills-explorar" role="tabpanel" aria-labelledby="pills-explorar-tab"><Explorar /></div>
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