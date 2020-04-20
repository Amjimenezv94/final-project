import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardResultTest from '../components/CardResultTest.jsx';
import artes from '../assets/img/artes.jpg';
import Humanidades from '../assets/img/Humanidades.jpg';
import Ingenierias from '../assets/img/Ingenierias.jpg';
import Economia from '../assets/img/Economia.jpg';
import Medicina from '../assets/img/Medicina.jpg';
import Biologia from '../assets/img/Biologia.jpg';
import '../assets/CSS/CardResultTest.css';

class ResultTest extends Component{
    constructor(props) {
        super(props);
    }

    displayComponent = (contador) => {
        let className = 'col-md-6 p-3';

        if (this.props.seleccion !== contador) {
            className += ' d-none';
        };

        return className;
    }
    render() {
              
        var local = localStorage.getItem("Nombre");
       
       // var local =JSON.stringify(localStorage.getItem("Nombre"));
        return (
        
            
            <div className="container-fluid py-5 d-flex justify-content-center mx-3"> 

                <div className="row ">
                    <div className="contenerdor-result-uno col-md-12 mt-5 text-center text-light">
                        <h1 className="titulo-result"> RAMAS Ó CAMPOS LABORALES </h1>
                        <br/>
                        <p id="Resultado" className="parrafo-resultado text-center justify-content-center"> <strong>{local}</strong> parece que tienes habilidades marcadas en esta rama del conocimiento, te invitamos a explorar sus opciones en la siguiente card </p>       
                    
                    </div>

                   
                    <div className={this.displayComponent('cienciasNaturales')} className="card">
                        <CardResultTest imgsrc={Biologia} title='CIENCIAS NATURALES' description=' Inmerso en este mundo se encuentran aquellos quienes están en capacidad de enfrentar retos en investigación científica y tecnológica y contribuyen al desarrollo de la industria por medio de su conocimiento sobre el mundo natural.' 
                        askyourselftitle='PREGÚNTATE:' askyourself='¿Eres bueno en razonamiento lógico? 
                        ¿Te interesa conocer cómo funciona el mundo natural y universal y las leyes que lo rigen?
                        ¿Te gusta el trabajo en laboratorios y a experimentación científica?'
                        item1='Biologia'item2='Física ó Quimica'item3='Geología'
                        item4='Matemáticas'item5='Estadística'  />
                        
                    </div>
                    <div className={this.displayComponent('artes')}>
                        <CardResultTest imgsrc={artes} title='ARTES' description='Si te gusta la creación escénica y el teatro, la expresión corporal o artística de diferentes formas, en las Bellas Artes podrás encontrar tu lugar y explotar tu potencial, donde podrás contribuir y enriquecer la cultura. 
                        ¿Te gusta experimentar con tu creatividad para llevar a cabo nuevas obras de arte?  ¿Tienes una alta curiosidad intelectual e iniciativa? ¿Crees que la práctica hace al maestro? ¿Posees alta sencibilidad y atención al detalle? ¿Tienes capacidad para apreciación estética? ¿Posees habilidad y destreza manual?' 
                        item1='Artes plásticas'item2='Visuales y afines'item3='Artes representativas'
                        item4='Música'item5='Diseño' />
                    </div>
                    <div className={this.displayComponent('cienciasSociales')}>
                        <CardResultTest imgsrc={Humanidades} title='CIENCIAS SOCIALES Y HUMANAS' description='Si te sueles apropiar de aquellos conocimientos de los campos de las ciencias sociales y humanas que posibilitan una comprensión e interpretación de contextos y problemáticas de individuos, grupos, social y culturalmente diversos, aquí te estamos esperando.

                        Pregúntate: ¿Sueles tener una mirada crítica sobre los diferentes aspectos de la sociedad?  ¿Te gusta leer y escribir?  ¿Te gustan trabar al aire libre?'
                         item1='Relaciones internacionales'item2='comunicación social y periodismo'item3='deportes y recreación'
                         item4='Trabajo social'item5='Psicologia'/>
                    </div>
                    <div className={this.displayComponent('ingenieria')}>
                        <CardResultTest imgsrc={Ingenierias} title='INGENIERÍAS' description=' Aquí encontramos a aquellos innovadores con competencias en el análisis, diseño, desarrollo, administración y gestión de sistemas para el procesamiento de información, que contribuyan a la generación de soluciones que aporten a la realización de las necesidades de su entorno y de los requerimientos de las organizaciones donde se desenvuelvan.
                        ¿Eres bueno desarrollando más de una estrategia para llegar a la solución de un problema? ¿Sueles usar los conocimientos previos que tienes para utilizarlos en nuevas situaciones? ¿Te sientes cómodo usando diferentes herramientas informáticas?' 
                        item1='Ingenieria Agroindustrial 'item2='Ingeniería de sistemas'item3='Ingeniería biomédica'
                        item4='Ingeniería civil y Aquitectura'item5='Ingenieria de minas'/>
                    </div>
                    <div className={this.displayComponent('economia')}>
                        <CardResultTest imgsrc={Economia} title='ECONOMÍA' description=' Conocer como se mueve el mundo en un sentido económico no es fácil, requieres grandes habilidades de razonamiento lógico y comprensión lectora, la investigación constante y la búsqueda de nuevos y mejores métodos para optimizar la rentabilidad de la producción, si quieres ser parte de este mundo, esta área es para ti.' 
                         askyourselftitle='PREGÚNTATE LO SIGUIENTE:' askyourself='Haz una revision interna de tus gustos y disgusto, y con base en ellos, responde ¿Eres bueno en razonamiento lógico y comprensión lectora? ¿ Eres un buen lector? ¿Te gustan los ambientes de trabajo tipo oficina?  ¿Eres bueno para el emprendimiento?'
                        item1='Economía'item2='Administración de empresas'item3='Contaduria pública'
                        item4='Gerencia de proyectos'item5='Entre otras' />
                    </div>
                    <div className={this.displayComponent('salud')}>
                        <CardResultTest imgsrc={Medicina} title='CIENCIAS DE LA SALUD' description='Desde esta área podrás intervenir en el proceso de la salud-enfermedad en los ámbitos individuales, familiares y de comunidad, desde la niñez hasta la vejez. Te encontrarás constantemente en capacitación y aprendizaje, siempre al servicio del bien común.'
                        askyourselftitle='PREGÚNTATE LO SIGUIENTE:' askyourself=' ¿Te gustan las diferentes disciplinas que trabajan para intervenir en el proceso de la salud-enfermedad del ser humano?  ¿Eres bueno tomando decisiones rápidas bajo presión? y por ultimo, pero no menos importante ¿Te gusta ayudar a los demás, aunque a veces las personas no sean amables contigo?'
                        item1='Medicina'item2='Nutrició y dietética'item3='Odontología'
                        item4='Enfermería'item5='Bacteriología' />
                    </div>
                </div>
            </div>);
    }
}

ResultTest.propTypes = {
    seleccion: PropTypes.string
}

export default ResultTest;