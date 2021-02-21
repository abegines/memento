// ===============================================================================
// API GENÉRICA (inicialización)
// ===============================================================================
function _setExpressApp(app)
{
  app.post('/apigen/horaservidor', _horaservidor );
  app.post('/apigen/loginJwt', _loginJwt ) 
  app.post('/apigen/loginRenew', _loginRenew ) 
  console.log('APIgen (genérica de APU) se ha configurado para express...')
} 
module.exports.setapp = _setExpressApp;

// ===============================================================================
// API GENÉRICA funciones(req,res) 
// ===============================================================================
function _horaservidor(req,res) { // API que devuelve JSON
  ahora = new Date;
  respuesta = {
    error: false,
    time: ahora,                    // hora del servidor en Z, ISO
    tz: ahora.getTimezoneOffset()   // timezone del servidor que está ejecutando esto
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify( respuesta ));
}

async function _loginJwt(req, res) {
  res.setHeader('Content-Type', 'application/json');
  let loginresult = await $apus.loginJwt(req.body.idtoken)
  res.end(JSON.stringify( loginresult ));
}

async function _loginRenew(req, res) {
  res.setHeader('Content-Type', 'application/json');
  let loginresult = await $apus.loginRenew(req.body.sesionid, req.body.mmtCreacion)
  res.end(JSON.stringify( loginresult ));
}


/*
app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.get('handle',function(request,response){
//code to perform particular action.
//To access GET variable use.
//request.var1, request.var2 etc
});

app.post('handle',function(request,response){
var query1=request.body.var1;
var query2=request.body.var2;
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
*/