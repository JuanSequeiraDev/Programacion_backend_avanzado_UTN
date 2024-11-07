import e from "express"
import ENVIROMENT from "../config/enviroment.js"
import { FieldConfig } from "../helpers/builders/field_config.builder.js"
import ResponseBuilder from "../helpers/builders/response.builder.js"
import transporterEmail from "../helpers/emailTransporter.helpers.js"
import User from "../models/user.model.js"
import { verifyEmail, verifyMinLength, verifyString } from "../utils/verifications.js"
import bcrypt, { compareSync } from 'bcrypt'
//npm i bcrypt
import jwt from 'jsonwebtoken'
//npm i jsonwebtoken

export const registerController = async (req, res) => {
    try {
        const { name, password, email } = req.body

        //Hacer un builder con fields, validate y hasErrors
        const loginConfig = new FieldConfig()
            .setNewField('email', email)
            .setFieldValidations('email',
                [
                    verifyEmail,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            ).setNewField('name', name)
            .setFieldValidations('name',
                [
                    verifyString,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 5)
                ]
            )
            .setNewField('password', password)
            .setFieldValidations('password',
                [
                    verifyString,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            )
            .validateFields()
            .build()

        console.log(loginConfig)
        if (loginConfig.hayErrores) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setCode('VALIDATION_ERROR')
                .setData(
                    { registerState: loginConfig }
                )
                .build()
            return res.json(response)
        }

        const passwordHash = await bcrypt.hash(loginConfig.password.value, 10)

        // Recibe 3 parametros en el siguiente orden: payload(contenido del token), Secret_key(clave utilizada para firmar SENSIBLE), options(es un objeto con la configuracion)
        const validationToken = jwt.sign({ email: loginConfig.email.value }, ENVIROMENT.SECRET_KEY, {
            expiresIn: '1d'
        })

        const redirectUrl = ENVIROMENT.BACKEND_URL + '/api/auth/verify-email/' + validationToken

        const result = await transporterEmail.sendMail({
            subject: 'Valida tu email',
            to: loginConfig.email.value,
            html: `
                <h1>Valida tu mail</h1>
                <p>Para validar tu mail da click <a href='${redirectUrl}'>aqui</a></p>
            `
        })

        /* console.log(result) */

        const userCreated = new User(
            {
                name: loginConfig.name.value,
                email: loginConfig.email.value,
                password: passwordHash,
                verificationToken: ''
            })
        await userCreated.save() //Async

        const response = new ResponseBuilder()
            .setCode('SUCCES')
            .setOk(true)
            .setStatus(200)
            .setData(
                { registerResult: loginConfig }
            )
            .build()
        return res.json(response)
    }
    catch (error) {
        if (error.code === 11000) {
            const response = new ResponseBuilder()
                .setCode('EMAIL_VALIDATION')
                .setOk(false)
                .setStatus(400)
                .setData(
                    { detail: "El email ya esta registrado" }
                )
                .setMessage('Email already registered')
                .build()
            console.error('Error al registrar')
            console.error(error)
            return res.json(response)
        }
        const response = new ResponseBuilder()
            .setCode('INTERNAL SERVER ERROR')
            .setOk(false)
            .setStatus(500)
            .setData(
                { error: error.message }
            )
            .build()
        return res.json(response)
    }
}


export const verifyEmailController = async (req, res) => {
    try {
        const { validation_token } = req.params
        const payload = jwt.verify(validation_token, ENVIROMENT.SECRET_KEY)
        const email_to_verify = payload.email
        const usuario_a_verificar = await User.findOne({ email: email_to_verify })

        /* console.log(usuario_a_verificar) */
        usuario_a_verificar.emailVerified = true
        await usuario_a_verificar.save()
        return res.sendStatus(200) // Prueba rapida, Otra opcion seria:  res,redirect(http://localhost:5173/api/auth/login)
        /* res.redirect('URL_FRONT') */
    }
    catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}


