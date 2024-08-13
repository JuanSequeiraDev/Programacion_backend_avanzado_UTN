import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div style={{color:red}}>
            404Error
            <Link to={'/'}>Volver</Link>
        </div>
    )
}

export default Error404