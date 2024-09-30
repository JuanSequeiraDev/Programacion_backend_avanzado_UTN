//Indicar type module en package json para trabajar con modular

import { crearJSON, leerJSON, ProductManager } from "./utils/filesystemManager.js";
/* import { JSONFileManager } from "./utils/filesystemManager.js"; */

/* crearJSON('data', [{
    "nombre": "juan"
},
{
    "nombre": "maria"
}])

leerJSON('data') */


/* const test = async () =>{
    await JSONFileManager.crearJSON('data', [{
        "nombre": "juan"
    },
    {
        "nombre": "maria"
    }])
    
    return await JSONFileManager.leerJSON('data')
} */


// ERRORES

/* const test = async () =>{        //Sin usar el Try o Catch en la funcion crearJSON, la aplicacion fallaria y no proseguiria con sus funciones
    try{
    const result = await crearJSON('data')   

    console.log('accion super importante')
    }
    catch(error){
        console.error(error)
    }
}

test()
 */






const test = async() =>{
    await crearJSON('counter', {productos: 0})
    await ProductManager.createProduct('tv samsung', 'tv samsung, 48 pulgadas 4k', 1200)
    await ProductManager.createProduct('tv android', 'tv android, 98 pulgadas 8k', 4000)
    await ProductManager.updateProduct(2,'auriculares logitech', 'auriculares logitech 1ms ergonomicos', 1500)
    await ProductManager.deleteProduct(1)
    await ProductManager.getProductById(-10)
}

test()



/* const test = async() =>{
    const productos = []
    const producto1 = {"hola": "hola"}
    const producto2 = {"skere":"skere"}
    productos.push(producto1)
    productos.push(producto2)
    await crearJSON('productos', productos)
    await crearJSON('productos', productos)
    productos.splice(0, 1)
    await crearJSON('productos', productos)
}

test() */