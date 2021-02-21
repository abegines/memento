// INICIALIZACIÓN DE LA API
// ===============================================================================
function _setExpressApp(app)
{
  // EJEMPLOS
  // ------------------------------------------------------------------------------
  app.get('/apiapp/hi', _hi  ); // ejemplo básico sólo texto
  app.get('/apiapp/time', _time ); // ejemplo básico devuelve JSON
  app.get('/apiapp/caps/:texto', _caps ); // ejemplo básico param URL, devuelve JSON
  
  // GET vs POST???? que norma tomaremos?????????
  app.get('/apiapp/lowers', _lowers); // ejemplo básico GET, devuelve JSON
  app.post('/apiapp/write', _write); // ejemplo básico POST, devuelve JSON
  // ejemplo función en módulo externo
  app.get('/apiapp/extfunc', require('./extfunc.js')); 
 
  // MI API
  // ------------------------------------------------------------------------------

  console.log('APIapp (específica de la APP) se ha configurado para express...')
} 

module.exports.setapp = _setExpressApp;

// ======================================================================
// FUNCIONES API de ejemplo
// ======================================================================

function _hi (req,res) { // API que devuelve texto
  res.charset = 'utf-8';
  res.end('Hi!')
}

function _time(req,res) { // API que devuelve JSON
  ahora = new Date;
  respuesta = {
    error: false,
    time: ahora,                    // hora del servidor en Z, ISO
    tz: ahora.getTimezoneOffset()   // timezone del servidor que está ejecutando esto
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify( respuesta ));
}

function _caps(req, res) { // API que devuelve JSON, a partir parametro URL
  let texto = req.params.texto;
  respuesta = {
    error: false,
    caps: texto.toUpperCase()
  }
  res.setHeader('Content-Type', 'application/json');
  res.end( JSON.stringify(respuesta));
}

function _lowers(req, res) { // API que devuelve JSON, a partir de JSON/GET
  console.log(req.body);
  //res.end(req.body.texto.toLowerCase());

}

function _write(req, res) { // API que devuelve JSON, a partir de JSON/POST
  console.log(req.body) ;
  console.log(req.header ) ;
  res.end('write');
}
