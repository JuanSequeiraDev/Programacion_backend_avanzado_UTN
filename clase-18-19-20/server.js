import express from 'express'
import express_handlebars from 'express-handlebars'
import { engine } from 'express-handlebars'
import ResponseBuilder from './builders/response.builder.js'

const app = express()
const PORT = 3000

app.use(express.static('public'))


//Middleware para indicarle a mi backend que cuando reciba consultas que el Content-Type: 'application/www.url-encoded' se transformen en objeto y sean mandadas por el body de request
app.use(express.urlencoded({ extended: true }))




//Configuramos nuestro motor de plantillas

//1)Indicamos a la aplicacion que motor debe utilizar
app.engine('handlebars', engine())

//2)Indicamos que usaremos como plantilla
app.set('view engine', 'handlebars')

//3)Indicamos la direccion donde estaran nuestras plantillas
app.set('views', './views')



const productos = [
    {
        id: 1,
        nombre: 'tv noblex',
        precio: 4000,
        descripcion: 'Una tv que se puede usar para ver canales',
        categorias: ['tecnologia', 'hogar', 'futbol'],
        stock: 4,
        active: true
    },
    {
        id: 2,
        nombre: 'Pc escritorio dell',
        precio: 6000,
        descripcion: 'Una PC cumplidora',
        categorias: ['tecnologia', 'computacion', 'office'],
        stock: 2,
        active: true
    },
    {
        id: 3,
        nombre: 'Laptop MSI',
        precio: 10000,
        descripcion: 'Una laptop apta para todo.',
        categorias: ['tecnologia', 'computacion', 'gaming', 'office'],
        stock: 7,
        active: true
    }
]


//Manejo que error tuvo cada campo 
/* function errorHandler(field_name, field_value){
    if (!field_value) {
        campos_permitidos[field_name].error = 'Por favor completa el campo'
    }
} */

    const ERRORS_VALIDATION_DICCIONARY = {
        'STRING_VALIDATION': 'STRING_VALIDATION'
    }
    
    
    const verifyString = (field_name, field_value) => {
        if(!(typeof(field_value) === 'string')){
            return {
                error: ERRORS_VALIDATION_DICCIONARY.STRING_VALIDATION,
                message: field_name + ' debe ser un texto',
            }
        }
    }
    const verifyMinLength = (field_name, field_value, minLength) => {
        if(!(field_value.length > minLength)){
            return {
                error: 'MIN_LENGTH_VALIDATION',
                message: field_name + ' debe tener como minimo ' + minLength + ' caracteres',
            }
        }
    }
    
    const verifyNumber = (field_name, field_value) => {
        if(!(typeof field_value === 'number')){
            return {
                error: 'NUMBER_VALIDATION',
                message: field_name + ' debe ser un numero',
            }
        }
    }


app.get('/', (req, res) => {

    
    //res.render indica que voy a renderizar y devolver HTML como respuesta
    //res.render debe recibir el nombre de la vista y un objeto de opciones
    //res.render('',{layout: ''}) Podemos pasarle en el objeto las opciones la prop layout con el valor del nombre del layout que queramos usar (por defecto se usara main.layout) o podemos indicarle false para indicar que NO se usara layout (solo cargara la vista)
   


    //res.render('home', {
    //    layout: 'main',  //Por defecto esta configurado para trabajar con el main, por lo cual esta especificacion de layout es omitible
    //    data:{
    //        title: 'Pagina 1',
    //        username: 'juancito'
    //    },
    //    helpers:{
    //        isRegistered(){
    //            //Esta funcion se carga del lado del servidor
    //            return 1 === 1 && 'juancito'.length > 6
    //        }
    //    }
    //})
    //})
    const viewProps = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            title: 'Ofertas de la semana',
            products: productos,
        },
        helpers: {

        }
    }

    res.render('home-view', viewProps)
})


app.get('/product/detail/:product_id', (req, res) => {

    const { product_id } = req.params
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))
    if (!producto_buscado) {
        //Logica 404
    }

    const viewProps = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            product: producto_buscado
        },
        helpers: {

        }
    }

    res.render('detail-view', viewProps)
})



//      New Product View | Form

app.get('/product/new', (req, res) => {
    const campos_state = {
        nombre: {
            valor: 'nombre',
            error: null
        },
        descripcion: {
            valor: 'descripcion',
            error: null
        },
        stock: {
            valor: 0,
            error: null
        },
        precio: {
            valor: 0,
            error: null
        }
    }


    const view_props = {
        layout: 'main',
        status: 200,
        ok: true,
        data: {
            form_state: campos_state
        }
    }

    res.render('new-product-view', view_props)
})

