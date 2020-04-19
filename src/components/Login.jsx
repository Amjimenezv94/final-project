import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase'


const firebaseApp =firebase.initializeApp(firebaseConfig);


class Login extends Component {
 

  componentDidUpdate() {
    const { user } = this.props;
    if (user) {
      localStorage.setItem("Nombre", user.displayName);
    }
  }


    render() { 
       const {user,signOut,signInWithGoogle}=this.props;
       
      

       
       return(
         <div className="justify-content-center">
             {
                 user ?
                 <p  className="text-center text-light "> Hola, <strong>{user.displayName}</strong>!</p>
                 
                  : <p className="text-center text-light"> Porfavor, Logueate</p>

              }
              {
                  user ? <button className ="btn btn-outline-light btn-lg aling-items-center"  onClick={signOut}>Sing out</button>
                       : <button className ="btn btn-outline-light btn-lg aling-items-center"  onClick={signInWithGoogle}>Ingresa con Google</button>
              }
              
         </div>  
       ); 
    }
}



const firebaseAppAuth= firebaseApp.auth();

const providers= {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,  
})(Login);

