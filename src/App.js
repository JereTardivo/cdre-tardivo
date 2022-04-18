import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Proximamente
        </h1>
        <p>
          Ecommerce del C.D.R.E
        </p>
        
      </header>
    </div>
  );
}

export default App;
