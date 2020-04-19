import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../assets/CSS/userTest.css'

class UserTextImg4 extends Component {
  constructor(props) {
     super(props);
  }

  render() {
     return (
        <div>
           <div className="my-5 text-center">
              <h1 className="titulo-imagenes py-5 text-light"> TEST DE IMÁGENES </h1>
              <p className="parrafo-imagenes lead px-5 mx-5 text-justify text-light text-center" > Selecciona 1 imagen y dale click en siguiente.</p>
           </div>
           <div className="row imagen-test justify-content-center pl-5">
              <div className="col-lg-3 mr-3 mb-5 text-center ">
                 <input className="img-user-test" id="ciencias-salud" type='image' src="https://www.pyrasesores.es/cms/wp-content/uploads/2019/07/Se-puede-descontar-en-n%C3%B3mina-los-retrasos-al-fichar.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('salud')}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ingenierias" type='image' src="https://ambienteeingenieria.com/wp-content/uploads/2020/02/Ambiente-e-ingenieri%CC%81a-iconos-web-09.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('ingenieria')}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>


              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="economia" type='image' src="https://image.flaticon.com/icons/png/512/196/196173.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('economia')}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ciencias-sociales" type='image' src="https://politicas.ceibal.edu.uy/themes/ceibal/assets/images/icono-politica.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={() => this.props.sumarPuntos('cienciasSociales')}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>

              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="artes" type='image' src="https://image.freepik.com/vector-gratis/mascaras-teatro-sobre-fondo_98292-6042.jpg" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light" onClick={() => this.props.sumarPuntos('artes')}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>

              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ciencias-naturales" type='image' src="https://image.freepik.com/vector-gratis/concepto-diseno-isometrico-nanotecnologia-ilustra-cuaderno-microscopia-informacion-cientifica-pantalla-gran-imagen-modelo-adn_1284-33315.jpg" width="160" height="160" />
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

UserTextImg4.propTypes = {
   sumarPuntos: PropTypes.func
}

export default UserTextImg4;