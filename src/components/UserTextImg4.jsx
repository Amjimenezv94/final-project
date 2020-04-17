import React, { Component } from 'react'
import '../assets/CSS/userTest.css'

class UserTextImg4 extends Component {
  constructor(props) {

     super(props);

     this.state = {
        salud: 0,
        ingenieria: 0,
        economia: 0,
        cienciasSociales: 0,
        artes: 0,
        cienciasNaturales: 0,
     };
  }

  sumarSalud = () => {
     this.setState({
        salud: this.state.salud + 1
     });
     console.log(this.state.salud)
  };

  sumaringenieria = () => {
     this.setState({
        ingenieria: this.state.ingenieria + 1
     });
      console.log(this.state.ingenieria)
  };

  sumareconomia = () => {
     this.setState(
        {
           economia: this.state.economia + 1,
        });
        console.log(this.state.economia) 
  };

  sumarcienciasSociales = () => {
     this.setState(
        {
           cienciasSociales: this.state.cienciasSociales + 1,
        }); 
        console.log(this.state.cienciasSociales)
  };

  sumarartes = () => {
     this.setState(
        {
           artes: this.state.artes + 1,
        }
     ); { console.log(this.state.artes) }
  };

  sumarcienciasNaturales = () => {
     this.setState(
        {
           cienciasNaturales: this.state.cienciasNaturales + 1,
        }
     ); { console.log(this.state.cienciasNaturales) }
  };

  render() {
     return (
        <div>
           <div className="my-5 text-center">
              <h1 className=" py-5 text-light"> TEST DE IMÁGENES </h1>
              <p className="lead px-5 mx-5 text-justify text-light text-center" > Selecciona 1 imagen y dale click en siguiente.</p>
           </div>
           <div className="row justify-content-center pl-5">
              <div className="col-lg-3 mr-3 mb-5 text-center ">
                 <input className="img-user-test" id="ciencias-salud" type='image' src="https://www.pyrasesores.es/cms/wp-content/uploads/2019/07/Se-puede-descontar-en-n%C3%B3mina-los-retrasos-al-fichar.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumarSalud}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ingenierias" type='image' src="https://ambienteeingenieria.com/wp-content/uploads/2020/02/Ambiente-e-ingenieri%CC%81a-iconos-web-09.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumaringenieria}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>


              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="economia" type='image' src="https://image.flaticon.com/icons/png/512/196/196173.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumareconomia}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ciencias-sociales" type='image' src="https://politicas.ceibal.edu.uy/themes/ceibal/assets/images/icono-politica.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumarcienciasSociales}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>

              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="artes" type='image' src="https://image.freepik.com/vector-gratis/mascaras-teatro-sobre-fondo_98292-6042.jpg" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light" onClick={this.sumarartes}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>

              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ciencias-naturales" type='image' src="https://image.freepik.com/vector-gratis/concepto-diseno-isometrico-nanotecnologia-ilustra-cuaderno-microscopia-informacion-cientifica-pantalla-gran-imagen-modelo-adn_1284-33315.jpg" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light" onClick={this.sumarcienciasNaturales}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     );
  }
}

export default UserTextImg4;