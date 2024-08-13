import React from 'react'
import { Link } from 'react-router-dom'

export const ProductsList = ({products}) =>{
    return(
        <div>
            {products.map(product => {
                return(<Products {...product}/> /* SPREAD: envia todas las propiedades de (En este caso) cada item del prop */
            )})}
        </div>
    )
}

const Products = ({ nombre, precio, imagen, id, descripcion}) => {
    return (
                <div key={id}>
                    <h2>{nombre}</h2>
                    <img src={imagen} alt={nombre} />
                    <span>Precio: ${precio}</span>
                    <p>{descripcion}</p>
                    <Link to={'/detail/' + id}>Ver detalle</Link>
                    <hr />
                </div>
    )
}

export default Products