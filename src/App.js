import './App.css';
import NavBar from './components/NavBar';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
        <ItemListContainer itemDescription='Remera Titular' price={3000} />
      </header>
      <body>
        <Contador></Contador>
      </body>


    </div>
  );
}

export default App;
