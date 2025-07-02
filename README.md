# Users-Crud-Node.js

Una API básica para gestionar usuarios

## API REST - Gestión de Usuarios

Esta API permite crear, consultar, actualizar y eliminar usuarios utilizando Node.js, Express y MySQL con Sequelize.

Base URL: http://localhost:3000/api/users

- Crear un nuevo usuario:
  * Metodo: POST
  * Ruta: /
  * Body:
    {
      "name": "Diana Adarme",
      "email": "diana@gmail.com",
      "age": 25
    }

 - Consultar todos los usuarios:
    * Metodo: GET
    * Ruta: /
   
 - Obtener usuario por id:
    * Metodo: GET
    * Ruta: /:id

 - Editar un usuario:
  * Metodo: PUT
  * Ruta: /:id
  * Body:
    {
      "name": "Diana",
      "email": "diana@gmail.com",
      "age": 26
    }

- Eliminar un usuario:
    * Metodo: DELETE
    * Ruta: /:id
      
## Instalación
#En una consola bash

- git clone https://github.com/DianaOvski/Users-Crud-Node.js.git
- cd Users-Crud-Node.js
- npm install

- crea en Mysql la base de datos: CREATE DATABASE usersdb;
- corre el proyecto: npm run dev

## Tecnologías

- Node.js
- Express.js
- MongoDB + Mongoose
- Dotenv
- Nodemon (desarrollo)

## ¿Qué aprendí?

Durante el desarrollo de esta mini API RESTful repasé conceptos sobre:

- Estructuración de proyectos en Node.js con Express.
- Uso de Sequelize como ORM para gestionar MySQL de forma eficiente.
- Separación de responsabilidades entre rutas, controladores y modelos.
- Manejo de variables de entorno con dotenv.

## ¿Qué mejoraría?

- Implementar validaciones de entrada más robustas.
- Proteger la API con autenticación JWT.
