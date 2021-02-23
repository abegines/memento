# API de memento

## Manejo de sesión
---

### horaservidor
Función ejemplo de api que, sin tomar parámetros, devuelve la hora del servidor.



### **loginJwt** { idtoken }
---
Inicia una sesión en la aplicación haciendo uso del idtoken que se obtiene de una api de autenticación (ms, google, etc.)

Se valida el token y se obtienen atributos de identificación: email, nombre y foto.

Si es la primera vez que el usuario hace login (y está configurado el auto-enrolado), se creará un usuario con nivel "invitado" y se inicia la sesión para éste.

Si ya existía el usuaro asociado a ese email, se inicia una sesión con los accesos configurados para el usuario correspondiente.

Devuelve al cliente un objeto con el siguiente esquema:

```js
      {
        sesionid : sesionid,
        userid: token.preferred_username || token.email,
        name : payload.name,
        picture: payload.picture,
        mmtCreacion : this.horaz()
      }
```

En caso de error, como el resto de funciones, devolverá un objeto con el siguiente esquema:

```js
      { 
        err: true, 
        errmsg: 'error, comprobar origen en servidor' 
      }
```


### **loginRenew** { sesionid, mmtCreacion }
Renueva una sesión de usuario previamente cacheada en el navegador.
El servidor decide si la sesión es vigente aún o no.

Devuelve al cliente un objeto igual al que se devuelve en loginJwt o error en caso de producirse.

## Datos de usuarios
---

### **usuarioLista**
---
Devuelve un array con todos los usuarios, indicando para cada uno de ellos los atributos que necesita el cliente.

Un ejemplo de datos devueltos sería:

>Sólo recibirá la lista completa de usuarios si el cliente tiene nivel superior o igual a colaborador (CTA). Si un invitado o usuario llama a esta función recibirá un array con un sólo registro: el de su propio usuario.

```js
[ 
  {
    id : 1,
    email: 'antonio@begines.net',
    nombre: 'Antonio Begines',
    nivelUsuario: 'A',
    esActivo: true
  }
  ,
  {
    id: 7,
    email: 'javier@begines.net',
    nombre: 'Javier Begines',
    nivelUsuario: 'C',
    esActivo: true,
  }
]
```

### **usuarioCambiaNivel** { idSesion, idUsuario, nuevoNivel }
--- 
Cambia el nivel del usuario indicado.

El primer parámetro **idSesion**, como en el resto de funciones, indica el idSesion del cliente obtenido con la función **loginJwt**
El segundo parámetro **idUsuario**, indica el usuario al que hay que cambiar el nivel.
El tercer parámetro **nuevoNivel**, indica cual es el nuevo nivel del usuario.

```js
{
  sesionId: 'M1S3S10N1D',
  idUsuario: 7,
  nuevoNivel: 'T'
}
```

Todas las funciones devuelven un objeto que indica si hubo éxito u error, usando para indicarlo el miembro **err**

```js
// o cualquier valor "falso" en javascript o la inexistencia del miembro "err", indica que hubo éxito
  { err: undefined, ... }
  { err: false, ... }
  { err: 0, ... }
  { /* err no existe */ ... }

// cualquier valor "no falso" en javascript, indica que hubo error
  { err: true, ... }
  { err: 2, ... }
  { err: 'problemo', ... }
```

>Sólo un ADMINISTRADOR puede ejecutar esta función.

### **usuarioCambiaActivo** { idSesion, idUsuario, nuevoEsActivo }
---

Cambia si un usuario está activo o no.

El primer parámetro **idSesion**, como en el resto de funciones, indica el idSesion del cliente obtenido con la función **loginJwt**
El segundo parámetro **idUsuario**, indica el usuario al que hay que cambiar el nivel.
El tercer parámetro **nuevoNivel**, indica cual es el nuevo nivel del usuario.

```js
{
  sesionId: 'M1S3S10N1D',
  idUsuario: 7,
  nuevoNivel: false
}
```

>Sólo un ADMINISTRADOR puede ejecutar esta función.
---