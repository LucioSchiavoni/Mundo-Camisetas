import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ItemDetailContainer } from './components/ItemDetailContainer';

import Cart from './Cart/Cart';
import CartProvider from './Cart/CartContext';
import { Inicio } from './pages/Inicio';
import { Home } from './pages/Home'
import { Away } from './pages/Away'
import Contacto from './pages/Contacto';
import { AwayCart } from './Visitantes/AwayCart'
import { AwayDetailContainer } from './Visitantes/AwayDetailContainer';



export const CartContext = React.createContext("");


export const App = () => {
  return (

    <>
      <BrowserRouter >
        <CartProvider  >
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Away' element={<Away />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/detalleAway/:detalleId' element={<AwayDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cartAway' element={<AwayCart />} />

          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>

  )
}



export default App;
