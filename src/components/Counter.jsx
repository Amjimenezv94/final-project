import React, { Component} from 'react';

class Counter extends Component{

    constructor(props){

super(props);
    
this.state={
medicina:0,
};

this.state={
    ingenieria:0,
    };
}


sumar = ()=>{ 
    this.setState(
        {
         medicina: this.state.medicina++,
         
                
        }
    ); { console.log(this.props.medicina) }
}; 

 sumaring = ()=>{ 
    this.setState(
        {
         ingenieria: this.state.ingenieria+1,
         
                
        }
    ); { console.log(this.props.ingenieria) }
};



render(){

    return(
           
<div className="container">
    <div className="columns is-centered">
            
            <div className="box has-text-centered">
            <button className="button is-primary"onClick={this.sumar}>sumar</button>{'      '}
            
            </div>
            <p className="title is-1 has-text-centered">{this.state.medicina}</p>
            
    </div>

    <div className="columns is-centered">
            
            <div className="box has-text-centered">
            <button className="button is-primary"onClick={this.sumaring}>seleccionar</button>{'      '}
            
            </div>
            <p className="title is-1 has-text-centered">{this.state.ingenieria}</p>
            
    </div>



</div>
    );
}
}
export default Counter