import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donuts from './pages/Donuts';
import './App.css';

function App() {
  return (
<Router>
      <div>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Donuts />
          </Route>
          <Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
