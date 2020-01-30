
import {signUpWithEmailAndPassword} from '../view-controler/firebase.js'
import viewentrar from  '../views/crearcuenta.js'
import entrar from  '../views/entrar.js'

export const signUpWithEmailAndPass = (evt)=> {

 evt.preventDefault();
 const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  const inputName = document.getElementById('name').value;


signUpWithEmailAndPassword(email, password)
    //.then(cred => {
      //return firebase.firestore().collection('users').doc(cred.user.uid).set({
      //  name: inputName
    //  });
    //})
}
//funcion para signIn mandando llmar la funcion login de firebase.js
//export const signIn = (evt) => {
//  evt.preventDefault();
 //  const form = evt.target.closets('form');

  //const email = document.getElementById('emaillogin').value;
  //const password = document.getElementById('passlogin').value;


  //login(emaillogin, passlogin)
//}
