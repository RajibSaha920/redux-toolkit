import { useState } from 'react'
import { Header } from './Header.jsx'
import { Product } from './Product.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartList } from './redux/CartList.jsx'


function App() {


  return (
    <>
    <BrowserRouter>
     <Header/>
      
    <Routes>
      <Route path='/' element={<Product/>}>Product </Route>
      <Route path='/cart' element={<CartList/>}>Cart</Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
