# API de memento

## Manejo de sesión
---

### horaservidor
Función ejemplo de api que, sin tomar parámetros, devuelve la hora del servidor.



### **loginJwt** { idtoken }
---
Inicia una sesión en la aplicación haciendo uso del idtoken que se obtiene de una api de autenticación (ms, google, etc.)

Se valida el token y se obtienen atributos de identificación: email, nombre y foto.

Si es la primera vez que el usuario hace login (y está configurado el auto-enrolado), se creará un usuario con nivel "invitado"  y se inicia la sesión para éste.

IDEA: *Una configuración de dominios pre-autorizados podría permitir el autoenrolado como invitado o usuario, o impedirla*

Si ya existía el usuario asociado a ese email, se inicia una sesión con los accesos configurados para el usuario correspondiente.

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

>Sólo recibirá la lista completa de usuarios si el cliente tiene nivel superior o igual a colaborador (CTA). Si un invitado o usuario (IU) llama a esta función, recibirá un array con un sólo registro: el de su propio usuario.

Un ejemplo de datos devueltos sería:



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
>Sólo un ADMINISTRADOR puede ejecutar esta función.

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

### **usuarioCambiaActivo** { idSesion, idUsuario, nuevoEsActivo }
---
Cambia si un usuario está activo o no.
>Sólo un ADMINISTRADOR puede ejecutar esta función.

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

### **etapaLista** { idSesion }
---
Devuelve una lista con todos los registros de la tabla Etapa.

### **etapaGuarda** { idSesion , objEtapa }
---
>Sólo un ADMINISTRADOR puede ejecutar esta función.

Guarda (insertar o actualizar) un registro en la tabla Etapa.

### **etapaElimina** { idSesion, codEtapa }
---
>Sólo un ADMINISTRADOR puede ejecutar esta función.

Elimina un registro de la tabla Etapa.

### **importanciaLista** { idSesion }
---
Devuelve una lista de todos los registros de la tabla Importancia.

### **importanciaGuarda** { idSesion, objImportancia }
---
>Sólo un ADMINISTRADOR puede ejecutar esta función.

Guarda (insertar o actualizar) un registro en la tabla Importancia.

### **importanciaElimina** { idSesion, codImportancia }
---
>Sólo un ADMINISTRADOR puede ejecutar esta función.

Elimina un registro de la tabla Importancia.

### **etiquetaLista** { idSesion }
---
> Los usuarios e invitados no pueden ejecutar esta funcion. No lo deben necesitar.

Devuelve una lista con todos los registros de la tabla etiqueta.

### **etiquetaGuarda** { idSesion, objEtiqueta }
---
>Sólo un ADMINISTRADOR puede ejecutar esta función.

Guardar (insertar o actualizar) un registro en la tabla Etiqueta.

### **etiquetaElimina** { idSesion, numEtiqueta }
---
>Sólo un ADMINISTRADOR puede ejecutar esta función.

Elimina un registro de la tabla Etiqueta.

### **casoLeer** { idSesion, numCaso }
---
Recibe como parámetro el identificador de un caso y devuelve un objeto con toda la información (cabecera, notas, etc.) del caso indicado. Los adjuntos deben solicitarse con otras funciones específicas.

Solamente devuelve la información del caso si se da una de estas condiciones:
  
- El caso corresponde al usuario ya sea como usuario, como colaborador/técnico asignado o como administrador.
- El caso es un caso público.
   
### **casoBuscar** { idSesion, { criterioBusqueda } }
---
Recibe como parámetro el criterio de búsqueda y devolverá una lista de casos que cumplan el criterio.

En todo caso, se aplicarán los mismos criterios que en **casoLeer** para determinar si el usuario puede ver en la lista este caso.

### **casoNuevo** { idSesion, { objCaso } }
---
Los invitados NO pueden crear casos.

### **notaNueva** { idSesion, { objNota } }
---
Los técnicos y administradores pueden anotar en cualquier caso al que han tenido acceso (no privados p.ej.). Los usuarios y colaboradores pueden anotar solamente en los casos en los que están implicados. Los invitados NO pueden anotar.

###



---