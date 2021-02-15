# Diseño de la base de datos

La base de datos almacena toda la información que queremos tener registrada de los casos, sus notas, adjuntos, etiquetado, etc.  
Además de la información necesaria para establecer autenticación y autorización.  


### Enumerado: Niveles
Esta lista de valores permite establecer a cada usuario uno de los cinco niveles del privilegios que contempla la aplicación.

* **Invitado** (I)  
Sólo puede ver casos que sean públicos.  
No pueden anotar.

* **Usuario** (U)  
Puede ver casos públicos, casos en los que figura como usuario y casos en los que está relacionado a través de CasoUsuario.
Puede crear nuevos casos (con información básica: título, texto, Etapa e importancia, pero siempre a su nombre)
Puede anotar en los casos en los que figura como usuario o está relacionado.

* **Colaborador** (C)  
Se le pueden asignar casos.  
Puede ver casos públicos, casos en los que figura como usuario y casos en los que está relacionado a través de CasoUsuario.
También puede ver casos en los que está asignado como técnico.  
Puede crear nuevos casos, incluso indicando que es para otro usuario, incluso asignándolos a otros técnicos.  

* **Técnico** (T)  
Se le pueden asignar casos.  
Puede ver cualquier caso, excepto si son privados.  
Puede crear nuevos casos, incluso indicando que es para otro usuario, incluso asignándolos a otros técnicos.  

* **Administrador** (A)  
Se le pueden asignar casos.  
Puede ver cualquier caso, incluso los privados.   
Marca y desmarca los casos como públicos/normales/privados.  

### Tabla: Usuario
Esta tabla contiene un registro por cada usuario que se enrole en la aplicación.  
Todos los usuarios comienzan siendo "Invitados" y sólo un Administrador puede cambiar su nivel.  
El primer usuario que accede a la aplicación pasa a ser administrador si aún no hay ninguno definido.  
```
numUsuario (pk, autonum)
Email (tx) // la forma de asociar un login con el usuario…
Nombre (tx)
NivelUsuario (Invitado, Usuario, Colaborador, Técnico, Administrador)
esActivo (t/f)	
```
### Tabla: Estado 
Los valores posibles del estado de asignación y terminación que tiene un caso  

```
codEstado (pk, chars) [uno de ellos en blanco]
nomEstado (tx)
PrioridadEstado
iconoEstado
esDisponible // si puede usarse para nuevos casos o se conserva para integridad referencial
```

Esta tabla  debe tener los registros A,B,X,Y,Z, pero pueden traducirse las descripciones y asignar prioridades.  
* **Nueva** (A)  
En este estado comienzan todos los nuevos casos.  
* **Asignada** (B) 
Este estado es el que tienen los casos cuando han sido asignados a un técnico.  
* **Reabierta** (X)  
Este estado es el que tienen los casos cuando se reabren una vez fueron terminados o cerrados.  
* **Terminada** (Y)  
Este estado es el que suelen asignar los técnicos a los casos una vez lo dan por terminado.  
* **Cerrada** (Z)
Este estado es el que tiene un caso cuando, generalmente el usuario, lo da por cerrado aceptando la solución.  

También pueden existir otros estados que comienzan con estas mismas letras pero son más concretos que estos genéricos.  
Por ejemplo, podría usarse B2 para "reasignaciones" de casos, pero tanto B como B2 corresponden al estado principal "asignado".

Los flujos de estados posibles, habría que crear tabla de transiciones que verbalice la acción:  
```
Nuevo  -> A
Asignar A -> B (primera vez)
Terminar B -> Y 
Cerrar Y -> Z
Reabrir Y > X, Z > X

Reasignar B -> B2 (cambio de técnico, estado específico)
```

### Enumerado: Acceso
Esta lista de valores permite establecer el acceso permitido a un caso en los situientes términos:

* **Público** (-1)  
Estos casos pueden ser vistos por cualquier usuario.

* **Normal** (0)  
Estos casos pueden ser vistos por los usuarios/colaboradores relacionados, todos los técnicos y administradores.

* **Privado** (+1)  
Estos casos pueden ser vistos solamente por los usuarios/colaboradores/técnicos relacionados y los administradores.
Si un usuario quiere que sólo él pueda verlo debe asignarse como usuario y técnico del caso.


### Tabla: Etapa
Esta es una tabla de dominio que permite asignar a cada caso la "etapa" de realización en que se encuentra.
Pueden corresponder a alguna prioridad de triaje o a una columna de un panel Kanban. 
(p.ej. A la mayor brevedad (triaje), Ahora, por favor (tiraje), No urgente (tiraje), Idea futura, Inbox desarrollo, Pendiente publicar, etc.)
Debe existir, al menos, una etapa marcada esPareTriaje=true
```
codEtapa (pk, chars)
nomEtapa
PrioridadEtapa
esParaTriaje
iconoEtapa
esDisponible // si puede usarse para nuevos casos o se conserva para integridad referencial
```

