import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';

import Route from './routing/Route';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="headline">Routing in React</h1>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
