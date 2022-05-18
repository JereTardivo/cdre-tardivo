import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import CartList from './components/CartList';


function App() {



  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings={"Classics."} />}></Route>
            <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Classics."} />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<CartList />}></Route>            
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );




}

export default App;
