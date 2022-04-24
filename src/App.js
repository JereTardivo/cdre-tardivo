import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <ItemListContainer itemDescription='Remera Titular' price={3000} />
        
      </header>
      <ItemCount Stock={10}></ItemCount>
    </div>
  );
}

export default App;
