import { error } from 'console'
import filesystem from 'fs'


//Crear la siguiente funcion
const crearJSON = async (fileName, data) =>{
    

    try{
        if(!fileName || !fileName.length >= 1 || !isNaN(fileName)){
            throw {code :'ERR_INVALID_ARG_TYPE' , detail: 'Falta fileName en crearJSON o el formato de fileName es incorrecto. Se recibio lo siguiente: ' + fileName}
        }
        if(!data || typeof(data) != 'object' || data === null){
            throw {code :'ERR_INVALID_ARG_TYPE', detail: 'Falta data en crearJSON o se recibio un tipo de dato incorrecto. Se recibio lo siguiente: ' + data}
        }
        await filesystem.promises.writeFile(fileName + '.json', JSON.stringify(data), {encoding: 'utf-8'})
        console.log('Archivo ' + fileName +  '.json creado con exito')
    }
    // error es el objeto de error
    catch(error){
        if(error.code === 'ERR_INVALID_ARG_TYPE'){
            console.error(error.detail)
        }
        else{
            throw error
        }
    }
}

/* const ERRORES = {
    'ERR_INVALID_ARG_TYPE':{
        detail: 'argumentos invalidos',
        fn: ()=>{
            //Envio del ticket de reportes
        },
        'ERROR_GENERICO':{
            
        }
    }
} */






//Ejemplo de uso
// crearJSON('data', [])
//Debe crear a un archivo llamado data.json con el contenido []

const leerJSON = async (fileName) =>{
    try{
    if(!fileName || !fileName.length >= 1 || !isNaN(fileName)){
        throw {detail: 'Falta fileName en leerJSON o el formato de fileName es incorrecto. Se recibio lo siguiente: ' + fileName}
    }
    const nameJSON = fileName + '.json'
    const content = await filesystem.promises.readFile(nameJSON, {encoding: 'utf-8'} )
    return JSON.parse(content)
    }
    catch(error){
        console.error(error.detail)
        throw error
    }
}


/*
Agregar try catch a las funciones crearJSON y leerJSON
Deben tener sus propias validaciones de parametros (es decir que los parametros deben ser valores correctos)
EJ: 
crearJSON(fileName, data)
fileName = string con almenos un caracter

data = data debe ser de tipo objeto y debe ser truly
//  Ojito con el null!!!!
data =null
typeof (data)=> 'object'

Tambien los errores genericos los mostraran por consola de error

Condiciones:
Su codigo NO debe crashear

Recomendaciones:
Para probar que su codigo no crashee usen la siguiente funcion:

const test = async () =>{
    try{
    const result = await crearJSON('data')   

    console.log('accion super importante')
    }
    catch(error){
        console.error(error)
    }
}

test()

Si su codigo esta bien deberia mostrar por consola SIEMPRE 'accion super importante'

*/


export {crearJSON, leerJSON}

/* 
    Crear una clase llamada JSONFileManager que tendra 2 metodos estaticos:

    *crearJson
    *leerJson
*/

/* export class JSONFileManager{
    static async crearJSON(file_name, content){
        const file = file_name + '.json'
        await filesystem.promises.writeFile(file, JSON.stringify(content), {encoding: 'utf-8'})
        console.log('Su archivo: ' + file_name + '.json se ha creado correctamente')
    }

    static async leerJSON(file_name){
        const nameJSON = './' + file_name + '.json'
        const content = await filesystem.promises.readFile(nameJSON, {encoding: 'utf-8'} )
        return JSON.parse(content)
    }
} */



/* Crear un archivo llamado counters.json usando la funcion crearJson, counters.json sera un objeto con el sig formato
{
    products: 0
}

Crear un ProductManager
debe ser una clase con los metodos estaticos:
createProduct
updateProduct
deleteProduct
getProducts
getProductById

Debe manejarse con persistencia de datos con filesystem usando las funciones de utilidad creadas en filesystemManager.js. Los productos se pueden guardar en un archivo llamado products.json

Se debe tener en cuenta que al crear un producto se recibira titulo, descripcion y precio, el id se le asignara automaticamente usando un contador que debe persistir en el archivo json llamado counters.json. Obviamente al crear un producto el contador se debe actualizar en el archivo counters.json y se debe guardar

REGLAS:
-No se puede modificar los archivos usando filesystem, siempre deberemos usar la funcion crearJson o leerJson
-No puede crashear la aplicacion, los errores deben estar manejados
-Los parametros de cada funcion deben estar validados y en caso de no estar deberan tener sus propios throws */


export class ProductManager{
    static productos = []
    
    static async createProduct(titulo, descripcion, precio){
        const contador = await this.getCounter()
        await crearJSON('counter', {productos: contador + 1})
        this.productos.push(
            {
                titulo: titulo,
                descripcion: descripcion,
                precio: precio,
                id: contador + 1
            }
        )
        await crearJSON('productos', this.productos)
        console.log("Producto creado con id: " + (contador + 1))
    }

    static async updateProduct(product_id, titulo, descripcion, precio){
        const productIndex = this.productos.findIndex(producto => producto.id == product_id)
        this.productos.splice(productIndex, 1)
        this.productos.push(
            {
                titulo: titulo,
                descripcion: descripcion,
                precio: precio,
                id: product_id
            }
        )
        console.log("producto con id " + product_id + " actualizado")
        await crearJSON('productos', this.productos)
    }

    static async deleteProduct(product_id){
        const contador = await this.getCounter()
        const productIndex = this.productos.findIndex(producto => producto.id == product_id)
        this.productos.splice(productIndex, 1)
        console.log("producto con id " + product_id + " eliminado")
        await crearJSON('productos', this.productos)
        await crearJSON('counter', {productos: (contador - 1)})
    }

    static async getProducts(){
        try{
            if(leerJSON('productos') === null || leerJSON('productos' === undefined)){
                throw {
                    mensaje: 'SERVER ERROR: Productos no obtenidos',
                    status: 500,
                    ok: false,
                    data: null
                }
            }
            else{
                console.log(leerJSON('productos'))
                return leerJSON('productos')
            }
        }
        catch(error){
            console.error(error.mensaje)
        }
    }

    static async getProductById(id){
        try{
            const productos = await leerJSON('productos')
            const productIndex = productos.findIndex(producto => producto.id === id)
            if(productIndex === -1){
                throw {
                    mensaje: 'SERVER ERROR: ningun producto corresponde a ese id',
                    status: 500,
                    ok: false,
                    data: null
                }
            }
            else{
                const productoBuscado = productos.at(productIndex)
                console.dir('el producto buscado es: ' + productoBuscado.titulo)
                return productos.at(productIndex)
            }
        }
        catch(error){
            console.error(error.mensaje)
        }
    }

    static async getCounter(){
        const counter = await leerJSON('counter')
        return counter.productos
    }

}

/* ProductManager.createProduct('tv android', 'tv android, 98 pulgadas 8k', 4000) */