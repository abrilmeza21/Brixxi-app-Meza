import NavBar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (

    <BrowserRouter >
      <NavBar />
      
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;