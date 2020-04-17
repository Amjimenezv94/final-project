import React, {Component} from 'react'
import '../assets/CSS/userTest.css'


class UserTextImg extends Component {
   constructor(props){

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
      
      sumarSalud = ()=>{ 
         this.setState({
            salud: this.state.salud + 1
         });
         console.log(this.state.salud)
      }; 
      
       sumaringenieria = ()=>{ 
          this.setState(
              {
               ingenieria: this.state.ingenieria+1,
               
                      
              }
          ); { console.log(this.props.ingenieria) }
      };

      sumareconomia = ()=>{ 
         this.setState(
             {
              economia: this.state.economia+1,
              
                     
             }
         ); { console.log(this.props.economia) }
     };

     sumarcienciasSociales = ()=>{ 
      this.setState(
          {
           cienciasSociales: this.state.cienciasSociales+1,
           
                  
          }
      ); { console.log(this.props.cienciasSociales) }
  };


  sumarartes = ()=>{ 
   this.setState(
       {
        artes: this.state.artes+1,
        
               
       }
   ); { console.log(this.props.artes) }
};

sumarcienciasNaturales = ()=>{ 
   this.setState(
       {
        cienciasNaturales: this.state.cienciasNaturales+1,
        
               
       }
   ); { console.log(this.props.cienciasNaturales) }
};
      
      
   
   render() { 
      return ( 
         <div className="row justify-content-center  pl-5">
               <div className="col-lg-3 mr-3 mb-5 text-center ">
                  <input className="img-user-test" id="ciencias-salud" type='image'  src="https://loremflickr.com/316/240" width="160" height="160"/>
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                     <button className="text-center btn btn-outline-light  " onClick={this.sumarSalud}>¿Te identificas?</button>
                     </div>
                  </div>
                  
                  
               </div>
               <div className="col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id= "ingenierias" type='image' src="https://loremflickr.com/360/240" width="160" height="160"/>
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                     <button className="text-center btn btn-outline-light  " onClick={this.sumaringenieria}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>


               <div className="col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="economia" type='image' src="https://loremflickr.com/320/240" width="160" height="160"/>
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                     <button className="text-center btn btn-outline-light  " onClick={this.sumareconomia}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="ciencias-sociales" type='image' src="https://loremflickr.com/350/240" width="160" height="160"/> 
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                     <button className="text-center btn btn-outline-light  " onClick={this.sumarcienciasSociales}>¿Te identificas?</button>
                     </div>
                  </div>
              </div>

               <div className="col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="artes" type='image' src="https://loremflickr.com/310/240" width="160" height="160"/> 
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                     <button className="text-center btn btn-outline-light" onClick={this.sumarartes}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>

               <div className="col-lg-3 mr-3 mb-5 text-center">
                  <input className="img-user-test" id="ciencias-naturales" type='image' src="https://loremflickr.com/305/240" width="160" height="160"/> 
                  <div className="row text-center">
                     <div className="col-md-12 justify-content-center">
                     <button className="text-center btn btn-outline-light" onClick={this.sumarcienciasNaturales}>¿Te identificas?</button>
                     </div>
                  </div>
               </div>
          </div>
   
       );
   }
}
 
export default UserTextImg;