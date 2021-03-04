import './App.css';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import {BrowserRouter as  Router,Route,Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact  path='/'>
            <Navbar />
            <Home />
          </Route>
          <Route exact  path='/cart'>
            <Cart/>
          </Route>
          <Route exact  path='/detail/:id'>
            <Navbar />
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
