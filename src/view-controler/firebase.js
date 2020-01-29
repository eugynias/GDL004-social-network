export  const signUpWithEmailAndPassword= (email, password)=> {
   //const signUpWithEmailAndPassword =
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    var errorCode = error.code;
  var errorMessage = error.message;
  });
}
