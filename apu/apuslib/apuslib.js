/* **************************************************************************

 $apus
 Funciones GENÉRICAS disponibles para el SERVIDOR

************************************************************************** */

(async function() {

  const nodeFetch = require('node-fetch'); 
  const jwkToPem  = require('jwk-to-pem'); 
  const jwtlib = require ('jsonwebtoken'); 
  const uuidv4 = require ('uuid/v4'); 
  
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  var _apus = {};

  _apus.VERSION = '0.1';

  _apus.acercade = function() {
    console.log(`Hola, desde las profundidades de $apus, version  ${_apus.VERSION}`);
    console.log(`Ejecutándose en NodeJs versión  ${process.version}`);
  }

  _apus.horaz = function() {
    return new Date().toISOString();
  }

  let _kidpem = {}; 
  
  async function _retrieveKidPem(url) {
    const response = await nodeFetch(url);
    const jwk  = await response.json();
    for (let i=0;i<jwk.keys.length;i++) {
      _kidpem[jwk.keys[i].kid] = jwkToPem(jwk.keys[i]);
    }
    console.log('KID/PEM descargado: ' + url + ' (' + jwk.keys.length + ' keys)');
  };

  _apus.actualizaKidPem = async function () { 
    console.log('KID/PEM descargando...');
    await _retrieveKidPem('https://login.microsoftonline.com/common/discovery/keys'); // Microsoft
    await _retrieveKidPem('https://www.googleapis.com/oauth2/v3/certs'); // Google
    console.log('KID/PEM descargados');
  }

  let _sesiones = {};
  
  _apus.loginJwt = async function(idtoken) {
    try {
      const segmentos = idtoken.split('.');
      let header = JSON.parse(Buffer.from(segmentos[0],'base64').toString('utf-8'));
      let payload = JSON.parse(Buffer.from(segmentos[1],'base64').toString('utf-8'));
      if (!_kidpem[header.kid]) {
        console.log('KID/PEM actualización forzada')
        await this.actualizaKidPem();
      }
      const token = jwtlib.verify(idtoken, _kidpem[header.kid]);
      const sesionid = uuidv4();
      _sesiones[sesionid] = {
        sesionid : sesionid,
        userid: token.preferred_username || token.email,
        name : payload.name,
        picture: payload.picture,
        mmtCreacion : this.horaz()
      }
      console.log(`SESION login: ${sesionid} ${_sesiones[sesionid].userid} ${_sesiones[sesionid].mmtCreacion}`);
      return _sesiones[sesionid];
    }
    catch (err) {
      console.error('loginJwt error:', err.name);
      return { err: true, errmsg: 'error, comprobar origen en servidor' };
    }
  }

  _apus.loginRenew = async function(sesionid,mmtCreacion)
  {
    try {
    if (!_sesiones[sesionid]) {
      console.log(`SESION renew: ${sesionid} no existe`);
      return { err: true, errmsg: 'no existe la sesión'};
    }
    if (_sesiones[sesionid].mmtCreacion!==mmtCreacion) {
      console.log(`SESION renew: ${sesionid} no coincide mmtCreacion`);
      return { err: true, errmsg: 'no existe la sesión'};
    }
    // TODO: comprobar caducidad
    _sesiones[sesionid].mmtRenovacion = this.horaz();
    console.log(`SESION renew: ${sesionid} ${_sesiones[sesionid].userid} ${_sesiones[sesionid].mmtCreacion} ${_sesiones[sesionid].mmtRenovacion}`);
    return _sesiones[sesionid];
    }
    catch (err) {
      console.error('loginRenew error:', err);
      return { err: true, errmsg: 'error, comprobar origen en servidor'};
    }
  }

  _apus.sesionGetUserid = function (sessionid) {
    // devuelve el id de usuario con el que se logó con JWT
    return _sesiones[sessionid].userid;
  }

  let _autorizaciones = {};
  _apus.autorizSetappuser = function (idsesion, appuser) {
    _autorizaciones[idsesion].appuser = appuser;
  }

  _apus.autorizGetappuser = function (idsesion) {
    return _autorizaciones[idsesion].appuser;
  }

  _apus.autorizClearResponsabilidad = function (idsesion) {
    // inicializa las responsabilidades del usuario de idsesion, para añadirlas de nuevo con autorizAddResponsabilidad
    _autorizaciones[idsesion].responsabilidades = [];
  }

  _apus.autorizAddReponsabilidad = function (idsesion, responsabilidad, n1, n2, n3, n4) {
    // añade al array de responsabilidades una más 
    //_autorizaciones[idsesion].responsabilidades.push()
  }

  _apus.autorizaGetResponsabilidad = function(idsesion, responsabilidad, n1, n2, n3, n4) {
    // devuelve si el usuario de esa sesión tenía otorgada esa responsabilidad en ese ámbito (n1,n2,n3,n4)
    return false;
  }

  //module.exports =  _apus;
  root.$apus = _apus
}());



