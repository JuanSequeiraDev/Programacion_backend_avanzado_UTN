//Require es una funcion que permite importar modulos
/* const filesystem = require('fs') */

/*             NOTAS

//             PROMESAS

Las promesas tienen 3 estados/eventos posibles:
*Pending/pendiente
*onRejected/Rechazada
*OnFullField/Completo

*/



/* 
//filesystem.writeFileSync('prueba.txt','hola desde node.js', {encoding: 'utf-8'})

const resultado = filesystem.readFileSync('prueba.txt',{encoding: 'utf-8'})

//filesystem.writeFileSync('prueba.json',JSON.stringify({nombre: 'pepe', edad: 16}), {encoding: 'utf-8'})

const objeto = JSON.parse(filesystem.readFileSync('prueba.json', {encoding: 'utf-8'})) //No olvidar el parse
console.log(objeto.edad)
 */



//Cuando coloco async en una funcion la funcion retornara una promesa 
/* const crearTxt = async (file_name, texto) =>{
    const file = file_name + '.txt'
    //filesystem.writeFileSync(file, texto, {encoding: 'utf-8'})

    //En el caso de filesystem usar promises para trabajarlo con asincronia
    await filesystem.promises.writeFile(file, texto, {encoding: 'utf-8'})
    let textoGuardado = await filesystem.promises.readFile(file, {encoding: 'utf-8'})
    console.log('Se registro con exito: ' + textoGuardado)
 */

    /* filesystem.writeFile(file, texto, {encoding: 'utf-8'}, () =>{
        filesystem.readFile(file, {encoding: 'utf-8'}, (error, resultado) =>{
            console.log(resultado)
        })
    }) //Otro metodo de uso de filesystem asincronicamente el cual debe evitarse debido a la repetitividad */
/* } */

//Console
/* 
console.error('ERROR')
console.dir('HOLA')
console.warn('estas advertido')
console.info('Esto es una informacion')
console.table({nombre: 'pepe', apellido: 'suarez'})
console.trace() //Traza la ubicacion donde se utiliza
 */

/* module.exports = {crearTxt, nombre: 'pepe'} */ //Variable global que hace referencia al modulo

