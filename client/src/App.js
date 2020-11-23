import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donuts from './pages/Donuts';
import NoMatch from "./pages/NoMatch";

function App() {
  return (
<Router>
        <Switch>
          <Route exact path={["/", "/donuts"]}>
            <Donuts />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
