import express from "express"

import productsRouter from "./routes/products.router.js"

const app = express()

const PORT = 7000



app.listen(PORT, ()=>{
    console.dir(`Se esta escuchando la aplicacion de express en el puerto ${PORT}`)
})




app.use('/api/products', productsRouter)