import React, { Component } from 'react'
import '../assets/CSS/userTest.css'

class UserTextImg5 extends Component {
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
                 <input className="img-user-test" id="ciencias-salud" type='image' src="https://img.freepik.com/vector-gratis/psicologa-visitante-mujer_74855-4824.jpg?size=626&ext=jpg" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumarSalud}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ingenierias" type='image' src="https://2.bp.blogspot.com/-gxLhsGXRLmg/VucFzhZzkzI/AAAAAAAAETI/XLEdcyat1pw89YML_nW9W8-i1tm5iGGwA/s1600/TKweb_ingenieria_iconos-10.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumaringenieria}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>


              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="economia" type='image' src="https://images.vexels.com/media/users/3/148003/isolated/lists/82a73cab8982e52201c308f582a72e6c-icono-de-retorno-de-inversion.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumareconomia}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>
              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ciencias-sociales" type='image' src="http://clipart.coolclips.com/480/vectors/tf05354/CoolClips_vc100624.png" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light  " onClick={this.sumarcienciasSociales}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>

              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="artes" type='image' src="https://image.freepik.com/vector-gratis/ilustracion-concepto-mas-musica_114360-1263.jpg" width="160" height="160" />
                 <div className="row text-center">
                    <div className="col-md-12 justify-content-center">
                       <button className="text-center btn btn-outline-light" onClick={this.sumarartes}>¿Te identificas?</button>
                    </div>
                 </div>
              </div>

              <div className="col-lg-3 mr-3 mb-5 text-center">
                 <input className="img-user-test" id="ciencias-naturales" type='image' src="https://image.freepik.com/vector-gratis/conjunto-personajes-cientificos_88100-266.jpg" width="160" height="160" />
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

export default UserTextImg5;