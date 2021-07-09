import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  // let's check out the window.location object 👇
  console.log(window.location);

  // routing functions
  const showAbout = () => {
    if (window.location.pathname === '/about') {
      return <About />;
    }
  };

  const showContact = () => {
    if (window.location.pathname === '/contact') {
      return <Contact />;
    }
  };

  const showHome = () => {
    if (window.location.pathname === '/') {
      return <Home />;
    }
  };

  return (
    <div className="App">
      <h1 className="headline">Routing in React</h1>
      {showAbout()}
      {showContact()}
      {showHome()}
    </div>
  );
}

export default App;
