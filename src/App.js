import React from 'react';
import Form from './components/Form';
import Dashboard from "./components/Dashboard";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Info from './components/Info';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
    <Switch>
      <Info/>
    </Switch>
  </BrowserRouter>
);

export default App;
