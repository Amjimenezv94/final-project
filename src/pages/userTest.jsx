import React, { Component } from 'react';
import UserTextImg from '../components/UserTextImg';
import '../assets/CSS/userTest.css'
import UserTextImg2 from '../components/UserTextImg2';
import UserTextImg3 from '../components/UserTextImg3';
import UserTextImg4 from '../components/UserTextImg4';
import UserTextImg5 from '../components/UserTextImg5';
import UserTextImg6 from '../components/UserTextImg6';
import UserTextThanks from '../components/UserTestThanks.jsx';
import ResultTest from './ResultTest.jsx'

class userTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paso: 0,
            salud: 0,
            ingenieria: 0,
            economia: 0,
            cienciasSociales: 0,
            artes: 0,
            cienciasNaturales: 0,
        };
    }

    displayComponent = (paso) => {
        if (this.state.paso !== paso){
            return 'd-none' ;  
        };
    }

    sumarPuntos = (categoria) => {
        this.setState({
            [categoria]: this.state[categoria] + 1 //es dinámico y pasa como props al child
        });
    }

    ganador = () => {
        const selecciones = {  // guardar y iniciar un variable nuevo para guardar los puntos que acumulamos ---- objeto js
            salud: this.state.salud, //salud: key .salud valor
            ingenieria: this.state.ingenieria,
            economia: this.state.economia,
            cienciasSociales: this.state.cienciasSociales,
            artes: this.state.artes,
            cienciasNaturales: this.state.cienciasNaturales
        };

        const seleccionesSorted = Object.keys(selecciones).reduce((a, b) => selecciones[a] > selecciones[b] ? a : b);

        return seleccionesSorted;
    }

    buttonClassName = () => {
        let className = 'col-lg-12 text-center pb-4';

        if (this.state.paso === 7) {
            className += ' d-none';
        }

        return className;
    }
 
    incrementarPaso = () => {
        this.setState({
            paso: this.state.paso +1,
        });
    }

    render() {
        return (
                <div className="panel py-3 panel-default container">
                    <div className="panel-body mt-5">
                        <div className={this.displayComponent(0)}>
                            <UserTextImg sumarPuntos={this.sumarPuntos} />
                        </div>

                        <div className={this.displayComponent(1)}>
                            <UserTextImg2 sumarPuntos={this.sumarPuntos}/>
                        </div>

                        <div className={this.displayComponent(2)}>
                            <UserTextImg3 sumarPuntos={this.sumarPuntos}/>
                        </div>

                        <div className={this.displayComponent(3)}>
                            <UserTextImg4 sumarPuntos={this.sumarPuntos}/>
                        </div>

                        <div className={this.displayComponent(4)}>
                            <UserTextImg5 sumarPuntos={this.sumarPuntos}/>
                        </div>

                        <div className={this.displayComponent(5)}>
                            <UserTextImg6 sumarPuntos={this.sumarPuntos}/>
                        </div>

                        <div className={this.displayComponent(6)}>
                            <UserTextThanks/>
                        </div>

                        <div className={this.displayComponent(7)}>
                            <ResultTest seleccion={this.ganador()} />
                        </div>



                        <div className={this.buttonClassName()}>
                            <button
                                id="buttonresult" className="boton-user-test btn btn-outline-light"
                                onClick={this.incrementarPaso}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
    

        );
    }
}

export default userTest;