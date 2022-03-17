import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import Display from './components/Display';
import Info from './components/Info'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path = "/info">
        <Info/>
      </Route>
      <Route path = "/landing">
        <LandingPage/>
      </Route>
      <Route path = "/">
        <Display/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
