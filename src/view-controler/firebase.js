export  default (email, password)=> {
   const signUpWithEmailAndPassword = 
  firebase.auth().createUserWithEmailAndPassword(email, password);
//const signUpWithEmailAndPassword  =(email, password)=>{

//firebase.auth().createUserWithEmailAndPassword(email, password).
//catch(function(error){
//(email, password)
//const signUpWithEmailAndPassword =

  //var errorCode = error.code;
//var errorMessage = error.message;
//alert(errorMessage);

//});
//}
}
//firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  //var errorMessage = error.message;
  // ...
//});
