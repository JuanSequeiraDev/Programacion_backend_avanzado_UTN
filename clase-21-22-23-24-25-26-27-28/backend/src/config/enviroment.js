//npm i dotenv
import dotenv from 'dotenv'

//process es una variable global que guara datos del proceso de ejecucion de node
//Configuramos en process.env las variables de entorno del archivo .env

dotenv.config() //Se puede pasar un objeto con un path hacie el .env


const ENVIROMENT = {
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
    EMAIL_USER: process.env.EMAIL_USER || '',
    SECRET_KEY: process.env.SECRET_KEY || '',
    FRONTEND_URL: process.env.FRONTEND_URL || '',
    BACKEND_URL: process.env.BACKEND_URL || ''
}

export default ENVIROMENT