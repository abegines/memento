@echo off
IF [%1] == [] GOTO noparam

xcopy apu %1 /exclude:apu\.gitignore+apu\noclone.txt /s
cd %1

goto fin

:noparam
ECHO No se ha especificado nombre de proyecto/carpeta

:yaexiste
ECHO Ya existe una carpeta con ese nombre

:fin