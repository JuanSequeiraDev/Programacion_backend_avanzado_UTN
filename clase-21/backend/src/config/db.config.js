//Logica de conexion con la Database

import mongoDB from "mongoose"
import User from "../models/user.model.js"

const MONGO_URL = 'mongodb://localhost:27017/TN_PWA_PRUEBA_MONGOOSE'

//.connect se utiliza para establecer una conexion con la DB
//Recibe una connection_string (url de la DB) y un objeto de configuracion
mongoDB.connect(MONGO_URL, {})
.then(
    () =>{
        console.log('Se establecio la conexion con mongoDB')
        const userCreated = new User({name: 'pepe', email: 'pepe@gmail.com', password: 'pepe123', verificationToken: ''})
        userCreated.save() //Esto lo guarda en mongoDB
    }
)
.catch(
    (error)=> {
        console.error('La conexion con mongoDB ha fallado', error)
    }
)
.finally(
    ()=>{
        console.log('El proceso de conexion con la DB esta finalizado')
    }
)



export default mongoDB