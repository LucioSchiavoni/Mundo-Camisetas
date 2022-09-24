import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import Cart from './Cart/Cart';
import CartProvider from './Cart/CartContext';





export const CartContext = React.createContext("");


export const App = () => {
  return (

    <>
      <BrowserRouter >
        <NavBar />
        <CartProvider  >
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/pages/Nosotros' element={<Nosotros />} />
            <Route path='/pages/Contacto' element={<Contacto />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>

  )
}



export default App;
