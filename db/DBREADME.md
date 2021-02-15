# Diseño de la base de datos

### [Enum: Niveles]
Nivel de privilegios que tiene el usuario.  
Todos los usuarios comienzan siendo "Invitados", sólo un Administrador puede cambiar su nivel.  
El primer usuario que accede desde "localhost" pasa a ser administrador si aún no hay ninguno.

**Invitado** (I)  
Sólo puede ver casos que sean públicos.  
No pueden anotar.

**Usuario** (U)  
Puede ver casos públicos, casos en los que figura como usuario y casos en los que está relacionado a través de CasoUsuario.
Puede crear nuevos casos (con información básica: título, texto, Etapa e importancia, pero siempre a su nombre)
Puede anotar en los casos en los que figura como usuario o está relacionado.

**Colaborador** (C)  
Se le pueden asignar casos.  
Puede ver casos públicos, casos en los que figura como usuario y casos en los que está relacionado a través de CasoUsuario.
También puede ver casos en los que está asignado como técnico.  
Puede crear nuevos casos, incluso indicando que es para otro usuario, incluso asignándolos a otros técnicos.  

**Técnico** (T)  
Se le pueden asignar casos.  
Puede ver cualquier caso, excepto si son privados.  
Puede crear nuevos casos, incluso indicando que es para otro usuario, incluso asignándolos a otros técnicos.  

**Administrador** (A)  
Se le pueden asignar casos.  
Puede ver cualquier caso, incluso los privados.   
Marca y desmarca los casos como públicos/normales/privados.  

### Usuario
Cada uno de los usuarios que accederán a la aplicación. 
Los usuarios pueden “auto-enrolarse” como invitados.
El primer usuario que accede desde “localhost” se convierte en administrador.
Sólo un administrador puede cambiar su nivel.
```
numUsuario (pk, autonum)
Email (tx) // la forma de asociar un login con el usuario…
Nombre (tx)
NivelUsuario (Invitado, Usuario, Colaborador, Técnico, Administrador)
esActivo (t/f)	
```
### Estado 

Los valores posibles del estado de asignación y terminación que tiene un caso  

```
codEstado (pk, chars) [uno de ellos en blanco]
nomEstado (tx)
PrioridadEstado
iconoEstado
```


Esta tabla  debe tener los registros A,B,X,Y,Z, pero pueden traducirse las descripciones y asignar prioridades.  
A) Nueva, B) Asignada, X) Reabierta, Y) Terminada, Z) Cerrada  

También pueden existir además otros estados que comienzan con estas letras para concretar aún más (por ejemplo, podría usarse B2 para "reasignaciones" de casos, pero ambos corresponden al estado principal "asignado").
Los nuevos casos siempre comienzan con el estado “A”  

Los flujos de estados posibles:  
```
Nuevo * -> A
Asignar A -> B (primera vez)
Reasignar B -> B2 (cambio de técnico)
Terminar B -> Y 
Cerrar Y -> Z
Reabrir Y > X, Z > X
```

### [Enum: Acceso]
Tres valores posibles para el nivel de acceso de cada caso.

**Público** (-1)  
Estos casos pueden ser vistos por cualquier usuario.

**Normal** (0)  
Estos casos pueden ser vistos por los usuarios/colaboradores relacionados, todos los técnicos y administradores.

**Privado** (+1)  
Estos casos pueden ser vistos solamente por los usuarios/colaboradores/técnicos relacionados y los administradores.
Si un usuario quiere que sólo él pueda verlo debe asignarse como usuario y técnico del caso.


### Etapa

La etapa de realización en la que se encuentra el caso, pueden corresponder a una columna de un panel Kanban. 
(p.ej. A la mayor brevedad (triaje), Ahora, por favor (tiraje), No urgente (tiraje), Idea futura, Inbox desarrollo, Pendiente publicar, etc.)
Debe existir, al menos, una etapa marcada esPareTriaje=true
```
codEtapa (pk, chars)
nomEtapa
PrioridadEtapa
esParaTriaje
iconoEtapa
```

### Importancia
La importancia del caso, para jugar con prioridades y poder ponerle un “flame” o algo así.
O para marcar casos como “top 100”, etc…
(p.ej. Normal, Importante, Caso Top )
```
codImportancia (pk, chars)
nomImportancia
PrioridadImportancia
esParaTriaje
iconoImportancia
```

### Etiqueta
(p.ej. C#, JavaScript, IoT, Maker, 3dPrint, Proyecto1, Proyecto2, etc.)
```
numEtiqueta (pk, autonum)
Etiqueta (tx)
Color (int32)
cambiaAcceso (-1,0,+1) // al asignar esta etiqueta, cambia automáticamente el acceso del caso 
//(no pueden haber dos etiquetas asociadas a un mismo caso que cambien a estados diferentes -1 ó +1)
// Por tanto, podrán existir dos etiquetas "Privado" y "Público" al menos para permitir cambios de acceso
```

### Caso
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

### Nota
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

### Adjunto
Permite asociar a una nota de un caso un archivo adjunto (imagen, pdf, etc.)

```
numCaso (pk, fk Caso, Nota)
numNota (pk, fk Nota) (0 para cabecera?)
numAdjunto (pk, autonumber)
NombreAdjunto // con extensión incluida
BlobAdjunto // el adjunto en un blob
mmtAdjunto // el momento en que se adjuntó
```

### CasoEtiqueta
Permite asociar un caso con una de las etiquetas definidas

```
numCaso (pk, fk Caso)
numEtiqueta (pk, fk Etiqueta)
numEtiquetador (pk Usuario) // el usuario que ha etiquetado
mmtEtiquetado (datetime) // el momento en que se etiquetó
```

### CasoUsuario
Permite asociar un caso con usuarios adicionales  
Para que pueda consultarlo aunque no sea el usuario y técnico asignados  
```
numCaso (pk, fk Caso)
numUsuario (pk Usuario) // el usuario que está relacionado
numAsociador (pk Usuario) // el usuario que lo ha asociado
mmtAsociacion (datetime) // el momento en que se asoció
```  

### Sesión (en memoria?)  
Cada una de las sesiones que se mantienen activas en este momento en la aplicación.  
```
idSesion (pk, guid)
numUsuario (fk Usuario)
mmtInicioSesion (datetime)
+ resto campos usuario en el momento de inicio de sesión o actualizado
```