/* app.post('/product/new', (req, res) => {
    try {
        const { nombre, descripcion, stock, precio } = req.body

        const campos_state = {
            nombre: {
                valor: nombre,
                error: null
            },
            descripcion: {
                valor: descripcion,
                error: null
            },
            stock: {
                valor: stock,
                error: null
            },
            precio: {
                valor: precio,
                error: null
            }
        }
        //Validar que los datos tengan sentido
        if (!nombre || nombre.length < 4 || !isNaN(nombre)) {
            campos_state.nombre.error = 'Debes ingresar un nombre valido, minimo 4 caracteres'
        }
        if (!descripcion || descripcion.length < 10 || !isNaN(descripcion)) {
            campos_state.descripcion.error = 'Debes ingresar una descripcion valida, minimo 10 caracteres'
        }
        if (!precio || isNaN(precio)) {
            campos_state.precio.error = 'Debes ingresar un precio valido, solo numeros'
        }
        if (!stock || isNaN(stock)) {
            campos_state.stock.error = 'Debes ingresar un stock valido, solo numeros'
        }

        if (campos_state.nombre.error === null && campos_state.descripcion.error === null && campos_state.precio.error === null && campos_state.stock.error === null) {
            productos.push(campos_state)
            return res.redirect('/')
        }


        const view_props = {
            layout: 'main',
            status: 400,
            ok: false,
            data: {
                form_state: campos_state
            }
        }
        return res.render('new-product-view', view_props)
    }
    catch (error) {
        console.error(error.message)
    }
}) */

    app.post('/product/new', async (req, res)=>{
        try {
            const { nombre, precio, descripcion, categorias, stock } = req.body;
    
            const form = {
                nombre: { 
                    valor: nombre, 
                    errors: [],
                    validations:[
                        verifyString,
                        (field_name, field_value) => verifyMinLength(field_name, field_value, 5)
                    ]
                },
                precio: { 
                    valor: precio, 
                    errors: [],
                    validations: [
                        verifyNumber
                    ]
    
                },
                descripcion: { 
                    valor: descripcion, 
                    errors: [],
                    validations: [
                        verifyString,
                        (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                    ]
                },
                categorias: { 
                    valor: categorias, 
                    errors: [],
                    validations: [
    
                    ]
                },
                stock: { 
                    valor: stock, 
                    errors: [],
                    validations: [
                        verifyNumber
                    ]
                }
            };
    
            /* 
            Aqui recorremos los campos del formulario y por cada campo activamos las validaciones de dicho campo.
            En caso de que una validacion falle, insertamos dicho fallo sobre la lista de errores de ese campo.
            */
            let hayErrores = false
            for(let field_name in form){
                for(let validation of form[field_name].validations){
                    /* result: {error, message} | undefined */
                    let result = validation(field_name, form[field_name].valor)
                    if(result){
                        hayErrores = true
                        form[field_name].errors.push(result)
                    }
                }
            }
            if(hayErrores){
                const response = new ResponseBuilder()
                .setStatus(400)
                .setLayout('main')
                .setOk(false)
                .setData({
                    form_state: form,
                })
                .build();
                return res.status(400).render('newProduct', response);
            }
    
    
            const products = JSON.parse(await fs.promises.readFile('./data/data.json', { encoding: 'utf-8' }));
            if (!products) {
                const response = new ResponseBuilder().setStatus(500).setOk(false).setLayout('main').setData({ message: 'Products not found' }).build()
                return res.status(500).render('error', response)
            }
            const newProduct = {
                id: products.length + 1,
                nombre,
                precio,
                descripcion,
                categorias,
                stock
            }
    
            products.push(newProduct)
            await fs.promises.writeFile('./data/data.json', JSON.stringify(products, null, 2), { encoding: 'utf-8' })
            return res.status(200).redirect('/');
        } catch (error) {
            const response = new ResponseBuilder()
                .setStatus(500)
                .setLayout(null)
                .setOk(false)
                .setMessage(error.message)
                .setData({ error: error.code })
                .build();
            return res.status(500).send(response);
        }
    })

app.listen(PORT, () => {
    console.dir('la aplicacion se esta escuchando en: http://localhost:' + PORT)
})
