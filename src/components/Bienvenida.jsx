import React, { Component } from 'react';
import '../assets/CSS/bienvenida.css'

class Bienvenida extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="position-relative overflow-hidden p-1 text-left text-white">
                <div className="col-md-6 p-lg-5 my-5">
                    <h1  className="title-orientacion display-5 font-weight-normal"> ORIENTACIÓN VOCACIONAL </h1>
                    <p className="parrafo-orientacion lead font-weight-normal">Ofrecemos un recurso con el fin de orientar a aquellos que deseen comenzar su educación superior , como también información de Universidades y Académias.</p>
                    <a className="btn btn-outline-light btn-lg float-right mr-4" href="#">ORIENTAME</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

        );
    }
}

export default Bienvenida;

