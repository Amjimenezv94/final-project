import React, { Component } from 'react'
import firebase from 'initialize/firebase'

class LoginAlternativo extends Component {
constructor(props){
    super(props);
    this.login=this.login.bind(this);
}
login(){
    let provider= new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().singInWithPopup(provider).then(result=>{
        console.log(result);
    })
 }


    render() { 
        return ( 
            <div>
                <button onClick={this.Login}>

                  Login  
                    
                </button>
            </div>
         );
    }
}
 
export default LoginAlternativo;