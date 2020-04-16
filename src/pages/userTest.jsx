import React, { Component } from 'react';
import UserTextImg from '../components/UserTextImg';
import '../assets/CSS/userTest.css'

class UserTest extends Component {

    render() {
        return (
           
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-4 text-light"> TEST DE IMÁGENES </h1>
                            <p className="lead px-5 mx-5 text-justify text-light" > Selecciona 1 imagen y dale click en siguiente.</p>
                        </div>

                        <UserTextImg />

                        <div className="col-lg-12 text-center pb-3">
                            <button className="boton-user-test btn btn-outline-light  px-4 mx-5">Atrás</button>
                            <button className="boton-user-test btn btn-outline-light  ">Siguiente</button>
                        </div>
                    </div>
                </div>
    

        );
    }
}

export default UserTest;