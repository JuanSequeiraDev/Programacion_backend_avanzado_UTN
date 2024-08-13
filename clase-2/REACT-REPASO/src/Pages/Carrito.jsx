import React from 'react'
import Navbar from '../Components/Navbar'
import { useGlobalContext } from '../Context/GlobalContext'

const Carrito = () => {
    const {carrito} = useGlobalContext()

    return (
        <div>
            <Navbar />
            <h1>Carrito</h1>
            {
                carrito.map(item =>{
                    return(
                        <div>
                            <h2>{item.nombre}</h2>
                            <span>Precio: ${item.precio}</span>
                            <p>Cantidad Comprada: {item.cantidad}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Carrito