# Sistema de Gestión Académica (SGA)



Proyecto desarrollado durante la materia Programación IV.



## Descripción



El Sistema de Gestión Académica (SGA) es una aplicación web que permitirá administrar alumnos, docentes, cursos y materias.



Durante el desarrollo del proyecto se incorporarán progresivamente nuevas tecnologías y funcionalidades.



## Objetivos



- Gestionar alumnos.

- Gestionar docentes.

- Gestionar cursos.

- Gestionar materias.

- Implementar autenticación de usuarios.

- Consumir una API REST.

- Persistir la información en MongoDB.



## Tecnologías



Actualmente:



- HTML5

- CSS3

- Javascript

- Express

- Node.js


Próximamente:

- React


- MongoDB



## Estado del proyecto



- Version:
Clase 02


Clase 12 - Estructura actual
```text

SGA/
frontend
        │  alumnos.html
        │  docentes.html
        │  index.html
        │  LICENSE
        │  README.md
        │  sistema de gestion academica
        │
        ├─CSS
        │      style.css
        │
        └─JS
                alumnos.js
                asincronia.js
                docentes.js
backend

```
## Estado actual

- Pagina de inicio y navegacion entre modulos
- Modulo alumnos docentes
- CRUD alumnos/docentes
- Validaciones de formularios
- Persistencia mediante localStorage
- Organizacion del codigo y refactorizacion
- Separacion inicial entre Frontend y Backend
- Implementacion de validaciones para los datos recibidos mediante req.body
- Uso de status 400 para datos invalidos
- status 404 para alumno no encontrado
- status 201 para registrar nuevo alumno
- Manejo basico de errores en las opeaciones del CRUD..

## Almacenammiento

- localStorage
- JSON.stringify
## Autor



Natan Velazquez



Programación IV