import React from 'react'
import useForm from '../Hooks/useForm'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const {formState, handleChange} = useForm({
        email: '',
        password: ''
    })

    const handleLogin = async (e) =>{
        e.preventDefault()
        console.log('formulario registro enviado')
        /* Obtener un objeto con todos los datos del form, ejemplo {email: '', password: ''} */

        //CORS = CROSS ORIGIN RESOURCE SHARING
        const responseHTTP = await fetch('http://localhost:3000/api/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })

        const data = await responseHTTP.json()
        console.log(data)
    }

    //console.log(formState)

    return (
        <div>
            <h1>Inicia sesion en discord</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">Ingresa tu email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='email@gmail.com'
                        onChange={handleChange} 
                        value={formState.email}
                        />
                </div>
                <div>
                    <label htmlFor="">Ingresa tu password</label>
                    <input 
                    type="password" 
                    name='password' 
                    id='password' 
                    placeholder='admin123' 
                    onChange={handleChange} 
                    value={formState.password}
                    />
                </div>
                <button type='submit'>Iniciar Sesion</button>
            </form>
            <br />
            <span>No tienes cuenta? Registrate <Link to="/register">aqui</Link></span>
            <br />
            <Link to='/forgot-password'>Olvide mi contraseña</Link>
        </div>
    )
}

export default LoginScreen