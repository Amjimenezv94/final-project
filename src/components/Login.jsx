import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase'


const firebaseApp =firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() { 
       const {user,signOut,signInWithGoogle}=this.props;
       return(
         <div>
             {
                 user ?
                 <p  className="text-center "> Hola, {user.displayName}, Da click en Orientame !</p>
                  : <p className="text-center "> Porfavor, Logueate</p>

              }
              {
                  user ? <button className ="btn btn-outline-light btn-lg mb-5"   onClick={signOut}>Sing out</button>
                       : <button className ="btn btn-outline-light btn-lg mb-5"  onClick={signInWithGoogle}>Ingresa con Google</button>
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