import NavBar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from "./components/Cart/CartContext";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer";
import {Cart} from "./components/Cart/Cart"
import { OrderContainer } from './components/Cart/OrderContainer/OrderContainer';


function App() {

  return (
  <CartContextProvider >
    <BrowserRouter >
      <NavBar />
      
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders/:id' element={<OrderContainer />} />
        
        </Routes>
      
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;