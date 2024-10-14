import express, { response } from "express"

const app = express()
const PORT = 8000

//Muddleware = programa que se ejecuta entremedio de otro programa
//Todas las consultas http que se hagan a mi servidor pasaran por app.use()
//Que hace express.json()? si los headers de la consulta son Content-Type: 'Application/json' entonces guardara el body como un JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* 
bloqueoListaNegra
verificarClave
*/



app.listen(PORT, () => {
    console.log('el servidor esta funcionando en http://localhost:' + PORT)
})

//Crear un endpoint
// /ping => vamos a responder con un texto con contenido 'pong'

//GET es utilizado para consultas de busqueda
app.get('/ping', (req, res) => {
    // response.ok => Si la respuesta se hizo bien o no
    // response.status => Determinamos como fue resuelta la operacion
    // response.payload \ reponse.data \ response.result => objeto con informacion
    const response = {
        ok: true,
        status: 200,
        mensaje: 'pong',
        data: {

        },
        code: 'SUCCES'
    }
    //Es comun enviar siempre status http 200 solo para verificar que la consulta se haya realizado
    res.status(200).json(response)

})

//Crear un endpoint POST llamado /register al que le pasaran un username y una password
//Validar que username y password sean datos string no vacios
//Si hay un error de validacion responder ok:false, status:400, mseeage: 'debes tener un username valido'
//Sino mostrar los datos por consola
//Responder en caso de que todo este bien con ok:true, status:201, message: 'Usuario registrado'


//POST es utilizado para enviar informacion al servidor
app.post('/ping', (req, res) => {
    //Capturar los datos del body
    //El body esta en la request
    // Este es el body req.body()
    console.log('este es el body: ', req.body)
    console.log(req.body.nombre)
    const response = {
        ok: true,
        status: 200,
        message: 'Consulta realizada con exito',
        data: {

        },
        code: 'SUCCES'
    }
    res.json(response)


})

//PRODUCTOS


const productos = [
    {
        id: 1,
        nombre: 'Pantalon',
        precio: 100,
        imagen: 'https://picsum.photos/id/237/200/300',
        descripcion: 'Pantalon deportivo',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Camisa',
        precio: 50,
        imagen: 'https://picsum.photos/id/238/200/300',
        descripcion: 'Camisa deportiva',
        stock: 5
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 200,
        imagen: 'https://picsum.photos/id/239/200/300',
        descripcion: 'Zapatos deportivos',
        stock: 20
    }
]


//En caso de posible conflicto, poner por encima la request con parametro de busqueda
app.get('/productos/:producto_id', (req, res) => {
    //req.params es un objeto que guardara todos mis parametros de busqueda
    //api/cart/:user_id/:cart_id/ se guardara en req.params como {user_id: 'valor', cart_id: 'valor'}
    const { producto_id } = req.params
    const productoBuscado = productos.find((producto) => producto.id == producto_id)
    if (!productoBuscado) {
        //Tarea: Responder con 404
    }

    const response = {
        ok: true,
        status: 200,
        data: {
            productos: productoBuscado
        },
        message: 'Producto obtenidos'
    }
    res.json(response)
})

// Productos => responder con los productos

app.get('/productos', (req, res) => {
    //Los query params se almacenan en req.query
    const { min_price, max_price } = req.query
    const productos_buscados = productos.filter(producto => producto.precio > min_price && producto.precio < max_price)
    const response = {
        ok: true,
        status: 200,
        data: {
            productos: productos_buscados
        },
        message: 'Productos obtenidos'
    }
    res.json(response)
})



//REGISTER

app.post('/register', (req, res) => {
    const { username, password } = req.body
    const response = {
        ok: true,
        status: 201,
        message: 'Usuario registrado',
        data: {},
        code: 'SUCCES'
    }
    try {
        if (!username.trim() || !isNaN(username.trim())) {
            response.ok = false
            response.status = 400
            response.message = "Error de solicitud"
            response.data.detail = "El username debe ser un string no vacio"
            response.code = 'ERROR'
            return res.json(response) //Siempre poner return a mi response para cortar la funcion
        }
        if (!password.trim() || !isNaN(password.trim())) {
            response.ok = false
            response.status = 400
            response.message = "Error de solicitud"
            response.data.detail = "La password debe ser un string no vacio"
            response.code = 'ERROR'
            return res.json(response)
        }
        console.log(username, password)
        return res.json(response)
    }
    catch (error) {
        /* console.log(error) */
        response.message = 'internal server error'
        response.data.detail = error.message
        response.status = 500
        response.ok = false
        response.code = 'FATAL ERROR'
        console.log('username: ' + username)
        console.log('password: ' + password)
        return res.json(response)
    }
})