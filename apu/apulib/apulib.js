/* **************************************************************************
 $apu
 Funciones GENÉRICAS disponibles para el CLIENTE APU
************************************************************************** */

(function() {

  
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  var _apu = {};

  _apu.VERSION = '0.1';

  _apu.acercade = function() {
    console.log(`Hola, desde las profundidades de $apu, version  ${_apu.VERSION}`);
  }

  let _protocol = undefined; //p.ej. "https"
  _apu.protocol = function() {
    return _protocol || (_protocol = window.location.href.split(':')[0]);
  }

  let _server = undefined; //p.ej. "miservidor:3000"
  _apu.server = function() {
    return _server || (_server = window.location.href.split('/')[2]);
  }

  let _protocolserver = undefined; // p.ej. "https://miservidor:3000"
  _apu.protocolserver = function() {
    return _protocolserver || (_protocolserver = this.protocol() + '://' + this.server());
  }

  _apu.selecciona = function (elid, clase)
  {
      var i;
      var x = document.getElementsByClassName(clase);
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      if (elid!='') document.getElementById(elid).style.display = "block";
  } 
  
  _apu.addclick = function (elid, funcion)
  {
    document.getElementById(elid).addEventListener("click",  funcion);
  }

  _apu.copy2clipboard = function(elid)
  {
    const elem = document.getElementById(elid);

    navigator.clipboard.writeText(elem.innerText).then(()=>{})

  }

  _apu.showmodal = function(tit, txt)
  {
    $apu.settext('titmodal',tit)
    $apu.settext('txtmodal',txt)
    document.getElementById('apuDialog').style.display= tit || txt ? 'block' : 'none';
  }

  _apu.waitshow = function(tit,txt)
  {
    
    $apu.settext('titwait',tit) 
    document.getElementById('titwait').style.display=tit?'block':'none';
    
    $apu.settext('txtwait',txt)
    document.getElementById('txtwait').style.display=txt?'block':'none';

    document.getElementById('apuWait').style.display='block'
  }

  _apu.waittxt = function(txt)
  {
    $apu.settext('txtwait',txt)
    document.getElementById('txtwait').style.display=txt?'block':'none';
  }

  _apu.waithide = function(tit, txt)
  {
    document.getElementById('apuWait').style.display='none'
  }

  _apu.settext = function (elid, texto) {
    document.getElementById(elid).innerText=texto;
  }

  _apu.setimage = function (elid, src) {
    document.getElementById(elid).src = src || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  }

  _apu.addclass = function (elid, clase) {
    document.getElementById(elid).classList.add(clase);
  }

  _apu.delclass = function (elid, clase) {
    document.getElementById(elid).classList.remove(clase);
  }

  _apu.chgclass = function (elid, oldclase, newclase) {
    document.getElementById(elid).classList.replace(oldclase, newclase); 
  }


  _apu.postapi = async function (fun, body) {
    let respuesta = await fetch(this.protocolserver() + fun, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    let data = await respuesta.json();
    return data;
  }

  /* ******************************************************************************************************
          L O G I N    y    L O G O U T
  ****************************************************************************************************** */
  let __appname;
  let __funHazLogin;
  let __funHazLogout;
  let __msclientid;
  let __goclientid;
  let __msalInstance;
  let __GoogleAuth;
  const __loginMicrosoftRequest = {     scopes: ["user.read"] ,     prompt: 'select_account' }  
  const __loginGoogleRequest = {     scopes: ["user.read"] ,     prompt: 'select_account'   };
 
  let __sesion; //  sesionid , userid, name, picture, mmtCreacion
  _apu.sesion = function () {      return __sesion;   }
  
  _apu.setappname = function(an)
  {
    __appname=an;
  }

  function _loginSesionGuarda(donde) 
  {
    try {
      console.log('guardando sesión...', __sesion)
      donde.setItem('apu.sesion.'+__appname, JSON.stringify(__sesion));
    }
    catch (e) {
      console.error('loginGuardaSesion...', e)
    }
  }

  function _loginSesionRecupera()
  {
    let val = sessionStorage.getItem('apu.sesion.'+__appname) || localStorage.getItem('apu.sesion.'+__appname);
    return JSON.parse(val);
  }

  function _loginSesionOlvida()
  {
    __sesion = undefined;
    sessionStorage.removeItem('apu.sesion.'+__appname);
    localStorage.removeItem('apu.sesion.'+__appname);
  }
  
  _apu.logout = function () {
    _loginSesionOlvida();
    __funHazLogout();
  }

  function authRedirectCallBack(resp,err) {
    // do nothing
  }

  _apu.loginInit = async function(flogin, flogout, msclientid, goclientid)
  {
    // recordamos funciones callback específicas de la app 
    __funHazLogin=flogin;
    __funHazLogout=flogout;
    // Microsoft:
    // hay que instanciar un UserAgentApplication y manejador de redirecta callback
    // fix: hace doble carga página, parece que es un problema común en MSAL
    __msclientid= msclientid;
    const __msalConfig = {
      auth:  {   clientId: __msclientid,          authority: "https://login.microsoftonline.com/common"       },
      cache: {  cacheLocation: "sessionStorage",  storeAuthStateInCookie: false    }   };
    __msalInstance = new Msal.UserAgentApplication(__msalConfig);
    __msalInstance.handleRedirectCallback(authRedirectCallBack);
    // en msal.loginRedirect parece que la única forma de enterarnos es esta.. recargándose la página... 2 veces!
    // en toco caso antes vamos a comprobar si podemos recuperar una sesion guardada...
    let sesionguardada = _loginSesionRecupera();
    if (sesionguardada)
    {
      console.log('saved sesion: ', sesionguardada);
      let sesionrenovada =  await $apu.loginRenew(sesionguardada);
      if (sesionrenovada) {
        console.log('sesion renovada: ' , __sesion);
        __funHazLogin();
      }
      else {
        _loginSesionOlvida();
      }
    } 
    else if (__msalInstance.getAccount() && !__msalInstance.isCallback(window.location.hash)) {
      await( $apu.loginJwt (sessionStorage.getItem('msal.idtoken')));
      __funHazLogin();
    }    

    // Google:
    // no necesita nada aquí... se inicializa y hace login en una única función
    // sólo recordamos el clientid
    __goclientid = goclientid;
  }

  _apu.loginMicrosoft = function()
  {
    __msalInstance.loginRedirect(__loginMicrosoftRequest);
  }
   
  _apu.loginGoogle = function()
  {
    // aquí inicializamos y hacemos login de una vez...
    if (!__GoogleAuth) {
      gapi.load('auth2', function() {
        gapi.auth2.init({
          'clientId': __goclientid
          })
        .then(function () {
          __GoogleAuth = gapi.auth2.getAuthInstance();
          __GoogleAuth.isSignedIn.listen(async (isSignedIn) => {
            if (isSignedIn) {
              user = __GoogleAuth.currentUser.get()
              const eltoken = user.getAuthResponse().id_token;
              __GoogleAuth.disconnect(); // o debería ser signOut???
              await ( $apu.loginJwt (eltoken) );
              __funHazLogin();
            }
          })
          // la primera vez por aquí..
          if (__GoogleAuth.isSignedIn.get()) __GoogleAuth.signOut();
          __GoogleAuth.signIn( __loginGoogleRequest );
        })
      });   
    }
    else {
      // las siguientes por aquí...
      if (__GoogleAuth.isSignedIn.get()) __GoogleAuth.signOut();
      __GoogleAuth.signIn( __loginGoogleRequest );
    }
  }
  
   _apu.loginJwt = async function(idtoken)
  {
    let respuesta = await this.postapi('/apigen/loginJwt', { idtoken: idtoken });
    if (respuesta.err) {
      __sesion = undefined;
      return false;
    }
    else {
      __sesion = respuesta;
      _loginSesionGuarda(localStorage);
      return respuesta;
    }
  }

  _apu.loginRenew = async function(sesion)
  {
    let respuesta = await this.postapi('/apigen/loginRenew', { sesionid: sesion.sesionid, mmtCreacion : sesion.mmtCreacion  } );
    if (respuesta.err) {
      __sesion = undefined;
      return false;
    }
    else {
      __sesion = respuesta;
      _loginSesionGuarda(localStorage);
      return respuesta;
    }
  }

  _apu.registraServiceWork = function (pathSWjs)
  {
    let eljs = pathSWjs || '/sw.js';
    if('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register(eljs);
        console.log(`Service Worker registrado ${eljs}`); 
        //registration.update(); 
        //console.log(`Service Worker Updated ${eljs}`); 
      }
      catch (error) {
        console.log('Service Worker registro fallido', error); 
      }
    }
  }

  _apu.reload = function(fetchagain) 
  {
    window.location.reload(fetchagain)
  }

  root.$apu = _apu;
})();
