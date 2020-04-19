import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../assets/CSS/userTest.css'


class UserTextImg extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <div className="my-5 text-center">
               <h1 className="titulo-imagenes py-5 text-light"> TEST DE IMÁGENES </h1>
               <p className="parrafo-imagenes lead px-5 mx-5 text-justify text-light text-center" > A continuación te solicitaremos que selecciones una imagen y despues da un click en siguiente.<br></br>
               Después haber realizado el click en siguiente no te podras devolver.</p>
            </div>
            <div className="row imagen-test justify-content-center pl-5">
               <div className="imagen-test col-lg-3 mr-3 mb-5 text-center ">
                  <input className="img-user-test" id="ciencias-salud" type='image' src="https://img.freepik.com/vector-gratis/equipo-medicos-enfermeras_23-2148497394.jpg?size=338&ext=jpg" width="160" height="160" />
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                        <button
                           className="text-center btn btn-outline-light  "
                           onClick={() => this.props.sumarPuntos('salud')}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>
               <div className="imagen-test col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="ingenierias" type='image' src="https://i1.wp.com/www.keyexecutives.co/wp-content/uploads/2017/01/ICONO-de-coaching.png?ssl=1" width="160" height="160" />
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                        <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('ingenieria')}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>


               <div className="imagen-test col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="economia" type='image' src="https://labs.emprendeverde.es/wp-content/uploads/2019/09/repuebla-en-verde_icono_ondo-blanco.png" width="160" height="160" />
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                        <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('economia')}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>
               <div className="imagen-test col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="ciencias-sociales" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160" />
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                        <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('cienciasSociales')}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>

               <div className="imagen-test col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="artes" type='image' src="https://image.freepik.com/vector-gratis/conjunto-composiciones-redondas-artes_1284-17359.jpg" width="160" height="160" />
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                        <button className="text-center btn btn-outline-light" onClick={() => this.props.sumarPuntos('artes')}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>

               <div className="imagen-test col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="ciencias-naturales" type='image' src="https://image.freepik.com/vector-gratis/concepto-astronomia-iconos-dibujos-animados-ciencia-retro_1284-7503.jpg" width="160" height="160" />
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                        <button className="text-center btn btn-outline-light" onClick={() => this.props.sumarPuntos('cienciasNaturales')}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

UserTextImg.propTypes = {
   sumarPuntos: PropTypes.func
}

export default UserTextImg;