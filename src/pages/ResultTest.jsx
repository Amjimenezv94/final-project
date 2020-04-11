import React, { Component } from 'react'
import CardResultTest from '../components/CardResultTest.jsx'
import Administrativas from '../assets/img/Administrativas.jpg';
import artes from '../assets/img/artes.jpg';
import Humanidades from '../assets/img/Humanidades.jpg';
import Ingenierias from '../assets/img/Ingenierias.jpg';
import Juridico from '../assets/img/Juridico.jpg';
import Medicina from '../assets/img/Medicina.jpg';

class ResultTest extends Component {

    render() {
        return (



            <div className="container-fluid d-flex justify-content-center mx-3"> 

                <div className="row ">
                    <div className="col-md-12 text-center">
                        <h1> RAMAS Ó CAMPOS LABORALES </h1>
                    </div>
                    <div className="col-md-4 p-5">
                        <CardResultTest imgsrc={Administrativas} title='ADMINISTRATIVAS' description=' xxxx' 
                        item1='Carrera que puede encontrar'item2='Carrera que puede encontrar'item3='Carrera que puede encontrar'
                        item4='Carrera que puede encontrar'item5='Carrera que puede encontrar' />
                    </div>
                    <div className="col-md-4 p-5">
                        <CardResultTest imgsrc={artes} title='ARTES' description=' xxxx' 
                        item1='Carrera que puede encontrar'item2='Carrera que puede encontrar'item3='Carrera que puede encontrar'
                        item4='Carrera que puede encontrar'item5='Carrera que puede encontrar' />
                    </div>
                    <div className="col-md-4 p-5">
                        <CardResultTest imgsrc={Humanidades} title='HUMANIDADES' description=' xxxx'
                         item1='Carrera que puede encontrar'item2='Carrera que puede encontrar'item3='Carrera que puede encontrar'
                         item4='Carrera que puede encontrar'item5='Carrera que puede encontrar'/>
                    </div>
                    <div className="col-md-4 p-5">
                        <CardResultTest imgsrc={Ingenierias} title='INGENIERÍAS' description=' xxxx' 
                        item1='Carrera que puede encontrar'item2='Carrera que puede encontrar'item3='Carrera que puede encontrar'
                        item4='Carrera que puede encontrar'item5='Carrera que puede encontrar'/>
                    </div>
                    <div className="col-md-4 p-5">
                        <CardResultTest imgsrc={Juridico} title='JURÍDICA' description=' xxxx' 
                        item1='Carrera que puede encontrar'item2='Carrera que puede encontrar'item3='Carrera que puede encontrar'
                        item4='Carrera que puede encontrar'item5='Carrera que puede encontrar' />
                    </div>
                    <div className="col-md-4 p-5">
                        <CardResultTest imgsrc={Medicina} title='SALUD' description=' xxxx'
                        item1='Carrera que puede encontrar'item2='Carrera que puede encontrar'item3='Carrera que puede encontrar'
                        item4='Carrera que puede encontrar'item5='Carrera que puede encontrar' />
                    </div>

                </div>
            </div>);
    }
}

export default ResultTest;