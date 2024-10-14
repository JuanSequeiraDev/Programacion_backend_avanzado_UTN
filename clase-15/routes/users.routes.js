import express from 'express'
import filesystem from 'fs'
import ResponseBuilder from '../builders/response.builder.js'           //Añadir el .js!!!!!!!

//Instancio a mi ruta y se lo asigno a userRouter
const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = JSON.parse(await filesystem.promises.readFile('./data/users.json', { encoding: 'utf-8' }))

        //Esto genera un objeto {response: {ok, status, message, payload}}
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setData(
                { usersArr: users }
            )
            .setMessage('Usuarios obtenidos')
            .setCode('SUCCES')
            .build() //Siempre debe ir al final


        res.json(response)
    }
    catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Internal server error')
            .setData({
                detail: error.message
            })
            .setCode('SERVER ERROR')
            .build()
        res.status(500).json(response)
    }
})



//La usamos como si fuera app, pero ahora tiene asignado las consultas a la ruta /api/users

//Endpoint real: /api/users + '/' de el get
//Voy a buscar en mi lista de usuarios a todo los usuarios y devolver a los que tengan active = true


export default userRouter