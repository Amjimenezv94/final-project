import React, { Component } from 'react';
import UserTextImg from '../components/UserTextImg';
import '../assets/CSS/userTest.css'

class UserTest extends Component {

    render() {
        return (
           
                <div className="panel py-3 panel-default container">
                    <div className="panel-body mt-5">
                        <div className="my-5 text-center">
                            <h1 className=" py-5 text-light"> TEST DE IMÁGENES </h1>
                            <p className="lead px-5 mx-5 text-justify text-light" > Selecciona 1 imagen y dale click en siguiente.</p>
                        </div>

                        <UserTextImg />

                        <div className="col-lg-12 text-center pb-4">
                            <button className="boton-user-test btn btn-outline-light  px-4 mx-5">Atrás</button>
                            <button className="boton-user-test btn btn-outline-light  ">Siguiente</button>
                        </div>
                    </div>
                </div>
    

        );
    }
}

export default UserTest;