import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donuts from './pages/Donuts';
import NoMatch from "./pages/NoMatch";
import donuts from "./images/donuts-yellow.jpg"
import './App.css';

function App() {
  return (
<Router>
      <div styles={{ backgroundImage:`url(${donuts})` }}>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Donuts />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
