import React from 'react'
import useForm from '../Hooks/useForm'
import { Link, useParams } from 'react-router-dom'
import Form from '../Components/Form'

const ResetPasswordScreen = () => {
    const { reset_token } = useParams()

    const RecoveryPasswordFunction = async (form_state) => {
        console.log(form_state)

        const response = await fetch('http://localhost:3000/api/auth/reset-password/' + reset_token,
            {
                method: 'PUT',
                headers:{
                    "Content_Type": "application/json"
                },
                body: JSON.stringify({
                    password: form_state.password
                })
            }
        )

        console.log(response)
        const data = await response.json()
        console.log({data})
    }

    const form_fields = [
        {
            label_text: 'Ingresa la nueva contraseña',
            field_container_props: {
                className: 'row_field'
            },
            field_component: 'INPUT',
            field_data_props: {
                name: 'password',
                id: 'password',
                placeholder: '',
                type: 'password'
            }
        }
    ]

    const initial_state_form={
        password: ''
    }

    return (
        <div>
            <h1>Ingresa nueva contraseña</h1>
            <Form action={RecoveryPasswordFunction} form_fields={form_fields} initial_state_form={initial_state_form}>
                
                <button type='submit'>Restablecer</button>
                <br />
                <Link to='/login'>Iniciar sesion</Link>
            </Form>

        </div>
    )
}

export default ResetPasswordScreen