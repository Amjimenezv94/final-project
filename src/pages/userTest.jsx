import React, { Component } from 'react'

class UserTest extends Component {

    render() {
        return (
           <div>
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">UserTest</h1>
                    <p className="lead px-5 mx-5 text-justify" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum sunt exercitationem, labore incidunt unde eum, officiis placeat sint voluptate aliquam eligendi voluptatem. Dolorum natus iste ipsum non vitae! Possimus!.</p>
                </div>
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
                            
                <br/>
                    <div className="col-lg-12 text-center">
                        <button className="px-4 mx-5">Atrás</button>
                        <button>Siguiente</button>
                    </div>
                </div> 
         

        );
    }
}

export default UserTest;