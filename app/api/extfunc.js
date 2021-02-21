// ejemplo de un módulo externo de api para facilitar la modularidad de código
 function extfunc(req, res)
{
  res.charset = 'utf-8';
  res.end('extfunc demo!');
} 

module.exports = extfunc;