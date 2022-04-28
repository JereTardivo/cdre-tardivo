import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCount from './components/ItemCount';


function App() {
  
  return (

    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/nuestra-historia" element={<ItemCount />}></Route>
        <Route path="/futbol-masculino" element={<ItemCount />}></Route>
        <Route path="/futbol/femenino" element={<ItemCount />}></Route>
        <Route path="/hockey" element={<ItemCount />}></Route>
        <Route path="/bochas" element={<ItemCount />}></Route>
        <Route path="/camisetas" element={<ItemCount />}></Route>
        <Route path="/conjuntos" element={<ItemCount />}></Route>
        <Route path="/merchandaising" element={<ItemCount />}></Route>
        <Route path="/contacto" element={<ItemCount />}></Route>
        <Route path="/carrito" element={<ItemCount />}></Route>
        <Route path="/perfil" element={<ItemCount />}></Route>
        <Route path="/configuracion" element={<ItemCount />}></Route>
      </Routes>
    </BrowserRouter>

   
  );




}

export default App;
