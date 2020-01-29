
import {signUpWithEmailAndPassword} from '../view-controler/firebase.js'
import viewentrar from  '../views/crearcuenta.js'

export default (evt)=> {

 const signUpWithEmailAndPass =
 evt.preventDefault();
 const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  const inputName = document.getElementById('name').value;
 //const email = document.getElementById('email').value;
 //const password = document.getElementById('password').value;
//const inputName = document.getElementById('name').value;

signUpWithEmailAndPassword(email, password)
    //.then(cred => {
      //return firebase.firestore().collection('users').doc(cred.user.uid).set({
      //  name: inputName
    //  });
    //})


  //alert(password,+email);

}
