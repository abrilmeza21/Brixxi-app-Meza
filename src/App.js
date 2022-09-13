import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Cart} from "./components/Cart/Cart"
import { CartContextProvider } from "./components/Cart/CartContext";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar"

function App() {

  return (
  <CartContextProvider >
    <BrowserRouter >
      <NavBar />
      
        <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />

        
        </Routes>
      
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;