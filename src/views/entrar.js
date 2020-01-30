//import signIn from '../view-controler/view-controller.js'

export default ()=> {

    const entrar=
`<div class="login-container">
    <div class="item-login">
    <form id="form">
    <p>¡Inicia sesion en tu cuenta de EDUlarity</p>
    </div>
    <div class="item-login">
    <input id="emaillogin" type="text" class="form-login--user" placeholder="Email">
    </div>
    <div class="item-login">
    <input id="passlogin" type="password" class="form-login--user" placeholder="Contraseña">
    </div>
    <div class="item-login">
    <input type="submit" id="btn-ingresa" value="Iniciar sesion" class="form-login--submit">
    </div>
    <p class="item-login">ingresa con...</p>
  <div id="item-login">
  <a id="google"><img src="images/googleCircle.png" class="pequeña"></a>
  <a id="facebook"><img src="images/iconFacebook.png" class="pequeña"></a>
  </div>
  <p class="item-login">No tienes cuenta aún? <a href="#/crearcuenta">CREAR CUENTA</a></p>
  </div>
  </form>`

    const divElem = document.createElement('div')
    divElem.innerHTML = entrar;

    //const btn = divElem.querySelector('#btn-ingresa');
    //btn.addEventListener('click',signIn);

    return divElem;
  }
