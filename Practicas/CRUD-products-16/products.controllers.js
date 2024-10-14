import filesystem from 'fs'
import ResponseBuilder from './builder/response.builder.js'

export const getAllProductsController =  async (req, res) => {

    try {
        const products = JSON.parse(await filesystem.promises.readFile('./data/products.json', { encoding: 'utf-8' }))
        const activeProducts = products.filter(product => product.active === true)
        if (activeProducts.length === 0) {
            const responseFalse = new ResponseBuilder()
                .setOk(false)
                .setMessage("Productos no encontrados")
                .setStatus(404)
                .setData({})
                .build()
            return res.status(404).json(responseFalse)
        }

        const response = new ResponseBuilder()
            .setOk(true)
            .setMessage("Productos Obtenidos")
            .setStatus(200)
            .setData({
                products: activeProducts
            })
            .build()

        return res.status(200).json(response)
    }
    catch (error) {
        console.error(error.message)
        const response = new ResponseBuilder()
            .setOk(false)
            .setMessage("Internal Server Error")
            .setStatus(500)
            .setData({})
            .build()
        return res.status(500).json(response)
    }
}

export const getProductByIdController =  async (req, res) => {
    try {
        const { product_id } = req.params
        if(isNaN(product_id) || product_id < 0){
            const responseFalse = new ResponseBuilder()
                .setOk(false)
                .setMessage("El parametro de busqueda no es un numeroo es menor a 0")
                .setStatus(400)
                .build()
            return res.status(400).json(responseFalse)
        }

        const products = JSON.parse(await filesystem.promises.readFile('./data/products.json', { encoding: 'utf-8' }))
        const productFound = products.find(product => product.id === Number(product_id))
        if (productFound === undefined) {
            const responseFalse = new ResponseBuilder()
                .setOk(false)
                .setMessage("No se encontro el producto")
                .setStatus(404)
                .setData({ product: null })
                .build()
            return res.status(404).json(responseFalse)
        }

        let active = "activo"
        if (productFound.active === false) {
            active = "inactivo"
        }

        const response = new ResponseBuilder()
            .setOk(true)
            .setMessage("Producto Obtenido" + " , el producto esta " + active)
            .setStatus(200)
            .setData({
                product: productFound
            })
            .build()
        return res.status(200).json(response)
    }
    catch (error) {
        console.error(error.message)
        const response = new ResponseBuilder()
            .setOk(false)
            .setMessage("Internal Server Error")
            .setStatus(500)
            .setData({})
            .build()
        return res.status(500).json(response)
    }
}


export const postProductController =  async (req, res) => {

    try {
        const responseErr = new ResponseBuilder()
            .setOk(false)
            .setMessage("")
            .setStatus(400)
            .setData({
                products: null
            })

        const productsArr = JSON.parse(await filesystem.promises.readFile('./data/products.json', { encoding: 'utf-8' }))
        const productoNuevo = req.body

        const erroresValidacion = []

        if (productsArr.find(producto => producto.title.toLowerCase() === productoNuevo.title.toLowerCase())) {
            erroresValidacion.push("Ya existe un producto con este titulo")
            
        }

        if (!productoNuevo.title || !isNaN(productoNuevo.title)) {
            erroresValidacion.push("El titulo no es un string o es vacio")
            
        }

        const categorias_existentes = ['ropa', 'tecnologia', 'jugueteria']

        if (!productoNuevo.categoria || !isNaN(productoNuevo.categoria) || !categorias_existentes.includes(productoNuevo.categoria.toLowerCase())) {
            erroresValidacion.push("La categoria no es un string valido o no es una de las categorias existentes")
            
        }

        if (isNaN(productoNuevo.price) || !productoNuevo.price || !(productoNuevo.price !== true)) {
            erroresValidacion.push("El precio no es un numero o es negativo")
            
        }

        if (isNaN(productoNuevo.stock) || !productoNuevo.stock || !(productoNuevo.stock !== true)) {
            erroresValidacion.push("El stock no es un numero o es negativo")
        }

        if(erroresValidacion.length > 0){
            let errorMensaje = `Errores de validacion:   ` + erroresValidacion.join('  -  ')
            responseErr.setMessage(errorMensaje).build()
            return res.status(400).json(responseErr)
        }

        productoNuevo.id = productsArr.length + 1
        productoNuevo.active = true

        productsArr.push(productoNuevo)
        await filesystem.promises.writeFile('./data/products.json', JSON.stringify(productsArr), { encoding: 'utf-8' })

        const response = new ResponseBuilder()
            .setOk(true)
            .setMessage("Producto creado")
            .setStatus(201)
            .setData({
                products: JSON.parse(await filesystem.promises.readFile('./data/products.json', { encoding: 'utf-8' }))
            })
            .build()

        /* console.log(isNaN(productoNuevo.price)) */
        return res.status(200).json(response)
    }
    catch (error) {
        console.error(error.message)
        const response = new ResponseBuilder()
            .setOk(false)
            .setMessage("Internal Server Error")
            .setStatus(500)
            .setData({})
            .build()
        return res.status(500).json(response)
    }
}

