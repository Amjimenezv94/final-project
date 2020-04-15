import React, { Component } from 'react';
import UserTextImg from '../components/UserTextImg';
import '../assets/CSS/userTest.css'

class UserTest extends Component {

    render() {
        return (
           
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h1 className="display-4"> TEST DE IMÁGENES </h1>
                            <p className="lead px-5 mx-5 text-justify" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quasi deserunt. Optio, odit dolores laudantium ullam deleniti expedita, velit aut deserunt illo molestias, delectus hic accusamus error! Ut, molestiae porro.</p>
                        </div>

                        <UserTextImg />

                        <div className="col-lg-12 text-center">
                            <button className="px-4 mx-5">Atrás</button>
                            <button>Siguiente</button>
                        </div>
                    </div>
                </div>
    

        );
    }
}

export default UserTest;