import React from 'react'
import useForm from '../Hooks/useForm'
import { Link } from 'react-router-dom'


const ForgotPasswordScreen = () => {
    const {formState, handleChange} = useForm({
        email: '',
    })

    const handleForgotPassword = async (e) =>{
        e.preventDefault()

        const responseHTTP = await fetch('http://localhost:3000/api/auth/forgot-password',
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

    return (
        <div>
            <h1>Restablecer contraseña</h1>
            <p>Al reestablecer tu contraseña se enviara un correo electronico para enviarte las instrucciones de reestablecimiento de contraseña</p>
            <form onSubmit={handleForgotPassword}>
                <div>
                    <label htmlFor="">Ingresa tu Email</label>
                    <input
                        type="Email"
                        name="Email"
                        id="Email"
                        placeholder='Ingresa tu email'
                        onChange={handleChange} 
                        value={formState.Email}
                        />
                </div>
                
                <button type='submit'>Restablecer</button>
                <br />
                <Link to='/login'>Iniciar sesion</Link>
            </form>
        </div>
    )
}

export default ForgotPasswordScreen
