import React, { Component } from 'react'

class Contact extends Component {

    render() {
        return (
            <div className="position-relative overflow-hidden p-1 text-left text-white">
                <div className="col-md-5 p-lg-4 my-5 ml-4">
                    <h1 className="contacto font-weight-normal text-center"> CONTÁCTANOS </h1>
                    <p className="lead font-weight-normal">
                        Nos encanta apoyarte en tu proceso, si tienes alguna duda o sugerencia puedes hacernos la llegar</p>
                    <form method="POST" action="" className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className=" col-md-6 mb-3">
                                        <label for="firstName">Nombre</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="Nombre/s" required="" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName">Apellido</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Apellidos" required="" />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label for="country">Correo Electrónico</label>
                                        <input type="email" className="form-control" id="email" placeholder=" ejemplo@ejemplo.com"></input>
                                    </div>
                                   
                                    <div className="col-md-6 mb-3">
                                            <label for="country">Pais</label>
                                            <select className="custom-select d-block w-100" id="country" required="">
                                                <option value="">Selecciona...</option>
                                                <option>Colombia</option>
                                                <option>Otro</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                            <label for="municipio">Municipio</label>
                                            <select className="custom-select d-block w-100" id="municipio" required="">
                                                <option value="">Selecciona...</option>
                                                <option>Medellín</option>
                                                <option>Abejorral</option>
                                                <option>Amagá</option>
                                                <option>Amalfi</option>
                                                <option>Andes</option>
                                                <option>Bello</option>
                                                <option>Caldas</option>
                                                <option>Copacabana</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <label for="comments">Comentarios</label>
                                        <input type="text" className="form-control" id="comments" placeholder="PQRS" required=""/>
                                        <div className="invalid-feedback">
                                            Please enter your comments.
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className=" justify-content-center text-center">
                            <a className="btn btn-outline-light text-center" href="">ENVIAR</a>
                        </div>
                        
                    </form>
                </div>
            </div>


        );
    }
}

export default Contact;