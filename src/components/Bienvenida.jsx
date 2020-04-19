import React, { Component } from 'react';
import '../assets/CSS/bienvenida.css'
import Login from './Login.jsx'


class Bienvenida extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
             
        };
    }
    
       
       // var local =JSON.stringify(localStorage.getItem("Nombre")
    openTab = () => {
        console.log('hello world');
        document.getElementById('profesiones').click(); 
    };

    
    render() {
        return (

            <div className="contenedor-orientacion position-relative  py-5 text-left text-white">
                <div className="col-md-5 pb-3 mt-5 pt-5">
                    <h1 className="title-orientacion font-weight-normal"> ORIENTACIÓN VOCACIONAL </h1>
                    <p className="parrafo-orientacion lead font-weight-normal pb-2">Ofrecémos un test vocacional, el cual te brindará unas bases para orientarte en tu perfil y puedas tener más claro que perfil se ajusta a ti y dónde puedes estudiar.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                           
                            <input type="text" class="input-bienvenida form-control" id="inputP" placeholder="Escribenos tu nombre..."></input>
                            </div>
                            <a className="boton-bienvenida btn btn-outline-light btn-lg mb-5" onClick={this.openTab}>ORIENTAME</a>

                        </div>
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div >

        );
    }
}

export default Bienvenida;

