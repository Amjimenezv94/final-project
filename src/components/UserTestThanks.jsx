import React, { Component } from 'react';

class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="contenedor-orientacion position-relative  py-5 text-left text-white">
        <div className="col-md-5 pb-3 mt-5 pt-5 ">
          <h1 className="title-orietacion pl-4 font-weight-normal"> HAS CONCLUIDO CON ÉXITO </h1>
          <p className="parrafo-orientacion lead font-weight-normal pb-2"></p>
        </div>
      </div >

    );
  }
}

export default Thanks;