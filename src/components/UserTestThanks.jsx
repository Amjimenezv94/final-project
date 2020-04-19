import React, { Component } from 'react';
import '../assets/CSS/userTest.css'

class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="contenedor-orientacion position-relative  py-5 text-left text-white">
        <div className="contenedor-o col-md-5 pb-3 mt-5 pt-5 ">
          <h1 className="title-orietacion pl-4 font-weight-normal"> HAS CONCLUIDO CON ÉXITO </h1>
          <p className="parrafo-imagenes lead font-weight-normal pb-2">Da clic en siguiente para conocer tu resultado.</p>
        </div>
      </div >

    );
  }
}

export default Thanks;