import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import useProducts from '../Hooks/useProducts'
import { Link } from 'react-router-dom'

//Ni componentes hooks pueden ser async
const HomeScreen = () => {
    const { products, products_error_state, products_loading_state } = useProducts()
    console.log(products_loading_state)

    return (
        <div>
            <h1>Bienvendo al home </h1>
            {/* 
            Ver si el usuario tiene rol de admin y si tiene rol de admin mostrar el boton de crear producto, este boton te llevara a /product/new y nos mostrara un formularia para crear el producto
            */}
            <div>
                {
                    products_loading_state
                        ? <span>Cargando</span>
                        : (
                            products_error_state
                                ? <span>{products_error_state}</span>
                                : <div>
                                    {
                                        products.map(
                                            (product) => {
                                                return(
                                                    <div key={product._id}>
                                                        <h2 >
                                                            {product.title}
                                                        </h2>
                                                        <span>Precio ${product.price}</span>
                                                        <Link to={`/product/${product._id}`}>Ver detalle</Link>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                        )
                }
            </div>
        </div>
    )
}

export default HomeScreen