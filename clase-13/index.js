import express from "express";
import filesystem from "fs"

/*
    API = aplication programing interface
*/

//Se crea una instancia de servidor HTTP
const app = express()
const PORT = 4000

//Cuando alguien consulte al endpointe 'obtener-usuarios' con metodo get se ejecutara esta callback
//La callback recibe 2 parametros,  request, response
//Request es un objeto con todos los datos de consulta 
//Response es un objeto que usamos para emitir respuestas

app.get('/obtener-usuarios', async(request, response)=>{
    console.log('recibido')
    /* 
        llamar a /public/usuarios.json y obtener la lista de usuarios.
        Una vez la obtenemos responderemos con la lista de usuarios 
    */
    const resultado = await filesystem.promises.readFile('./public/usuarios.json', {encoding: 'utf-8'})
    const usuarios = JSON.parse(resultado)
    
    response.json({mensaje:'Hola',code: 1, data: usuarios}) 

})


//response.send() nos permite emitir json, HTML, texto plano
//response.json() nos permite emitir json

//response.status() nos permite setear el status HTTP


/* 
Crear un archivo llamado productos.json dentro de /public que tenga una lista de productos con id, precio, descripcion y nombre

Crear un endpoint llamado /obtener-productos que al consultarlo nos responda:

{
    mensaje: 'Productos obtenidos',
    status: 200,
    ok: true,
    data: [
        {
            Producto
        }
    ]
}
    El array de productos debe venir del contenido del productos.json

2)
Agregar manejo de errores:

Si no se puede obtener la lista de productos deberan responder:
{
    mensaje: 'SERVER ERROR: productos no obtenidos',
    status:500,
    ok: false,
    data: null
}
*/

app.get('/obtener-productos', async(request, response)=>{
    try{
        const resultado = await filesystem.promises.readFile('./public/producto.json', {encoding: 'utf-8'})
        const productos = JSON.parse(resultado)

        response.json({mensaje: 'Productos obtenidos', status: 200, ok: true, data: productos})
    }
    catch(error){
        response.json(
            {
                mensaje: 'SERVER ERROR: productos no obtenidos',
                status:500,
                ok: false,
                data: null
            }
        )
    }
    
})


//Listen espera recibir 2 valores: puerto, callback
app.listen(PORT, ()=>{
    //Esta callback se ejecuta cuando se este escuchando mi app en el puerto
    console.log('El servidor se esta escuchando en el puerto ' + PORT)
})

//http://localhost:4000