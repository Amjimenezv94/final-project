import React, { Component } from 'react';
import logoWhite from '../assets/img/logoWhite.png';
import '../assets/CSS/navbar.css'
import AcercaDeNosotros from './AcercaDeNosotros';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <nav className="site-header sticky-top py-1 ">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <a className="py-2" href="#" aria-label="Product">
                            <img src={logoWhite} className="" width="200" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </a>
                        <ul className="text-white ">
                            <a className="text-inicio navegacion py-2 p-3 d-none d-md-inline-block" href="#">Inicio</a>
                            {/* <a className="text-inicio navegacion py-2 p-3 d-none d-md-inline-block" href="#">Acerca de Nosotros</a> */}
                            <a className="text-inicio navegacion py-2 p-3 d-none d-md-inline-block" href="#">Test</a>
                            <a className="text-inicio navegacion py-2 p-3 d-none d-md-inline-block" href="#">Instituciones</a>
                            <a className="text-inicio navegacion py-2 p-3 d-none d-md-inline-block" href="#">Contacto</a>
                        </ul>
                    </div>
                </nav>
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