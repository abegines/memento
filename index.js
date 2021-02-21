startmeUp();


// función de arranque de servicio
async function startmeUp() {
  console.log('---------------------------------------------------------------------------------------------------');
  console.log(`${new Date().toISOString()} INICIANDO aplicación...`)
  const express = require('express');
  const bodyParser = require('body-parser'); 
  const fs = require('fs');
  
  //const appPORT = process.env['APUHTTP'] || 3080;
  const appPORTs = process.env['APUHTTPS'] || 3443;
  const encKey = process.env['APUKEY'] || './selfsigned.key';
  const encCert = process.env['APUCERT'] || './selfsigned.cert';
  const encKeyPass = process.env['APUKEYPASS'] || 'weakpass';
  
  const  app = express();

  //var http = require('http');
  //var httpServer = http.createServer(app);

  console.log(`HTTPS: Usando certificado/clave: ${encCert} / ${encKey}`);

  // openssl req -x509 -newkey rsa:4096 -keyout selfsigned.key -out selfsigned.cert -days 10000
  const privateKey  = fs.readFileSync( encKey, 'utf8');
  const certificate = fs.readFileSync( encCert, 'utf8');
  const credentials = { key: privateKey, cert: certificate, passphrase: encKeyPass };
  const https = require('https');
  const httpsServer = https.createServer(credentials, app);

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  // PARA QUE EL SERVER PUEDA USAR...
  require('./app/fca/fca.js');                          // inicializa $fca
  $fca.acercade();
  require('./apu/fcg/fcg.js');                          // inicializa $fcg
  $fcg.acercade();
  require('./apu/apuslib/apuslib.js')                   // inicializa $apus
  $apus.acercade();

  // Obtiene los kid/pem de verificación jwt
  // PARA PUBLICAR LAS APIS...
  require('./apu/apigen/apigen.js').setapp(app); // inicializa la /apiapp
  require('./app/api/appapi.js').setapp(app);    // inicializa la /apigen

  // PARA QUE EL BROWSER PUEDA DESCARGAR...
  app.get('/', function (req, res) { res.redirect('/app.html') }); // redirigir a la app por defecto
  app.use('/appimg',       express.static('app/home/appimg', { maxAge: 36000000 }));   // carpeta /appimg de la app
  app.use('/',       express.static('app/home'));   // carpeta / de la app
  app.use('/fca',    express.static('app/fca'));    // para que pueda descargar $fca
  app.use('/fcg',    express.static('apu/fcg'));    // para que pueda descargar $fcg
  app.use('/apulib', express.static('apu/apulib')); // para que pueda usar $apu
  app.use('/css',    express.static('apu/asset/css'));   // para que pueda usar recursos css comunes
  app.use('/img',    express.static('apu/asset/img',{ maxAge: 36000000 }));   // para que pueda usar recursos img comunes
  app.use('/fonts',  express.static('apu/asset/fonts')); // para que pueda usar recursos fonts comunes
  app.use('/js',     express.static('apu/asset/js'));    // para que pueda usar recursos js comunes

  // ============================================================================
  // INICIO DE SERVIDORES HTTP/HTTPS
  // ============================================================================
/*  httpServer.listen(appPORT, function () {
    console.log(`APU HTTP server running on port ${appPORT}!`);
  })*/

  httpsServer.listen(appPORTs, function () {
    console.log(`APU HTTPs server running on port ${appPORTs}!`);
  });
}