export const putProductController =  async (req, res) => {
    try {
        const { product_id } = req.params

        const responseErr = new ResponseBuilder()
            .setOk(false)
            .setMessage("")
            .setStatus(400)
            .setData({

            })
            

        const productsArr = JSON.parse(await filesystem.promises.readFile('./data/products.json', { encoding: 'utf-8' }))
        const productoNuevo = req.body
        const productoToUpdate = productsArr.find(producto => producto.id == product_id)
        const productoToUpdateIndex = productsArr.findIndex(producto => producto.id == product_id)
        
        if(productoToUpdateIndex === -1){
            responseErr
            .setMessage("No se encontro ningun objeto con este id")
            .setStatus(404)
            .build()
            return res.status(404).json(responseErr)
        }

        //Validaciones de formato del objeto
        const propiedades_validas = ['title', 'price', 'stock', 'categoria']
        const propiedades_invalidas = []

        for (let propiedad in productoNuevo) {
            if (!propiedades_validas.includes(propiedad)) {
                propiedades_invalidas.push(propiedad)
            }
        }

        if (!productoNuevo.hasOwnProperty(propiedades_validas[0]) && !productoNuevo.hasOwnProperty(propiedades_validas[1]) && !productoNuevo.hasOwnProperty(propiedades_validas[2]) && !productoNuevo.hasOwnProperty(propiedades_validas[3])) {
            responseErr.setMessage("No se ingreso ninguna de las propiedades validas necesarias")
            .build()
            return res.status(400).json(responseErr)
        }

        if (productoNuevo.hasOwnProperty(propiedades_invalidas[0])) {
            responseErr.setMessage("Las propiedades no son validas")
            responseErr.setData({ message: `Las propiedades no son validas, propiedades validas: 'title', 'categoria', 'stock', 'price', invalidas: ${propiedades_invalidas}` })
            .build()
            return res.status(400).json(responseErr)
        }


        //Title
        if (productoNuevo.hasOwnProperty(propiedades_validas[0])) {
            if (!isNaN(productoNuevo.title)) {
                responseErr.setMessage("El titulo no es un string o es vacio")
                .build()
                return res.status(400).json(responseErr)
            }
            if (productsArr.toSpliced(productoToUpdateIndex, 1).find(producto => producto.title.toLowerCase() === productoNuevo.title.toLowerCase()) && productoNuevo.title != productoToUpdate.title) {
                responseErr.setMessage("Ya existe un producto con este titulo y no es el producto a reemplazar")
                .build()
                return res.status(400).json(responseErr)
            }
            productsArr[productoToUpdateIndex].title = productoNuevo.title
        }

        //Categoria
        const categorias_existentes = ['ropa', 'tecnologia', 'jugueteria']

        if (productoNuevo.hasOwnProperty(propiedades_validas[3])) {
            if (!productoNuevo.categoria || !isNaN(productoNuevo.categoria) || !categorias_existentes.includes(productoNuevo.categoria.toLowerCase())) {
                responseErr.setMessage("La categoria no es un string valido o no es una de las categorias existentes")
                .build()
                return res.status(400).json(responseErr)
            }
            productsArr[productoToUpdateIndex].categoria = productoNuevo.categoria
        }

        //Price
        if (productoNuevo.hasOwnProperty(propiedades_validas[1])) {
            if (isNaN(productoNuevo.price) || !productoNuevo.price || !(productoNuevo.price !== true)) {
                responseErr.setMessage("El precio no es un numero o es negativo")
                .build()
                return res.status(400).json(responseErr)
            }
            productsArr[productoToUpdateIndex].price = productoNuevo.price
        }

        //Stock
        if (productoNuevo.hasOwnProperty(propiedades_validas[2])) {
            if (isNaN(productoNuevo.stock) || !productoNuevo.stock || !(productoNuevo.stock !== true)) {
                responseErr.setMessage("El stock no es un numero o es negativo")
                .build()
                return res.status(400).json(responseErr)
            }
            productsArr[productoToUpdateIndex].stock = productoNuevo.stock
        }

        productsArr[productoToUpdateIndex].active = true
        console.dir(productsArr)

        //Modificacion de products.json al finalizar el proceso
        await filesystem.promises.writeFile('./data/products.json', JSON.stringify(productsArr), { encoding: 'utf-8' })

        
        const response = new ResponseBuilder()
            .setOk(true)
            .setMessage("Producto creado")
            .setStatus(201)
            .setData({
                producto: productsArr[productoToUpdateIndex]
            })
            .build()

        /* console.log(isNaN(productoNuevo.price)) */
        return res.status(201).json(response)
    }
    catch (error) {
        console.error(error.message)
        const response = new ResponseBuilder()
            .setOk(false)
            .setMessage("Internal Server Error")
            .setStatus(500)
            .setData({})
            .build()
        return res.status(500).json(response)
    }
}
