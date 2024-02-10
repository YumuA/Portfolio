import './App.css';
import Content from './components/Content';
import Menutop from './components/menutop';

 function App(){
  return (
    <div className="App">
      <Menutop />
      
      <Content />
      
      
      <footer>
        <p>Derechos de autor &copy; 2024 Kevin Rojas</p>
      </footer>
    </div>
  );
}

export default App;
