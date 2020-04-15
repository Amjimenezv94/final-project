import React, { Component } from 'react'

class UserTextImg extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <div class="row justify-content-center  pl-5">
         <div class="col-lg-4 mb-5 text-center ">
             <input id="ciencias-salud" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="140" height="140"/>
         </div>
         <div class="col-lg-4 mb-5 text-center">
             <input id= "ingenierias" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="140" height="140"/>
         </div>
         <div class="col-lg-4 mb-5 text-center">
             <input id="economia" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="140" height="140"/>
         </div>
         <div class="col-lg-4 mb-5 text-center">
            <input id="ciencias-sociales" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="140" height="140"/> 
         </div>
         <div class="col-lg-4 mb-5 text-center">
            <input id="artes" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="140" height="140"/> 
         </div>
         <div class="col-lg-4 mb-5 text-center">
            <input id="ciencias-naturales" type='image' src="https://campusvirtual.crc.edu.co/pluginfile.php/98886/coursecat/description/Paz%20Convivencia.png" width="140" height="140"/> 
         </div>
      </div>
   
       );
   }
}
 
export default UserTextImg;