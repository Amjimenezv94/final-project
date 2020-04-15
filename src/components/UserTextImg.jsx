import React, { Component } from 'react'

class UserTextImg extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <div className="row justify-content-center  pl-5">
         <div className="col-lg-3 mr-3 mb-5 text-center ">
             <input className="img-user-test" id="ciencias-salud" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160"/>
         </div>
         <div className="col-lg-3 mr-3 mb-5 text-center">
             <input className="img-user-test" id= "ingenierias" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160"/>
         </div>
         <div className="col-lg-3 mr-3 mb-5 text-center">
             <input className="img-user-test" id="economia" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160"/>
         </div>
         <div className="col-lg-3 mr-3 mb-5 text-center">
            <input className="img-user-test" id="ciencias-sociales" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160"/> 
         </div>
         <div className="col-lg-3 mr-3 mb-5 text-center">
            <input className="img-user-test" id="artes" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160"/> 
         </div>
         <div className="col-lg-3 mr-3 mb-5 text-center">
            <input className="img-user-test" id="ciencias-naturales" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="160" height="160"/> 
         </div>
      </div>
   
       );
   }
}
 
export default UserTextImg;

