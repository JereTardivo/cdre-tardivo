import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Proximamente
        </h1>
        <p>
          Ecommerce del C.D.R.E
        </p>
      <Saludo name='Jere' edad={29}/>
      </header>
    </div>
  );
}

export default App;
