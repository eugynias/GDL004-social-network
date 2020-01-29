import crearC from '../view-controler/view-controller.js'

export default ()=> {

  const viewentrar=
  `<div class="container-all">
   <div class="ctn-form">


    <main class="register">
        <form class="formulario">
            <div>
              <p class="titulo-registro">Inicia sesion en tu cuenta de EDUlarity</p>
            </div>

            <div class="input">
              <input class="btn-1" type="text" id="name" required placeholder="Nombre de Perfil">
              <input class="btn-1" id="reg-correo" type="email" placeholder="Correo electrónico" required>
              <input class="btn-1" id="reg-pass" type="password" placeholder="Contraseña" required>
              <p id="error2" class="message-error"></p>
            </div>


            <div class="btn-1">
                <button id="btn-crear-cuenta" class="boton-iniciar">Crear Cuenta</button>
            </div>
        </form>
    </main>
      </div>

    </div>`

 /*`<div class="login-container">
      <div class="item-login">
      <form id="form">
      <p>¡Inicia sesion en tu cuenta de EDUlarity</p>
     </div>
      <div class="item-login">
      <input type="text" id="email" class="form-login--user" placeholder="Email">
      </div>
      <div class="item-login">
      <input type="password" class="form-login--user" placeholder="Contraseña">
      </div>
      <div class="item-login">
      <input type="submit" id="entrar" value="Iniciar sesion" class="form-login--submit">
      </div>
      <p class="item-login">ingresa con...</p>
    <div id="item-login">
    <a id="google"><img src="images/googleCircle.png" class="pequeña"></a>
    <a id="facebook"><img src="images/iconFacebook.png" class="pequeña"></a>
    </div>
    <p class="item-login">No tienes cuenta aún? <a href="#/crearcuenta">CREAR CUENTA</a></p>
    </div>
    </form>`*/

      const divElem = document.createElement('div')
      divElem.innerHTML = viewentrar;
      const btn = divElem.querySelector('#btn-crear-cuenta');
      btn.addEventListener('click',crearC);

      return divElem;
    }
        /*const divElement=document.createElement("div");
        divElement.setAttribute("id", "_container");
          //crear boton para regresar a inicio     no direccionan aun!//
        const div_btn=document.createElement("div");
        div_btn.setAttribute("class","div_btn");
        const btn=document.createElement("input");
        btn.setAttribute("type","submit");
        btn.setAttribute("value","inicio");
        btn.setAttribute("class","inicio_btn");
        const anchor=document.createElement("a");
        anchor.setAttribute("href","#/");
        btn.appendChild(anchor);
        // boton de entrar
        const btn2=document.createElement("input");
         btn2.setAttribute("type","submit");
        btn2.setAttribute("value","entrar");
        btn2.setAttribute("class","entrar_btn");
         const anchor2=document.createElement("a");
        anchor.setAttribute("href","#/entrar");
         btn2.appendChild(anchor2);
        //Input nombre
        const inputTextNom=document.createElement("input");
      inputTextNom.setAttribute("type", "text");
        inputTextNom.setAttribute("placeholder", " Nombre");
        inputTextNom.setAttribute("class", "item-cuenta");
        //Input Email
        const inputEmail=document.createElement("input")
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("placeholder", " Email");
        inputEmail.setAttribute("class", "item-cuenta");
        inputEmail.setAttribute("id", "btn-email");
        //Input Password
        const inputPass=document.createElement("input")
        inputPass.setAttribute("type", "text");
        inputPass.setAttribute("placeholder", "Password");
        inputPass.setAttribute("class", "item-cuenta");
         //Input confirmar Password
         const inputPass_confirm=document.createElement("input")
        inputPass_confirm.setAttribute("type", "text");
         inputPass_confirm.setAttribute("placeholder", " Confirmar Password");
         inputPass_confirm.setAttribute("class", "item-cuenta");

        //Input Boton Aceptar....este debe hacer un evento a la funcion de SignUp

       const inputCrear_cuenta=document.createElement("input")
        inputCrear_cuenta.setAttribute("type", "submit");
        inputCrear_cuenta.setAttribute("value", "crear cuenta");
        inputCrear_cuenta.setAttribute("class", "cuenta_btn");
        inputCrear_cuenta.setAttribute("id", "cuenta_btn");


       divElement.appendChild(div_btn);
        div_btn.appendChild(btn);
        div_btn.appendChild(btn2);
        divElement.appendChild(inputTextNom);
        divElement.appendChild(inputEmail);
       divElement.appendChild(inputPass);
        divElement.appendChild(inputPass_confirm);
        divElement.appendChild(inputCrear_cuenta);

        return divElement;
        }

        const div = document.createElement('div');
        div.innerHTML = "_container";
        const btn =div.getElementById("cuenta_btn");
        btn.addEventListener('click', crearC);


      //return div;



     /*const viewcrearcuenta= `<div class="login-container">
    <div class="brand-login">
    <img src="images/homeschooling.png" class="logo"></div>
    <div class="form-login">
    <input type="text" class="form-login--user" placeholder="Email">
    <input type="password" class="form-login--user" placeholder="Contraseña">
    <input type="submit" value="Ingresar" class="form-login--submit">
    </div>
    </div>
   `
   const divElem = document.createElement('div')
    divElem.innerHTML = viewcrearcuenta;
    retur divElement;*/
