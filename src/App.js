import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Switch> 
        <Route path='/'exact component={Home} />
        <Route path='/Home'exact component={Home} />
        <Route path='/Contact'exact component={Contact} />
        <Route path='/About'exact component={About} />
        <Route path='/Portfolio'exact component={Portfolio} />
      </Switch>
    </Router>
  </div>
  
);

export default App;
