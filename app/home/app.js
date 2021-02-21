document.addEventListener("DOMContentLoaded",  function(e){ 
  
  // testing 1,2,3...
  //$fcg.acercade(); $fca.acercade(); $apu.acercade();
  console.log(`DOMContentLoaded, onLine=${navigator.onLine}`);
  
  $apu.setappname('laAplicacion')

  // inicialización pantallas
  $apu.selecciona('tabImagenes','apu-tab'); 
  $apu.selecciona('onLine','tab-onoff');
   
  $apu.selecciona('panLogin','apu-pantalla')
  
  // asociacion de eventos
  $apu.addclick('botGoogle', () => { $apu.loginGoogle() } );
  $apu.addclick('botMicrosoft', () => { $apu.loginMicrosoft() } );

  $apu.addclick('botImagenes', () => { $apu.selecciona('tabImagenes','apu-tab')} );
  $apu.addclick('botDerechos', () => { $apu.selecciona('tabDerechos','apu-tab')} );
  $apu.addclick('botFicha', () => { $apu.selecciona('tabFicha','apu-tab')} );
  $apu.addclick('botMenu', () => { $apu.selecciona('tabMenu','apu-tab')} );
  $apu.addclick('offLineReintentar', () => { $apu.reload(false) } );
  $apu.addclick('botMenuLogout',   () => { $apu.logout() } );
  $apu.addclick('botLog', muestraLog );
  $apu.addclick('muestraLog', muestraLog );
  $apu.addclick('muestraWait', muestraWait );

  // inicialización controles varios...
  document.getElementById("hiapu").innerText=$apu.protocolserver();
  document.getElementById("horabrowser").innerText=$fcg.dt2momentum( new Date() )  ;
  //document.getElementById("horaservidor").innerText=$apu.api(); $apu.apigen()
  
  $apu.loginInit(
      hazLogin, hazLogout,
      'f7d9d4ca-f66c-42b9-9181-27fb33a155f4', // Microsoft 
      '852697990724-65ooqt5uba0fvfgjolr7qirjldhcn3ip' ); //Google
  
  $apu.registraServiceWork();

});

/* **********************************************************************************
            FUNCIONES PROPIAS DE APLICACION
********************************************************************************** */
async function hazLogin(eltoken)
{ 

  // si todo ok, mostramos menu principal
  $apu.settext('txtUserName', $apu.sesion().name);
  $apu.settext('txtUserEmail', $apu.sesion().userid);
  $apu.setimage('imgUserPicture', $apu.sesion().picture);
  $apu.selecciona('tabFicha','apu-tab');
  $apu.selecciona('panPrincipal','apu-pantalla');
}
 
function hazLogout()
{
  $apu.selecciona('panLogin','apu-pantalla')
  $apu.selecciona('tabFicha', 'apu-tab')
}


/* **********************************************************************************
            LOGS
********************************************************************************** */
window.onload = function () {
  console.log('WINDOW.load')
}

window.onunload = function() {
  console.log('WINDOW.UNload')
}

/* **********************************************************************************
            LOGS
********************************************************************************** */
let __mylog = 'myLog:\n';
function loggerCallback(logLevel, message, containsPii) {
  logger(message)
}

function logger(message)
{ 
  console.log(message);
  __mylog+='\n'+message;
}

function muestraLog()
{
  $apu.showmodal("Registro MSAL", __mylog);
}

function muestraWait()
{
  // esto es una muestra de cómo puede jugarse con el diálogo wait con waitshow, waittxt, waithide
  // opcionalmente se puede usar título y texto (para que no use título o texto, pasar undefined)
  let segundos=10;
  //$apu.waitshow('Espera',`Quedan ${segundos} segundos`);
  $apu.waitshow();

  // esta función simula un proceso que tiene varios pasos y actualiza el texto del "espera..."
  function actualizawait() {
    segundos--;
    if (!segundos) {
      $apu.waithide();
    }
    else {
      setTimeout(actualizawait, 1000);
      //$apu.waittxt(`Quedan ${segundos} segundos`);
    }
  }
  
  setTimeout(actualizawait, 1000);
}