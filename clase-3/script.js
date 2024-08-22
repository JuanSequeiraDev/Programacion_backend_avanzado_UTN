"use strict";
/* const saludar = (persona: string) =>{
    console.log('hola ' + persona)
}

let personita = {nombre: 'pepe', apellido: 'suarez'}

saludar(personita.nombre) */
/* Indico explicitamente que la variable nombre es de tipo string */
/* let nombre : string = 'pepe'

nombre = '1' */
let nombre = null;
if (nombre) {
    console.log(nombre);
}
else {
    console.log('no hay nombre aun');
}
let edad = 80;
let isRegistered = true;
let miNombre = 'juan';
let nulo = null;
let undefinido = undefined;
const calcularIva = (precio) => {
    return precio * 0.21;
};
const resultado = calcularIva(400);
const saludar = (nombre) => {
    console.log('hola' + nombre);
};
saludar('pepe');
const mandarEmail = (to, message = 'nada', subject) => {
    /* magia negra */
    console.log(to, message);
};
mandarEmail('pepito@gmail.com');
