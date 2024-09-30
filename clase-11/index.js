//Punto de entrada o EntryPoint

//Pasos para empezar un proyecto en node.js:

//Abrir la terminal
//npm init -y
//npm i -D nodemon (Instala nodemon en nuestra carpeta package.json, para asi dejarlo como dependencia de desarrollo como utilidad para otro desarrolladores que usen nuestro codigo)
//Añadir un srcipt dev al package.JSON = "dev": "nodemon index.js", para poder utilizar npm run dev


/* Alternativa nativa, node --watch filename (Aun un poco verde) */


//Nodemon
//nmp i -g nodemon (Comando de instalacion por primera vez)
//Es una libreria de desarrollo que nos permite ejecutar nuestro codigo cada vez que guardemos

//Browser Object Model [BOM]


//EN NODE NO EXISTE NI DOM NI BOM



const {crearTxt} = require('./utils/fileSystem') //Desestructurar las funciones necesarias

crearTxt('prueba2', 'hola mundo 2')


//Require, module.exports es como funcionan las importaciones en COMMONJS