import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Shop/ItemList/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Shop/ItemDetail/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import CartList from './components/Shop/Cart/CartList';
import Footer from './components/Footer';
import OurCompany from './components/Us/OurCompany'
import ContactForm from './components/Contact/ContactForm'
import Sale from './components/Shop/Order/Sale';




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
            <Route path="/us" element={<OurCompany />}></Route> 
            <Route path="/contact" element={<ContactForm />}></Route>   
            <Route path="/sale" element={<Sale />}></Route>        
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );




}

export default App;
