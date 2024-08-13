import React from 'react'
import Navbar from '../Components/Navbar'
import { Products } from '../Components'
import { productos } from '../data/productos'
import { ProductsList } from '../Components/Products'
import { useGlobalContext } from '../Context/GlobalContext'

const Home = () => {
    const valores = useGlobalContext()
    console.log(valores)
    return (
        <div>
            <Navbar/>
            <h1>Home</h1>
            <ProductsList products={productos}/>
        </div>
    )
}

export default Home