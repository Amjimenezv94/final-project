import React, { Component } from 'react';
import logoWhite from '../assets/img/logoWhite.png';
import '../assets/CSS/navbar.css'
import AcercaDeNosotros from './AcercaDeNosotros';
import HomePage from '../pages/homePage.jsx'
import ResultTest from '../pages/ResultTest.jsx'
import EduMod from '../pages/EduMod.jsx'

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
                       
                        <ul class="nav nav-pills  mb-3 p-2 justify-content-center" id="pills-tab" role="tablist">
                            <li>
                            <a className="py-2" href="#" aria-label="Product">
                                <img src={logoWhite} className="" width="200" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link  px-5 active text-light" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <h3>Inicio</h3></a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link px-5 text-light" id="pills-profesiones-tab" data-toggle="pill" href="#pills-profesiones" role="tab" aria-controls="pills-profesiones" aria-selected="false" id="profesiones"> <h3>Profesiones</h3></a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link  px-5  text-light" id="pills-modalidad-tab" data-toggle="pill" href="#pills-modalidad" role="tab" aria-controls="pills-modalidad" aria-selected="true"> <h3>Modalidades</h3></a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link  px-5  text-light" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <h3>Contacto</h3></a>
                            </li>


                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><HomePage /></div>
                            <div class="tab-pane fade" id="pills-profesiones" role="tabpanel" aria-labelledby="pills-profesiones-tab"><ResultTest /></div>
                            <div class="tab-pane fade " id="pills-modalidad" role="tabpanel" aria-labelledby="pills-modalidad-tab"><EduMod /></div>

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