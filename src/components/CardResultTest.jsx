import React, { Component } from 'react';
import '../assets/CSS/CardResultTest.css'

const Card = props =>{
    return(
        <div className="card text-center shadow ">
            <div className="overflow">
              <img src={props.imgsrc} alt=" Carreras administrativas" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
             <h4 className="card-tittle">{props.title}</h4>
            <p className="card-text text-secondary">
                {props.description}
            </p>
            <h5 className="card-tittle">ALGUNOS EJEMPLOS</h5>
                 <ul className="ml-5">
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                    <li>{props.item4}</li>
                    <li>{props.item5}</li>
                </ul>
            
            <a href="#" className="btn btn-outline-success">¿Donde? ¿Como? </a>
            
            
            </div>
        </div>
    );
}

export default Card;