export const loginController = async (req, res) => {
    try {
        //Recibir del body el email y la password
        //Validar estos datos
        //Buscar en la DB si existe un usuario con dicho mail
        //Comparar la password hasheada del usuario con la password recibida | hecho
        //Si no es igual tirar error
        //En caso de existir verificar si su emailVerify es verdadero (sino tirar error de logeo)
        //Generar un token de acceso con jwt donde guardemos datos como el user_id, nombre y el email
        //Responder exitosamente con el token de acceso
        const { email, password } = req.body

        const loginConfig = new FieldConfig()
            .setNewField('email', email)
            .setFieldValidations('email',
                [
                    verifyEmail,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            )
            .setNewField('password', password)
            .setFieldValidations('password',
                [
                    verifyString,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            )
            .validateFields()
            .build()

        if (loginConfig.hayErrores) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setCode('VALIDATION_ERROR')
                .setData(
                    { loginConfig: loginConfig }
                )
                .build()
            return res.json(response)
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            res.sendStatus(404)
        }

        const passwordMatch = await bcrypt.compare(loginConfig.password.value, user.password)
        if (!passwordMatch) {
            const response = new ResponseBuilder()
                .setStatus(400)
                .setCode('INCORRECT_PASSWORD')
                .setOk(false)
                .setMessage('Error al matchear contraseñas')
                .setData({
                    detail: "La contraseña difiera de la contraseña respectiva al email en la DB"
                })
                .build()
            return res.status(401).json(response) // o throw
        }

        if (!(user.emailVerified)) {
            const response = new ResponseBuilder()
                .setStatus(403)
                .setCode('EMAIL_NOT_VERIFIED')
                .setOk(false)
                .setMessage('Email no verificado')
                .setData({
                    detail: "No se verifico el mail mediante el url enviado previamente"
                })
                .build()
            return res.status(403).json(response)//Contenido prohibido
        }

        const acces_token = jwt.sign({
            user_id: user.id,
            name: user.name,
            email: user.email
        }, ENVIROMENT.SECRET_KEY,
            {
                expiresIn: '1d' //Esto determina cuanto dura la sesion
            })

        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setCode('LOGGED_SUCCES')
            .setMessage('LOG SUCCES!')
            .setData({
                access_token: acces_token,
                user_info: {
                    user_id: user.id,
                    name: user.name,
                    email: user.email
                }
            })
            .build()

        res.status(200).json(response)

    }
    catch (error) {
        console.error(error)
    }
}


export const forgotPasswordController = async (req, res) => {
    //Recibir el email del body
    //Buscar al usuario por email en la DB
    //Si esta todo bien firmar reset_token con el email del usuario
    //Crear una resetUrl = url_front/reset-password/:${reser_token}
    //Enviar un mail con asunto recuperar contraseña y un link con el resetUrl
    try {
        const { email } = req.body
        const loginConfig = await new FieldConfig()
            .setNewField('email', email)
            .setFieldValidations('email',
                [
                    verifyEmail,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            )
            .validateFields()
            .build()

        if (loginConfig.hayErrores) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setCode('VALIDATION_ERROR')
                .setData(
                    { loginConfig: loginConfig }
                )
                .build()
            return res.json(response)
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setCode('USER_NOT_FOUND')
                .setData(
                    { message: 'Ningun usuario coincide con ese mail en la bas de datos' }
                )
                .build()
            return res.json(response)
        }


        const reset_token = jwt.sign({ email: user.email }, ENVIROMENT.SECRET_KEY,
            {
                expiresIn: '1d'
            })

        const redirectUrl = ENVIROMENT.FRONTEND_URL + '/reset-password/' + reset_token

        const result = await transporterEmail.sendMail({
            subject: 'Recuperar contraseña',
            to: loginConfig.email.value,
            html: `
                <h1>Recupera tu contraseña</h1>
                <p>Para recuperar tu contraseña da click <a href='${redirectUrl}'>aqui</a></p>
            `
        })

        const response = new ResponseBuilder()
            .setStatus(200)
            .setOk(true)
            .setCode('SUCCES')
            .setData({
                message: 'SUCCES!'
            })
            .build()

        return res.status(200).json(response)
    }
    catch (error) {
        console.error(error)
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setCode('INTERNAL_SERVER_ERROR')
            .setData(
                { message: error.message }
            )
            .build()

        return res.json(response)

    }
}

export const resetPasswordController = async (req, res) => {
    //capturar el reset-token
    //Validar el token y obtienen el email del payload
    //Buscar en la DB al usuario con ese email
    //Validar que la contraseña nueva este
    //Hashear la password (bcrypt)
    try {
        const { reset_token } = req.params
        const { password } = req.body

        console.log(reset_token)
        console.log(password)
        if (!password) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setCode('MISSING_DATA')
                .setData(
                    { message: 'No se recibio ninguna contraseña' }
                )
                .build()
            return res.json(response)
        }

        const payload = jwt.verify(reset_token, ENVIROMENT.SECRET_KEY)
        const user = User.findOne({ email: payload.email })

        if (!user) {
            res.sendStatus(403)
        }

        const hashedPasswrod = bcrypt.hash(password, 10)
        user.password = hashedPasswrod
        await user.save()

        const response = new ResponseBuilder()
            .setStatus(200)
            .setOk(true)
            .setCode('SUCCES')
            .setData({
                message: 'PASSWORD SUCCESFULLY CHANGED!'
            })
            .build()

        return res.status(201).json(response)
    }
    catch (error) {
        console.error(error)
    }
}