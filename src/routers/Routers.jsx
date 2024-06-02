import React from 'react'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Signup from '../pages/Signup'
import Shop from '../pages/Shop'

import { Route,Routes,Navigate } from 'react-router-dom'
 

function Routers() {
  return <Routes>
    <Route path='/' element={<Navigate to ='home'/>}/>
    <Route path='home' element={<Home/>}  />
    <Route path='shop' element={<Shop/>}  />
    <Route path='cart' element={<Cart/>}  />
    <Route path='checkout' element={<Checkout/>}  />
    <Route path='shop/:id' element={<ProductDetails/>}  />
    <Route path='signup' element={<Signup/>}  />
    <Route path='login' element={<Login/>}  />
  </Routes>
}

export default Routers
