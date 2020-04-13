import React, { Component } from 'react'


class AcercaDeNosotros extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <div className="position-relative overflow-hidden p-1 text-left text-white">
        <div className="col-md-5 p-lg-4 my-5 ml-4">
          <h1 className="title-orientacion display-5 font-weight-normal"> Sobre Nosotros</h1>
          <p className="parrafo-orientacion lead font-weight-normal">
            
            Somos un grupo de estudiantes de <strong> Académia Geek </strong>, que entusiasmadas por aprender a programar nos unimos y elaboramos este sitio para ustedes, este proyecto está aún en construcción y poco a poco irá creciendo conforme mejoremos nuestras habilidades.

            Para nosotras el haber estudiado <strong>Desarrollo Front-End</strong> en <strong>Académia Geek</strong> fue un reto, yaque es un Bootcamp muy intensivo, en donde aprendemos habilidades desde el SER hasta lo TÉCNICO.
          </p>
          <div className="container">
          </div>
        </div>
      </div >

    );
  }
}

export default AcercaDeNosotros;