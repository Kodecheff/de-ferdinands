import React from 'react';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import {HashRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
