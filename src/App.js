import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Routing in React</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;