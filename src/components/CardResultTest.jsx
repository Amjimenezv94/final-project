import React, { Component } from 'react';
import '../assets/CSS/CardResultTest.css'

const Card = props =>{
    return(
        <div className="card text-center shadow m-3">
            <div className="overflow">
              <img src={props.imgsrc} alt=" Carreras administrativas" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
             <h4 className="card-tittle">{props.title}</h4>
            <p className="card-text text-secondary ">
                {props.description}
            </p>
            <h6> {props.askyourselftitle}</h6>   
             <p  className="card-text text-secondary"> {props.askyourself}</p>   
            <h5 className="card-tittle">CARRERAS AFINES</h5>
                 <ul className="">
                    <li className="ml-5 text-left" >{props.item1}</li>
                    <li className="ml-5 text-left">{props.item2}</li>
                    <li className="ml-5 text-left">{props.item3}</li>
                    <li className="ml-5 text-left">{props.item4}</li>
                    <li className="ml-5 text-left">{props.item5}</li>
                </ul>
             
            
            <a href="#" className="btn btn-outline-dark">¿Donde? ¿Como? </a>
            
            
            </div>
        </div>
    );
}

export default Card;