import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Carrito from './Pages/Carrito'
import Error404 from './Pages/Error404'
import Detail from './Pages/Detail'

function App() {


  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/detail/:pid' element={<Detail/>}/>
        <Route path='/*' element={<Error404 />} />
      </Routes>
  )
}

export default App
