import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase'
import '../assets/CSS/login.css'

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
         <div className=" container-footer justify-content-center mt-0">
             {
                 user ?
                 <p  className=" textB text-center text-light aling-items-left mr-1 "> Hola, <strong>{user.displayName}</strong>!</p>
                 
                  : <p className="textA text-center text-light aling-items-left mr-1 "> Porfavor, Logueate</p>

              }
              {
                  user ? <button className ="buttonso btn btn-outline-light btn-lg aling-items-center justify-content-center ml-5 "  onClick={signOut}>Sing out</button>
                       : <button className ="buttonsi btn btn-outline-light btn-lg aling-items-center justify-content-center "  onClick={signInWithGoogle}>Ingresa con Google</button>
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