### Tabla: Importancia
Esta es una tabla de dominio que permite asignar a cada caso una "importancia".
Permite la asignación de prioridades, relevancia de un caso, etc.
Por ejemplo, Normal, Importante, Caso Top, Legendario, etc.
```
codImportancia (pk, chars)
nomImportancia
PrioridadImportancia
esParaTriaje
iconoImportancia
esDisponible // si puede usarse para nuevos casos o se conserva para integridad referencial
```

### Tabla: Etiqueta
Esta tabla almacena un registro por cada una de las posibles etiquetas que pueden asignarse a los casos.  
Por ejemplo: C#, JavaScript, IoT, Maker, 3dPrint, Proyecto1, Proyecto2, etc.  
Podemos asignar el mismo color a todas las etiquetas que corresponden a un mismo dominio.  
Por ejemplo: verde para lenguajes, azul para proyectos.  
La aplicacion podría ordenará las etiquetas por color al mostrarlas.  
Las etiquetas pueden usarse para cambiar el acceso de un caso (privado o público). (PULIR ESTO)  

```
numEtiqueta (pk, autonum)
Etiqueta (tx)
Color (int32)
cambiaAcceso (-1,0,+1) // al asignar esta etiqueta, cambia automáticamente el acceso del caso 
// (no pueden haber dos etiquetas asociadas a un mismo caso que cambien a estados diferentes -1 ó +1)
// Por tanto, podrán existir dos etiquetas "Privado" y "Público" al menos para permitir cambios de acceso
esDisponible // si puede usarse para nuevos etiquetados o se conserva para integridad referencial
```

### Concepto: Priorización de casos
Vemos que tanto el Estado, como la Etapa o la Importancia tienen un campo de "prioridad".
La suma de las prioridades del Estado, Etapa e Importancia de un caso determina la prioridad del caso.
Un número mayor indica una mayor prioridad.

Al crear las etapas, importancias y estados, podemos jugar con el peso de sus valores de prioridad para establecer un sistema de prioridades acorde a nuestro criterio.


### Tabla: Caso
Registra la cabecera de un caso, con su título, su párrafo, etc.

```
numCaso (pk, autonum)

TituloCaso (tx)
TextoCaso (párrafo)

numUsuario (fk Usuario)
codEstado  (fk Estado) // A,B,X,Y,Z
codEtapa (fk Etapa)
codImportancia  (fk Importancia)

numAsignador (fk Usuario)
numTecnico (fk Usuario)

mmtInsert
mmtAsignado
mmtTerminado
mmtCerrado
mmtReabierto

Acceso (-1 Público, 0 Normal, +1 Privado)
```

### Tabla: Nota
Registra una nota dentro de la bitácora de un caso.

```
numCaso (pk, fk Caso)
numNota (pk, autonum)
	
TituloNota (tx)
TextoNota (párrafo)
numUsuario (fk Usuario) // el que anota originalmente
esEncriptado (bool)
	
esVisibleUsuario (bool)
esTachado (bool)

esEditado (bool)
numEditor (fk Usuario) // el que editó la nota

mmtInsert (datetime)
mmtEditado (datetime)
	
NuevoEstado (solamente si provoca cambio de estado)
NuevaEtapa (solamente si provoca cambio etapa)
NuevaImportancia (solamente si provoca cambio importancia)

```
(COMO VAMOS A ENCRIPTAR COMENTARIOS Y ADJUNTOS???)

### Tabla: Adjunto
Permite asociar a una nota de un caso un archivo adjunto (imagen, pdf, etc.)

```
numCaso (pk, fk Caso, Nota)
numNota (pk, fk Nota) (0 para cabecera?)
numAdjunto (pk, autonumber)
NombreAdjunto // con extensión incluida
BlobAdjunto // el adjunto en un blob
mmtAdjunto // el momento en que se adjuntó
```

### Tabla: CasoEtiqueta
Permite asociar un caso con una de las etiquetas definidas

```
numCaso (pk, fk Caso)
numEtiqueta (pk, fk Etiqueta)
numEtiquetador (pk Usuario) // el usuario que ha etiquetado
mmtEtiquetado (datetime) // el momento en que se etiquetó
```

### Tabla: CasoUsuario
Permite asociar un caso con usuarios adicionales  
Para que pueda consultarlo aunque no sea el usuario y técnico asignados  
```
numCaso (pk, fk Caso)
numUsuario (pk Usuario) // el usuario que está relacionado
numAsociador (pk Usuario) // el usuario que lo ha asociado
mmtAsociacion (datetime) // el momento en que se asoció
```  

### Colección: Sesión (en memoria?)  
Cada una de las sesiones que se mantienen activas en este momento en la aplicación.  
```
idSesion (pk, guid)
numUsuario (fk Usuario)
mmtInicioSesion (datetime)
+ resto campos usuario en el momento de inicio de sesión o actualizado
```
