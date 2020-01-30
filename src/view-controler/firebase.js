//funcionque me sirve para el observador o ver si alguien ya esta logueado
/*firebase.auth().onAuthStateChanged(function(user) {
if (user) {
 // User is signed in.
 var displayName = user.displayName;
 var email = user.email;
 var emailVerified = user.emailVerified;
 var photoURL = user.photoURL;
 var isAnonymous = user.isAnonymous;
 var uid = user.uid;
 var providerData = user.providerData;
 // ...
} else {
 // User is signed out.
 // ...
}
});*/
//funcion para crear ususario
export  const signUpWithEmailAndPassword= (email, password)=> {
   //const signUpWithEmailAndPassword =
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    var errorCode = error.code;
  var errorMessage = error.message;
  });
}
//funcion para login 
//export  const login= (email, password)=> {
   //const signUpWithEmailAndPassword =
   //firebase.auth().signInWithEmailAndPassword(email, password);
//}
